import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
dotenv.config();

import {userAuthRouter} from './routes/userAuth.routes';
import {stashRouter} from './routes/stash.routes';
import {publicRouter} from './routes/public.routes';

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use('/api/v1/userAuth',userAuthRouter);
app.use('/api/v1/stash',stashRouter);
app.use('/api/v1/public',publicRouter);

const PORT = process.env.PORT
const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASS
const dbHost = process.env.DB_HOST

async function main(){
    await mongoose.connect(`mongodb+srv://${dbUser}:${dbPass}@${dbHost}/KeepIt`);
    app.listen(PORT);
}
main();