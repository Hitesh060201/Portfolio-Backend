const express = require("express");
import { sendEmailController } from "../controllers/PortfolioController";

//router object
const router = express.Router();

//routes
router.post("/sendEmail", sendEmailController);

// /export
module.exports = router;
