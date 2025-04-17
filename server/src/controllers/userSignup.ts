import { Express, Request, Response } from "express";
import {z} from 'zod';
import userModel from '../models/user.db';

export async function userSignup(req:Request,res:Response){
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;

    const user = await userModel.create({
        email:email,
        username:username,
        password:password
    })

    if (user){
        res.json("Signed Up!")
    } else {
        res.json("Failed to Signup!")
    }

}