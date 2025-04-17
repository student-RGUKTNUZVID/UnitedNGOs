import successStoryRoutes from "./routes/successStoryRoutes.js";

// Routes
app.use("/api/ngos", ngoRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/success-stories", successStoryRoutes); 