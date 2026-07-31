const express = require("express");
const router = express.Router();

const verifyToken = require("../middleware/authMiddleware");

router.get("/", (req, res) => {
  res.send("🚀 ShiftFlow API Running...");
});

router.get("/profile", verifyToken, (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to your profile",
    user: req.user,
  });
});

module.exports = router;