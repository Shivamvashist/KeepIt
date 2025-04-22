import { Request,Response } from 'express';
import stashModel from '../../models/stash.db';

export async function getStashItems(req:Request,res:Response){

    const userStashItems = await stashModel.find({
        userId:(req as any).user.userId,
    }).populate('userId','username email');

//     const content = await Content.find().populate({
//         path: "userId",
//         select: "username password"
// })

    res.json({
        items:userStashItems
    })

}