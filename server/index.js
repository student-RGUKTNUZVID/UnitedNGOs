import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import passport from "passport"
import session from 'express-session';
import './src/config/passport.js'; // or wherever your config is
import db from './src/models/database.js';
import userRoute from "./src/routes/auth.js";
//dotenv is a package that loads environment variables from a .env file into process.env
import routes from './src/routes/ngoroutes.js';
import hackathonRoutes from './src/routes/hackathonRoutes.js';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express()
//cross origin resource sharing
app.use(express.json());
app.use(cors(
    {
        origin:"*"
    }
));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(session({ secret: 'your-secret', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use('/auth', userRoute);
app.use('/',routes);
app.use('/api/auth',userRoute);

// Routes
app.use('/api/hackathons', hackathonRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

app.listen(process.env.PORT || 3000,()=>{
    console.log("server is running")
});