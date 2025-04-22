import { Request,Response } from 'express';
import { requiredStashEdit,stashEditBody } from '../../utils/stashUpdate.zodSchema';
import stashModel from '../../models/stash.db';

export async function editStashItem(req:Request<{},{},stashEditBody>,res:Response){

    try {
        
        const userId = (req as any).user?.userId;
        const stashId = (req as any).params.id;

        if(!userId){
            return res.status(401).json({msg:"Unauthorised, Please Login!"})
        }

        const stash = await stashModel.findById(stashId);

        if(!stash){
            return res.status(404).json({msg:"Stash not found!"});
        }

        if(stash?.userId.toString() !== userId){
            return res.status(403).json({msg:"not your Stash!"})
        }

        const validatedEdit = requiredStashEdit.safeParse(req.body);

        if(!validatedEdit.success){
            return res.status(400).json({msg:"invalid input!"})
        }

        const editedStashItem = await stashModel.findByIdAndUpdate(stashId,{
            ...validatedEdit.data
        })

        await editedStashItem?.save();

        return res.status(200).json({
            msg:"Stash Updated successfully",
            data:editedStashItem
        })

    } catch (error: any) {
        res.status(500).json({msg:"Internal server error!",error:error.message})
    }


}