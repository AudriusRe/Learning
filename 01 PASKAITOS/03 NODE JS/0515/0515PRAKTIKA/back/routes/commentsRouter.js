import express from "express";
import { postComment, getComments, deleteCommentById } from "../controllers/comment.js";

const router = express.Router();

router.post("/comments", postComment);

router.get("/comments", getComments);

router.delete("/comments/:id", deleteCommentById);

export default router;