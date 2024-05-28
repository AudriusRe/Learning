import express from "express"
import { addItem, deleteItemById, getItems } from "./controllers.js";


const router = express.Router()

router.get("/items", getItems);

router.post("/items", addItem);

router.delete("/items/:id", deleteItemById);

router.all("*", (req, res) => {
    res.status(404).json({ error: "Route not found. Things are fucked up. *sadface*"}) //bendrinis routas pranesantis, kad useris kazka ne taip daro. ji dedame gale
})

export default router;