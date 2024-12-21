import {
    checkout,
    paymentVerification,
} from "../controllers/payment.controller.js";
import express from "express";

const router = express.Router();

router.route("/checkout").post(checkout);
router.route("/payment-verification").post(paymentVerification);

export default router;
