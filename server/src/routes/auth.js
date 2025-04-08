import express from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/user.js';
import generateToken from '../utils/generateToken.js';
import passport from 'passport';

const router = express.Router();

// Signup
router.post('/signup', async (req, res) => {
  const { email, password, userName } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) return res.status(400).json({ msg: 'User already exists' });

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({
    email,
    password: hashedPassword,
   userName
  });

  // const token = generateToken(newUser);
  // res.json({ user: newUser, token });
  res.status(200).json({
    message:"user registered successfully",
    success:true,
    newUser
  })
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user || !user.password) return res.status(400).json({ msg: 'Invalid credentials' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });
  const token = generateToken(user);
  res.status(201).json({ user, token });

});
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Step 2: Callback route
router.get('/google/callback',
  passport.authenticate('google', { session: false, failureRedirect: '/' }),
  (req, res) => {
    const token = generateToken(req.user._id); // generate JWT
    res.redirect(`http://localhost:5173/auth/success?token=${token}`);
  }
);

export default router;
