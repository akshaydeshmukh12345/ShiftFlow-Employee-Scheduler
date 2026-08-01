const dashboardRoutes = require("./routes/dashboardRoutes");

const employeeRoutes = require("./routes/employeeRoutes");

const indexRoutes = require("./routes");

const authRoutes = require("./routes/authRoutes");

const db = require("./config/db");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", indexRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/employees", employeeRoutes);
app.use("/api/dashboard", dashboardRoutes);

app.get("/", (req, res) => {
  res.send("🚀 ShiftFlow Backend Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});