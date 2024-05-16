//phoneRouter = petRouter

import express from "express";
import petRouter from "./petRouter.js";

const router = express.Router();

router.use("/pet", petRouter);

export default router;