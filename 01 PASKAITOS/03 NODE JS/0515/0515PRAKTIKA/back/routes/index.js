import express from "express";
import usersRouter from "./usersRouter.js";
import commentsRouter from "./commentsRouter.js";

const router = express.Router();

router.use(usersRouter);
router.use(commentsRouter);

export default router;