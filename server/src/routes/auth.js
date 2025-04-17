import express from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/user.js';
import volunteer from '../models/volunteer.js';
import generateToken from '../utils/generateToken.js';
import passport from 'passport';
import authMiddleWare from '../middlewares/authMiddleware.js';

const router = express.Router();

// Signup
router.post('/signup', async (req, res) => {
  const { email, password, userName ,role} = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) return res.status(400).json({ msg: 'User already exists' });

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({
    email,
    password: hashedPassword,
   userName,
   role
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
//get logged in user
// GET /api/users/me
router.get("/logged-user", authMiddleWare, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
})
// GET /user/profile
router.get('/profile', authMiddleWare, async (req, res) => {
  try {
    const userId = req.user.id; // correctly retrieved from middleware

    const user = await User.findById(userId).select('-password');
    const Volunteer=await volunteer.findOne({user:userId}).populate('ngos').populate('projects');

    if (!user) return res.status(404).json({ msg: 'User not found' });
    if(!Volunteer)return res.status(404).json({msg:'volunteer data not found'});


    res.status(200).json({ user, volunteer: Volunteer });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
});

router.get('/google', 
(req,res,next)=>{
  req.session.role = req.query.role || 'volunteer';
  next();
},
passport.authenticate('google', { scope: ['profile', 'email'] }));

// Step 2: Callback route
router.get('/google/callback',
  passport.authenticate('google', { session: false, failureRedirect: '/' }),
  (req, res) => {
    const token = generateToken(req.user._id); // generate JWT
    res.redirect(`http://localhost:5173/auth/success?token=${token}`);
  }
);

export default router;
