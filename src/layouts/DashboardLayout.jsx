import React from "react";
import Dashboard from "../pages/dashboard/Dashboard";
import { Outlet } from "react-router";

const DashboardLayout = () => {
  return (
    <div>
      <Dashboard />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
