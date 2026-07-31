const {
  createEmployee,
  getAllEmployees,
} = require("../models/employeeModel");

const addEmployee = (req, res) => {
  const { name, email, phone, role, department } = req.body;

  if (!name || !email || !phone || !role || !department) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  createEmployee(name, email, phone, role, department, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }

    return res.status(201).json({
      success: true,
      message: "Employee added successfully",
    });
  });
};

const fetchEmployees = (req, res) => {
  getAllEmployees((err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }

    return res.status(200).json({
      success: true,
      count: result.length,
      employees: result,
    });
  });
};

module.exports = {
  addEmployee,
  fetchEmployees,
};