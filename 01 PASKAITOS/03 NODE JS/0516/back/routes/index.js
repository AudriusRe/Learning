import express from "express";
import usersRouter from "./usersRouter.js";
import membershipsRouter from "./membershipsRouter.js";

const router = express.Router();

router.use(usersRouter);
router.use(membershipsRouter);

export default router;