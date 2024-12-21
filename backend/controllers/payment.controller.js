import { Payment } from "../models/payment.model.js";
import { instance } from "../server.js";
import crypto from "crypto";

// Checkout Handler
const checkout = async (req, res) => {
    try {
        const options = {
            amount: Number(req.body.product.amount) * 100, // Ensure amount is a direct field
            currency: "INR",
        };

        const order = await instance.orders.create(options);

        res.status(200).json({ success: true, order });
    } catch (error) {
        console.error("Checkout Error:", error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

// Payment Verification Handler
const paymentVerification = async (req, res) => {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
            req.body;

        if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
            return res.status(400).json({
                success: false,
                message: "Missing required fields",
            });
        }

        const body = `${razorpay_order_id}|${razorpay_payment_id}`;

        const expectedSignature = crypto
            .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
            .update(body.toString())
            .digest("hex");

        console.log("Signature received:", razorpay_signature);
        console.log("Signature generated:", expectedSignature);

        const signatureIsValid = expectedSignature === razorpay_signature;

        if (signatureIsValid) {
            await Payment.create({
                razorpay_order_id,
                razorpay_payment_id,
                razorpay_signature,
            })
            res.redirect(`http://localhost:5173/payment-success?reference=${razorpay_payment_id}`);
        }else {
            res.status(400).json({ success: false, signatureIsValid });
        }
    } catch (error) {
        console.error("Payment Verification Error:", error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

export { checkout, paymentVerification };
