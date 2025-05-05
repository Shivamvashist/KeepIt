import { Router } from "express";

import { userAuth } from '../middlewares/auth.middleware';
import { createStash } from "../controllers/stashRouter Controllers/stash.controller";
import { getStashItems } from '../controllers/stashRouter Controllers/getStash.controller'
import { editStashItem } from '../controllers/stashRouter Controllers/editStashItem.controller'
import { delStashItem } from "../controllers/stashRouter Controllers/delStashItem.controller";

export const stashRouter = Router();

stashRouter.post('/createStash',userAuth as any,createStash as any);
stashRouter.get('/stashItems',userAuth as any,getStashItems as any);
stashRouter.patch(('/editStashItem/:id'),userAuth as any,editStashItem as any);
stashRouter.delete(('/deleteStashItem/:id'),userAuth as any,delStashItem as any);
