import express from "express"
import { getCompanies, getCompanyById, addCompany, updateCompany } from "../controllers/companiesControllers.js";


const router = express.Router()

router.get("/companies", getCompanies);

router.get("/companies/:id", getCompanyById);

router.post("/companies", addCompany);

router.put("/companies/:id", updateCompany);

export default router;