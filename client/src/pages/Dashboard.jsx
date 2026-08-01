import DashboardLayout from "../components/layout/DashboardLayout";
import StatCard from "../components/common/StatCard";

function Dashboard() {
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
            value="25"
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