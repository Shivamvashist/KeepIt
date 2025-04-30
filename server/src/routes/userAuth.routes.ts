import { Router } from 'express';
import {userSignup} from '../controllers/userAuth Controllers/userSignup';
import {userLogin} from '../controllers/userAuth Controllers/userLogin';
import {userDetails} from '../controllers/userAuth Controllers/userDetails';

export const userAuthRouter = Router();

userAuthRouter.post('/signup',userSignup);
userAuthRouter.post('/login',userLogin);
userAuthRouter.get('/user/me',userDetails);