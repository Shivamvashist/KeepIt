import express, { Router, Request, Response } from 'express';
import {userSignup} from '../controllers/userSignup';
import {userLogin} from '../controllers/userLogin';

export const userAuthRouter = Router();

userAuthRouter.post('/signup',userSignup);
userAuthRouter.post('/login',userLogin);