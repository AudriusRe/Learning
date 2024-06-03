import express from "express";
import companyProfilesRouter from "./companyProfilesRouter.js";
import companiesRouter from "./companiesRouter.js"

const router = express.Router();

router.use(companyProfilesRouter);
router.use(companiesRouter);


// router.all("*", (req, res) => {
//     res.status(404).json({ error: "Route not found. Try something else"})
// })

export default router;