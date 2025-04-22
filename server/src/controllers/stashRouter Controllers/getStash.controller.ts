import { Request,Response } from 'express';
import stashModel from '../../models/stash.db';

export async function getStashItems(req:Request,res:Response){

    try {

        const userId = (req as any).user?.userId;

        if(!userId){
            res.status(401).json({msg:"Unauthorized, PLease login!"});
        }

        const userStashItems = await stashModel.find({
            userId:userId,
        }).populate('userId','username email');
    
        res.status(200).json({
            items:userStashItems
        })
    
    } catch (error: any) {
        res.status(500).json({msg:"Internal Server error! ",error:error.message})
    }

}

//     const content = await Content.find().populate({
//         path: "userId",
//         select: "username password"
// })
