import { Router } from "express";

import { createStash } from "../controllers/stashRouter Controllers/stash.controller";
import { userAuth } from '../middlewares/auth.middleware';

export const stashRouter = Router();

stashRouter.post('/createStash',userAuth,createStash);
