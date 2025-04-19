import { Request, Response } from "express";
import bcrypt from 'bcrypt';

import userModel from '@models/user.db';
import {requiredBody,SignupBody} from '@utils/signup.zodSchema'

// Use Request<Params = {}, ResBody = {}, ReqBody = SignupBody> to strictly type req.body using your Zod-inferred type,
// while keeping route params and response body untyped (empty objects).
//     Params = {} → No URL params like :id
//     ResBody = {} → Not typing res.json(...)
//     ReqBody = SignupBody → Ensures req.body matches the schema

export async function userSignup(req:Request<{},{},SignupBody>,res:Response){ 

    const validationResults = requiredBody.safeParse(req.body);

    if(!validationResults.success){
        res.status(400).json({
            'msg':"Incorrect Format!",
            error:validationResults.error
        })
        return
    }

    try {
        const {email,username,password} = validationResults.data; //not from req.body

        const hashedPass = await bcrypt.hash(password,6);

        const user = await userModel.create({
            email:email,
            username:username,
            password:hashedPass
        })

        return res.status(201).json("Signed Up!");
        
        // NO NEED as if it fails it'll automatically go to catch block!
        // if (user){
        //     res.json("Signed Up!")
        // } else {
        //     res.json("Failed to Signup!")
        // }

    } catch (error:any) {
        if (error.code === 11000) {
          // Duplicate key error - 11000
          return res.status(400).json("Email already exists!");
        }
      
        // Some other DB/server error
        return res.status(500).json("Something went wrong. Please try again.");
      } 

}