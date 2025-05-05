import { Request,Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET_USER } from "../../config/jwt.config";

export function userDetails(req:Request,res:Response){
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ msg: "No token provided" });
    }
    
    try {
        const decoded = jwt.verify(token, JWT_SECRET_USER as jwt.Secret) as { username: string; userId: string };
        res.json({ username: decoded.username, userId: decoded.userId });
    } catch (error) {
        return res.status(401).json({ msg: "Invalid token" });
    }
}