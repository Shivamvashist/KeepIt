import express from 'express';
import mongoose from 'mongoose';
import {Request, Response } from 'express';

import dotenv from 'dotenv';
dotenv.config();

import {userAuthRouter} from './routes/userAuth.routes';

const app = express();

app.use(express.json());

app.use('/api/v1/userAuth',userAuthRouter);

const PORT = process.env.PORT
const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASS
const dbHost = process.env.DB_HOST

async function main(){
    await mongoose.connect(`mongodb+srv://${dbUser}:${dbPass}@${dbHost}/KeepIt`);
    app.listen(PORT);
}
main();