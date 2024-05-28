import express from "express"
import { addCar, deleteCarById, getCarById, getCars } from "./controllers.js";


const router = express.Router()

router.get("/cars", getCars);

router.get("/cars/:id", getCarById);

router.post("/cars", addCar);

router.delete("/cars/:id", deleteCarById);

router.all("*", (req, res) => {
    res.status(404).json({ error: "Route not found. Things are fucked up. *sadface*"}) //bendrinis routas pranesantis, kad useris kazka ne taip daro. ji dedame gale
})

export default router;