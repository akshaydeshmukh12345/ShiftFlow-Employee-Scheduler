const express = require("express");
const router = express.Router();

const verifyToken = require("../middleware/authMiddleware");

const {
  addEmployee,
  fetchEmployees,
  fetchEmployeeById,
  editEmployee,
  removeEmployee,
} = require("../controllers/employeeControllers");

// Add Employee
router.post("/", verifyToken, addEmployee);

// Get All Employees
router.get("/", verifyToken, fetchEmployees);

router.get("/:id", verifyToken, fetchEmployeeById);

router.put("/:id", verifyToken, editEmployee);

router.delete("/:id", verifyToken, removeEmployee);

module.exports = router;