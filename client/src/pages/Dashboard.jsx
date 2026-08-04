import { useEffect, useState } from "react";
import DashboardLayout from "../components/layout/DashboardLayout";
import StatCard from "../components/common/StatCard";
import api from "../services/api";

function Dashboard() {
  // ==========================
  // State
  // ==========================
  const [dashboard, setDashboard] = useState({
    totalEmployees: 0,
  });

  const [loading, setLoading] = useState(true);

  // ==========================
  // Fetch Dashboard Data
  // ==========================
  const fetchDashboardData = async () => {
    try {
      const response = await api.get("/dashboard");

      console.log("Dashboard API:", response.data);

      setDashboard(response.data.data);
    } catch (error) {
      console.error("Dashboard Error:", error);
    } finally {
      setLoading(false);
    }
  };

  // ==========================
  // Run Once
  // ==========================
  useEffect(() => {
    fetchDashboardData();
  }, []);

  // ==========================
  // Loading UI
  // ==========================
  if (loading) {
    return (
      <DashboardLayout>
        <h2>Loading Dashboard...</h2>
      </DashboardLayout>
    );
  }

  // ==========================
  // UI
  // ==========================
  return (
    <DashboardLayout>
      <div className="dashboard-content">
        <div>
          <h1 className="page-title">Dashboard</h1>

          <p className="page-subtitle">
            Welcome to ShiftFlow Employee Management System
          </p>
        </div>

        <div className="stats-container">
          <StatCard
            title="Employees"
            value={dashboard.totalEmployees}
            icon="👨‍💼"
          />

          <StatCard
            title="Today's Shifts"
            value="18"
            icon="📅"
          />

          <StatCard
            title="Departments"
            value="5"
            icon="🏢"
          />

          <StatCard
            title="Pending Leaves"
            value="3"
            icon="📝"
          />
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;