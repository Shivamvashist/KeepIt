import { Request,Response } from "express";
import bcrypt from 'bcrypt';
import userModel from '../models/user.db';
import { requiredData,SigninBody } from "../utils/signin.zodSchema";


export async function userLogin( req:Request<{},{},SigninBody>, res:Response ){

    const validationResults = requiredData.safeParse(req.body);

    if(!validationResults.success){
        res.status(400).json({
            msg:"Invalid input!",
            error:validationResults.error.errors
        })
        return
    }

    try {
        const {username,password} = validationResults.data;
        
        const findUser = await userModel.findOne({
            username
        });

        if(!findUser){
            return res.status(404).json("Cannot find Username!");
        }

        const verifyPass = await bcrypt.compare(password,findUser.password);

        if(!verifyPass){
            return res.status(401).json("Incorrect Password!")
        }

        res.status(200).json({msg:"Successfully Signed in!"})

    } catch (error) {
        res.status(500).json({
            msg:"Server error",
            error:error
        })
    }

}