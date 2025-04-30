import { Request,Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET_USER } from "../../config/jwt.config";

export function userDetails(req:Request,res:Response){
    const token = req.cookies.token
    const decoded = jwt.verify(token,JWT_SECRET_USER)
    res.json({ username: decoded.username, userId: decoded.userId })
}