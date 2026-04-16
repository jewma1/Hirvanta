const express = require('express');
const cors = require('cors');
const Razorpay = require('razorpay');
const crypto = require('crypto');
require('dotenv').config();

const app = express();

// --- THE "SECURITY GUARD" (CORS FIX) ---
// This tells the backend: "It is okay to talk to my Vercel website"
app.use(cors({
    origin: "*", // This opens the door so your buttons will work!
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

app.use(express.json());

// RAZORPAY SETUP
const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// TEST ROUTE
app.get('/', (req, res) => {
    res.send('Hirvanta Backend is LIVE and CORS is Fixed!');
});

// LOGIN ROUTE
app.post('/api/login', (req, res) => {
    res.json({ success: true, message: "Connected to Backend!" });
});

// RAZORPAY ORDER ROUTE
app.post('/api/orders', async (req, res) => {
    try {
        const options = {
            amount: req.body.amount * 100, 
            currency: "INR",
            receipt: "rcpt_" + Math.random().toString(36).substring(7),
        };
        const order = await razorpay.orders.create(options);
        res.json(order);
    } catch (error) {
        res.status(500).send(error);
    }
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
