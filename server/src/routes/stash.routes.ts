import { Router } from "express";

import { createStash } from "../controllers/stashRouter Controllers/stash.controller";
import { getStashItems } from '../controllers/stashRouter Controllers/getStash.controller'
import { editStashItem } from '../controllers/stashRouter Controllers/editStashItem.controller'
import { userAuth } from '../middlewares/auth.middleware';

export const stashRouter = Router();

stashRouter.post('/createStash',userAuth,createStash);
stashRouter.get('/stashItems',userAuth,getStashItems);
stashRouter.patch(('/editStashItem/:id'),userAuth,editStashItem);
