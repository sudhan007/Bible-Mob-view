require("dotenv").config();

const admin = require("firebase-admin");

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: process.env.FIREBASE_DB,
});

exports.authenticateToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    // Verify the token with Firebase
    const decodedToken = await admin.auth().verifyIdToken(token);
    req.uid = decodedToken.uid; // Add the user ID to the request object

    next();
  } catch (error) {
    return res.status(403).json({ message: "Invalid token" });
  }
};
