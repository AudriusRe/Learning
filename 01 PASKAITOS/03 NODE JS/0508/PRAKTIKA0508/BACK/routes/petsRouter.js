import express from "express"
import { addNewPet, getPets } from "../controllers/petControllers.js";

const router = express.Router();

router.get("/", getPets);

router.post("/", addNewPet);

export default router;