const db = require("../config/db");

const createEmployee = (
  name,
  email,
  phone,
  role,
  department,
  callback
) => {
  const sql = `
    INSERT INTO employees
    (name, email, phone, role, department)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [name, email, phone, role, department],
    callback
  );
};

const getAllEmployees = (callback) => {
  const sql = `
    SELECT
      id,
      name,
      email,
      phone,
      role,
      department,
      created_at
    FROM employees
    ORDER BY id DESC
  `;

  db.query(sql, callback);
};

const getEmployeeById = (id, callback) => {
  const sql = `
    SELECT
      id,
      name,
      email,
      phone,
      role,
      department,
      created_at
    FROM employees
    WHERE id = ?
  `;

  db.query(sql, [id], callback);
};

const updateEmployee = (
  id,
  name,
  email,
  phone,
  role,
  department,
  callback
) => {
  const sql = `
    UPDATE employees
    SET
      name = ?,
      email = ?,
      phone = ?,
      role = ?,
      department = ?
    WHERE id = ?
  `;

  db.query(
    sql,
    [name, email, phone, role, department, id],
    callback
  );
};

module.exports = {
  createEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployee,
};