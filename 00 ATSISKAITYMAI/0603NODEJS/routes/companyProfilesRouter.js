import express from "express"
import { getCompanyProfiles, addCompanyProfile, updateCompanyProfile } from "../controllers/companyProfilesControllers.js";


const router = express.Router()

router.get("/companyProfiles", getCompanyProfiles);

router.post("/companyProfiles", addCompanyProfile);

router.put("/companyProfiles/:id", updateCompanyProfile);

export default router;