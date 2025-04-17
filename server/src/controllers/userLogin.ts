import express,{ Request,Response } from "express";
import userModel from '../models/user.db';

export async function userLogin( req:Request, res:Response ){
    const username = req.body.username;
    const password = req.body.password;

    try {
        const findUser = await userModel.findOne({
            username
        });

        if (findUser){
            if(password === findUser.password){
                res.json("Successfully Signed In!")
            } else {
                res.json("Incorrect Password")
            }
        } else {
            res.json("Cannot find user!")
        }

    } catch (error) {
        res.json("some server side error occurred! - "+error)
    }

}