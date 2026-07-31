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

module.exports = {
  createEmployee,
  getAllEmployees,
};