import { useEffect, useState } from "react";
import DashboardLayout from "../components/layout/DashboardLayout";
import EmployeeTable from "../components/employee/EmployeeTable";
import api from "../services/api";

function Employees() {
  // ==========================
  // State
  // ==========================
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  // ==========================
  // Fetch Employees
  // ==========================
  const fetchEmployees = async () => {
    try {
      const response = await api.get("/employees");

      console.log(response.data);

      setEmployees(response.data.employees);
    } catch (error) {
      console.error("Employee Error:", error);
    } finally {
      setLoading(false);
    }
  };

  // ==========================
  // Run Once
  // ==========================
  useEffect(() => {
    fetchEmployees();
  }, []);

  // ==========================
  // Loading
  // ==========================
  if (loading) {
    return (
      <DashboardLayout>
        <h2>Loading Employees...</h2>
      </DashboardLayout>
    );
  }

  // ==========================
  // UI
  // ==========================
  return (
    <DashboardLayout>
      <h1 className="page-title">Employees</h1>

      <p className="page-subtitle">
        Manage all employees from one place.
      </p>

      <EmployeeTable employees={employees} />
    </DashboardLayout>
  );
}

export default Employees;