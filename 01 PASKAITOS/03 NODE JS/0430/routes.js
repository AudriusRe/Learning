import express from "express"
import { addUser, deleteUserById, getUserById, getUsers } from "./controllers.js";

const router = express.Router()

router.get("/user", getUsers)
// router.get("/user/:id/book/:bookId", getUserById)
router.get("/user/:id", getUserById)

router.post("/user", addUser)

router.delete("/user/:id", deleteUserById)

export default router;