import { Router } from "express";

import { userAuth } from '../middlewares/auth.middleware';
import { createStash } from "../controllers/stashRouter Controllers/stash.controller";
import { getStashItems } from '../controllers/stashRouter Controllers/getStash.controller'
import { editStashItem } from '../controllers/stashRouter Controllers/editStashItem.controller'
import { delStashItem } from "../controllers/stashRouter Controllers/delStashItem.controller";

export const stashRouter = Router();

stashRouter.post('/createStash',userAuth,createStash);
stashRouter.get('/stashItems',userAuth,getStashItems);
stashRouter.patch(('/editStashItem/:id'),userAuth,editStashItem);
stashRouter.delete(('/deleteStashItem/:id'),userAuth,delStashItem);
