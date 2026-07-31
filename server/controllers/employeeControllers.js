const {
  createEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
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

const fetchEmployeeById = (req, res) => {
  const { id } = req.params;

  getEmployeeById(id, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }

    if (result.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Employee not found",
      });
    }

    return res.status(200).json({
      success: true,
      employee: result[0],
    });
  });
};

const editEmployee = (req, res) => {
  const { id } = req.params;
  const { name, email, phone, role, department } = req.body;

  if (!name || !email || !phone || !role || !department) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  updateEmployee(
    id,
    name,
    email,
    phone,
    role,
    department,
    (err, result) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: err.message,
        });
      }

      if (result.affectedRows === 0) {
        return res.status(404).json({
          success: false,
          message: "Employee not found",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Employee updated successfully",
      });
    }
  );
};

const removeEmployee = (req, res) => {
  const { id } = req.params;

  deleteEmployee(id, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: "Employee not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Employee deleted successfully",
    });
  });
};

module.exports = {
  addEmployee,
  fetchEmployees,
  fetchEmployeeById,
  editEmployee,
  removeEmployee,
};