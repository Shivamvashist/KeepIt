import express from 'express';
import {Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(express.json());


app.get('/',function(req:Request,res:Response){
    const a = req.query.n;
    res.send(a);
})

const PORT = process.env.PORT
app.listen(PORT);