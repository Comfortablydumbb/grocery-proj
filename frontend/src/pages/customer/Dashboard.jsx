import React from "react";
import { ShoppingCart, Clock, Heart, CreditCard, Eye } from "lucide-react";

const stats = [
  {
    label: "Total Orders",
    value: 12,
    icon: ShoppingCart,
    color: "bg-indigo-100",
    textColor: "text-indigo-700",
  },
  {
    label: "Pending Orders",
    value: 2,
    icon: Clock,
    color: "bg-orange-100",
    textColor: "text-orange-700",
  },
  {
    label: "Wishlist Items",
    value: 5,
    icon: Heart,
    color: "bg-pink-100",
    textColor: "text-pink-700",
  },
  {
    label: "Cart Items",
    value: 3,
    icon: ShoppingCart,
    color: "bg-green-100",
    textColor: "text-green-700",
  },
  {
    label: "Total Spend",
    value: "₹15,420",
    icon: CreditCard,
    color: "bg-yellow-100",
    textColor: "text-yellow-700",
  },
  {
    label: "Recently Viewed",
    value: 10,
    icon: Eye,
    color: "bg-blue-100",
    textColor: "text-blue-700",
  },
];

const CustomerDashboardHome = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Your Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className={`p-6 rounded-xl shadow-md transition hover:shadow-lg hover:scale-[1.02] ${stat.color} ${stat.textColor} flex items-center gap-4`}
            >
              <div className="p-3 rounded-full bg-white shadow">
                <Icon className={`w-6 h-6 ${stat.textColor}`} />
              </div>
              <div>
                <p className="text-md font-medium">{stat.label}</p>
                <p className="text-3xl font-bold">{stat.value}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CustomerDashboardHome;
