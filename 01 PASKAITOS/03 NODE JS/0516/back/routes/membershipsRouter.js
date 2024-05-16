import express from "express";
import { postMembership, getMemberships, deleteMembershipById } from "../controllers/membership.js";

const router = express.Router();

router.post("/memberships", postMembership);

router.get("/memberships", getMemberships);

router.delete("/memberships/:id", deleteMembershipById);

export default router;