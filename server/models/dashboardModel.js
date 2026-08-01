const db = require("../config/db");

const getDashboardStats = (callback) => {
  const sql = `
    SELECT
      (SELECT COUNT(*) FROM employees) AS totalEmployees
  `;

  db.query(sql, callback);
};

module.exports = {
  getDashboardStats,
};