//validate the user data with zod validation.
//create a stash element
//user.id link, 

import { Request, Response } from 'express';
import { requiredStash, stashBody } from '../../utils/stash.zodSchema';

export function createStash(req:Request<{},{},stashBody>,res:Response){

    const validatedStash = requiredStash.safeParse(req.body);

    
}