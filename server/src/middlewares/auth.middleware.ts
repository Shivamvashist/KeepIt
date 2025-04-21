import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from "express";
import { JWT_SECRET_USER } from '../config/jwt.config';

export function userAuth(req:Request,res:Response,next:NextFunction){
    const token = req.cookies.token;
    const decodedToken = jwt.decode(token,JWT_SECRET_USER);

    if(decodedToken && decodedToken.userId) {
        
        (req as any).user = {  //req.user temp workaround , else add the user type in any .d.ts and include that type file in tsconfig.json
            id:decodedToken.userId
        }

        return next();
        // return res.status(200).json({
        //     msg:"Valid Token found, Authorization successful!"
        // })
    } else {
        return res.status(401).json({msg:"Invalid or no Token!"});
    }

}
