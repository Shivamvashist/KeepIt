import { Request,Response } from 'express';
import stashModel from '../../models/stash.db';


export async function getStashItems(req:Request,res:Response){

    try {

        const userId = (req as any).user?.userId;

        if(!userId){
            return res.status(401).json({msg:"Unauthorized, PLease login!"});
        }

        const userStashItems = await stashModel.find({
            userId:userId,
        }).populate('userId','username email');
    
        return res.status(200).json({
            items:userStashItems
        })
    
    } catch (error: any) {
        return res.status(500).json({msg:"Internal Server error! ",error:error.message})
    }

}

//     const content = await Content.find().populate({
//         path: "userId",
//         select: "username password"
// })
