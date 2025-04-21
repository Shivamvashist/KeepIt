//validate the user data with zod validation.
//create a stash element
//user.id link, 

import { Request, Response } from 'express';
import { requiredStash, stashBody } from '../../utils/stash.zodSchema';
import stashModel from '../../models/stash.db'

export async function createStash(req:Request<{},{},stashBody>,res:Response){

    try {

    const userId = (req as any).user?.userId;

    if(!userId){
        return res.status(401).json({
            msg:"invalid Session!"
        })
    }

    const validatedStash = requiredStash.safeParse(req.body);

    if(!validatedStash.success){
        return res.status(400).json({msg:'invalid Input',error:validatedStash.error})
    }

    const newStash = new stashModel({
        ...validatedStash.data,
        user: userId,
    });

    await newStash.save();

    return res.status(200).json({msg: 'Stash crearted Successfully', data: newStash})
        
    } catch (error) {
        return res.status(500).json({msg:'server side error',error:error})
    }

}