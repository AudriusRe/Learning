import express from "express";
import { postUser, getUsers, getUsersWithMemberships, addMembershipToUser } from "../controllers/user.js";

const router = express.Router();

router.get("/users/:order", getUsers);

router.get("/users/:order", getUsersWithMemberships);

router.post("/users", postUser);

router.put("/users/:userId/membership/:membershipId", addMembershipToUser)

export default router;