import { Request, Response } from'express';
import stashModel from '../../models/stash.db';

export async function delStashItem(req:Request,res:Response){

    try {

        const userId = (req as any).user?.userId;

        if(!userId){
            return res.status(401).json({msg:"unauthorized, Please login!"})
        }

        const stashItemId = (req as any).params.id;

        const stashItem = await stashModel.findById(stashItemId);

        if(!stashItem){
            return res.status(404).json({msg:"Stash Item not found!"});
        }

        if(stashItem.userId.toString() !== userId){
            return res.status(403).json({msg:"This item does not belong to this user!"})
        }

        const delResult = await stashModel.deleteOne({_id:stashItemId, userId});

        if(delResult.deletedCount===0){
            return res.status(404).json({msg:"Stash not found! item deletion failed!"})
        }

        return res.status(200).json({msg:"Item deleted successfully!"})

    } catch (error: any) {
        return res.status(500).json({msg:"Internal Server error!",error:error.message})
    }   
}