import jwt from "jsonwebtoken";

const authMiddleWare = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  console.log("Received Token:", token);

  if (!token) {
    return res.status(401).send({
      message: "Token missing. Unauthorized",
      success: false,
    });
  }

  try {
    // Verify the token using the secret key
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
      console.log("token decodeD:",decodedToken);
    // Attach user info to req.user (NOT req.body)
    req.user = {
      id: decodedToken.id,
    };

    next();
  } catch (err) {
    console.error("Token verification error:", err.message);
    return res.status(401).send({
      message: "Invalid token",
      success: false,
    });
  }
};

export default authMiddleWare;
