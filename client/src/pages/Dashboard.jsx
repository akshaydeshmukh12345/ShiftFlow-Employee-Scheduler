import DashboardLayout from "../components/layout/DashboardLayout";
import StatCard from "../components/common/StatCard";

function Dashboard() {
  return (
    <DashboardLayout>
      <h1>Dashboard</h1>

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
    </DashboardLayout>
  );
}

export default Dashboard;