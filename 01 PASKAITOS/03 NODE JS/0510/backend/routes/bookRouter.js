import express from "express";
import { addBook, deleteBookById, getBooks } from "../controllers/bookControllers.js";

const router = express.Router();

router.get("/", getBooks);

router.post("/", addBook);

router.delete("/:id", deleteBookById);

export default router;