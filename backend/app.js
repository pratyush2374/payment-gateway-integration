import express from "express";
import dotenv from "dotenv";
import router from "./routes/payment.route.js";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", router);
app.get("/api/v1/get-key", (req, res) => res.status(200).json({ key: process.env.RAZORPAY_KEY_ID }));

export default app;
