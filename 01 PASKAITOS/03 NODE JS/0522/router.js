import express from "express"
import { addPhone, deletePhoneById, getPhoneById, getPhones, updatePhoneById } from "./controllers.js";


const router = express.Router()

router.get("/phones", getPhones);

router.get("/phones/:id", getPhoneById);

router.post("/phones", addPhone);

router.put("/phones/:id", updatePhoneById);

router.delete("/phones/:id", deletePhoneById);

router.all("*", (req, res) => {
    res.status(404).json({ error: "Route not found"}) //bendrinis routas pranesantis, kad useris kazka ne taip daro. ji dedame gale
})

export default router;