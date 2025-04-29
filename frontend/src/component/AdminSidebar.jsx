import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Dashboard", to: "/admin/dashboard" },
  { name: "Categories", to: "/admin/categories" },
  { name: "Products", to: "/admin/products" },
  { name: "Users", to: "/admin/users" },
  { name: "Logout", to: "/logout" },
];

const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const linkClass = ({ isActive }) =>
    `block px-4 py-2 rounded-lg text-sm font-medium ${
      isActive ? "bg-green-200 text-black" : "text-gray-700 hover:bg-gray-100"
    }`;

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="md:hidden p-4 flex justify-between items-center bg-white shadow">
        <h2 className="font-bold text-lg">FreshBazar Admin</h2>
        <button onClick={toggleSidebar}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed md:static top-0 left-0 z-50 h-full w-64 bg-white shadow-md transform md:translate-x-0 transition-transform duration-200 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="p-4 border-b text-xl font-bold">FreshBazar</div>
        <nav className="flex flex-col gap-1 p-4">
          {navLinks.map((link) => (
            <NavLink key={link.name} to={link.to} className={linkClass}>
              {link.name}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Overlay on mobile when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

export default AdminSidebar;
