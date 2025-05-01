import { Request, Response } from "express";

export function logOut(req:Request, res:Response){
    res.clearCookie("token",{
        httpOnly:true
    })

    res.status(200).json({ msg: 'Logged out successfully' });
}
