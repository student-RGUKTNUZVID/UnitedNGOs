import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express()
//cross origin resource sharing
import cors from 'cors';
app.use(express.json());
app.use(cors(
    {
        origin:"*"
    }
));
import passport from "passport"
import session from 'express-session';
import './src/config/passport.js'; // or wherever your config is
import db from './src/models/database.js';
import userRoute from "./src/routes/auth.js";
//dotenv is a package that loads environment variables from a .env file into process.env
import routes from './src/routes/ngoroutes.js';
app.use(session({ secret: 'your-secret', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', userRoute);
app.use('/',routes);
app.use('/api/auth',userRoute);
app.listen(3000,()=>{
    console.log("server is running")
});