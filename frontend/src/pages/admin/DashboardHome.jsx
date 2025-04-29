import React from "react";

const stats = [
  {
    label: "Total Users",
    value: 124,
    color: "bg-green-100",
    textColor: "text-green-700",
  },
  {
    label: "Total Products",
    value: 58,
    color: "bg-blue-100",
    textColor: "text-blue-700",
  },
  {
    label: "Total Categories",
    value: 8,
    color: "bg-yellow-100",
    textColor: "text-yellow-700",
  },
];

const DashboardHome = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Dashboard Overview</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow ${stat.color} ${stat.textColor} text-center`}
          >
            <p className="text-lg font-medium">{stat.label}</p>
            <p className="text-3xl font-bold mt-2">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardHome;
