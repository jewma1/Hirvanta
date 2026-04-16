const express = require('express');
const cors = require('cors');
const Razorpay = require('razorpay');
const crypto = require('crypto');
require('dotenv').config();

const app = express();

// 1. OPEN THE SECURITY GATE (CORS)
app.use(cors({
    origin: "*", // This allows your Vercel site to talk to this server
    methods: ["GET", "POST"],
    credentials: true
}));

app.use(express.json());

// 2. SETUP RAZORPAY TOOLS
const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// 3. HOME ROUTE (To check if it's running)
app.get('/', (req, res) => {
    res.send('Hirvanta Backend is Alive and Ready!');
});

// 4. SIGN IN ROUTE (Fixes your "Sign In" button)
app.post('/api/login', (req, res) => {
    // For now, this just says "Welcome!" to any user
    res.json({ success: true, message: "Logged in successfully", user: { name: "Jewma" } });
});

// 5. RAZORPAY ORDER ROUTE (Fixes your "Pricing" buttons)
app.post('/api/orders', async (req, res) => {
    try {
        const options = {
            amount: req.body.amount * 100, // amount in the smallest currency unit (paise)
            currency: "INR",
            receipt: "receipt_" + Math.random().toString(36).substring(7),
        };

        const order = await razorpay.orders.create(options);
        res.json(order);
    } catch (error) {
        console.error("Razorpay Error:", error);
        res.status(500).send(error);
    }
});

// 6. PAYMENT VERIFICATION ROUTE
app.post('/api/verify', (req, res) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
    const sign = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSign = crypto
        .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
        .update(sign.toString())
        .digest("hex");

    if (razorpay_signature === expectedSign) {
        return res.json({ success: true, message: "Payment verified successfully" });
    } else {
        return res.status(400).json({ success: false, message: "Invalid signature" });
    }
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
