import { Router } from 'express';
import {userSignup} from '../controllers/userAuth Controllers/userSignup';
import {userLogin} from '../controllers/userAuth Controllers/userLogin';
import {userDetails} from '../controllers/userAuth Controllers/userDetails';
import { userAuth } from '../middlewares/auth.middleware';

export const userAuthRouter = Router();

userAuthRouter.post('/signup',userSignup);
userAuthRouter.post('/login',userLogin);
userAuthRouter.get('/user/me',userAuth,userDetails);