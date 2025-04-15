import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import passport from "passport"
import session from 'express-session';
import './src/config/passport.js';
import db from './src/models/database.js';
import userRoute from "./src/routes/auth.js";
import routes from './src/routes/ngoroutes.js';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import Razorpay from "razorpay";
import bodyParser from 'body-parser';
import HackathonModel from './src/models/Hackathon.js'; // ✅ import your Hackathon model

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// ✅ Middleware
app.use(express.json());
app.use(cors({ origin: "*" }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(bodyParser.json());
app.use(session({ secret: 'your-secret', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// ✅ Routes
app.use('/auth', userRoute);
app.use('/', routes);
app.use('/api/auth', userRoute);

// ✅ New Route: /getAllHackathons
app.get('/getAllHackathons', async (req, res) => {
  try {
    const hackathons = await HackathonModel.find();
    res.status(200).json({ hackathons });
  } catch (err) {
    console.error('Error fetching hackathons:', err);
    res.status(500).json({ message: 'Failed to fetch hackathons' });
  }
});

// ✅ Razorpay Routes
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

app.post("/api/payment/orders", async (req, res) => {
  try {
    const options = {
      amount: req.body.amount,
      currency: "INR",
      receipt: `receipt_order_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/api/payment/verify", (req, res) => {
  console.log("Payment Verified: ", req.body);
  res.send({ status: "success" });
});

// ✅ Error Handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// ✅ Start Server
app.listen(process.env.PORT || 3000, () => {
  console.log(`server is running on port ${process.env.PORT || 3000}`);
});
