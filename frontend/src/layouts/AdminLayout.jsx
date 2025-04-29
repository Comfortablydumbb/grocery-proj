import React from "react";
import { Link, Outlet } from "react-router-dom";
import AdminSidebar from "../component/AdminSidebar";

const SidebarItem = ({ to, icon: Icon, label }) => (
  <Link
    to={to}
    className="flex items-center gap-3 p-3 hover:bg-blue-100 rounded transition"
  >
    <Icon className="w-5 h-5" />
    <span>{label}</span>
  </Link>
);

const AdminDashboard = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminDashboard;
