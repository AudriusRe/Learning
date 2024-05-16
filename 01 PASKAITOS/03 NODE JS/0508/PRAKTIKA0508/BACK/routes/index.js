import express from "express";
import petsRouter from "./petsRouter.js";

const router = express.Router();

router.use("/pets", petsRouter);

export default router;