import { Router } from 'express';
import { userSignup } from '../controllers/userAuth Controllers/userSignup';
import { userLogin } from '../controllers/userAuth Controllers/userLogin';
import { userDetails } from '../controllers/userAuth Controllers/userDetails';
import { logOut } from '../controllers/userAuth Controllers/logOut';
import { userAuth } from '../middlewares/auth.middleware';

export const userAuthRouter = Router();

userAuthRouter.post('/signup',userSignup as any);
userAuthRouter.post('/login',userLogin as any);
userAuthRouter.get('/user/me',userAuth as any,userDetails as any);
userAuthRouter.post('/logout',userAuth as any,logOut as any);