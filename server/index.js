require("dotenv").config();
const express = require('express')
const app = express()
//cross origin resource sharing
const cors = require('cors')
app.use(express.json());
app.use(cors(
    {
        origin:"*"
    }
));
//dotenv is a package that loads environment variables from a .env file into process.env
const routes=require('./src/routes/ngoroutes.js')
app.use('/',routes);
require('dotenv').config()
app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);
app.get('/auth/google/callback',
  passport.authenticate('google', { session: false }),
  (req, res) => {
    const token = generateToken(req.user);
    // You can return token or redirect to frontend with it
    res.redirect(`http://localhost:5173/google-success?token=${token}`);
  }
);
app.listen(3000,()=>{
    console.log("server is running")
});