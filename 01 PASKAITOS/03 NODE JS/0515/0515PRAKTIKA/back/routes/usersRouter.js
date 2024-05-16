import express from "express";
import { postUser, getUsers } from "../controllers/user.js";

const router = express.Router();

router.get("/users", getUsers);

router.post("/users", postUser);

export default router;