const { getDashboardStats } = require("../models/dashboardModel");

const dashboardStats = (req, res) => {
  getDashboardStats((err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }

    return res.status(200).json({
      success: true,
      data: result[0],
    });
  });
};

module.exports = {
  dashboardStats,
};