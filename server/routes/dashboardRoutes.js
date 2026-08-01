const express = require("express");
const router = express.Router();

const { dashboardStats } = require("../controllers/dashboardController");

// GET Dashboard Statistics
router.get("/", dashboardStats);

module.exports = router;