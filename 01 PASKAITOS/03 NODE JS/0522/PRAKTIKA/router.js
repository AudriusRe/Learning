import express from "express"
import { addShirt, getShirts } from "./controllers.js";


const router = express.Router()

router.get("/", (req, res) => {
    res.status(200).json({ message: "All good"})});

router.get("/shirts/:size", getShirts);

router.post("/shirts", addShirt);

router.all("*", (req, res) => {
    res.status(404).json({ error: "Route not found. No such page"}) //bendrinis routas pranesantis, kad useris kazka ne taip daro. ji dedame gale
})

export default router;