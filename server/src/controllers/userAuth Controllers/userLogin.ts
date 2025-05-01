import { Request,Response } from "express";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { JWT_SECRET_USER } from '../../config/jwt.config';
import userModel from '../../models/user.db';
import { requiredData,SigninBody } from "../../utils/signin.zodSchema";


export async function userLogin( req:Request<{},{},SigninBody>, res:Response ){

    const validationResults = requiredData.safeParse(req.body);

    if(!validationResults.success){
        res.status(400).json({
            msg:"Invalid input!",
            error:validationResults.error.errors[0].message
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
        if(verifyPass){
            const token = jwt.sign({username:findUser.username,userId:findUser._id},JWT_SECRET_USER);
            return res.status(200)
            .cookie("token",token,{httpOnly: true,maxAge:3600000000})
            .json({msg:"Successfully Signed in!"});
        }

    } catch (error) {
        res.status(500).json({
            msg:"Server error",
            error:error
        })
    }
}