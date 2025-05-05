import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from "express";
import { JWT_SECRET_USER } from '../config/jwt.config';


interface JwtPayload {
    userId: string;
    username: string;
}

export function userAuth(req:Request,res:Response,next:NextFunction){
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({msg:"No token provided"});
    }

    try {
        // Use verify instead of decode for security
        const decodedToken = jwt.verify(token, JWT_SECRET_USER as jwt.Secret) as JwtPayload;

        if(decodedToken && decodedToken.userId) {
            
            (req as any).user = {  //req.user temp workaround , else add the user type in any .d.ts and include that type file in tsconfig.json
                userId:decodedToken.userId
            }

            return next();
            // return res.status(200).json({
            //     msg:"Valid Token found, Authorization successful!"
            // })
        } else {
            return res.status(401).json({msg:"Invalid token payload"});
        }
    } catch(e){
        return res.status(401).json({msg:"Invalid token"});
    }

}
