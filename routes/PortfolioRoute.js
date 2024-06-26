import express from 'express'
import sendEmailController from "../controllers/PortfolioController.js";

//router object
const router = express.Router();

//routes
router.post("/sendEmail", sendEmailController);

// /export
export default router;
