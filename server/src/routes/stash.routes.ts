import { Router } from "express";

export const stashRouter = Router();

stashRouter.post('/stash',createStash)
