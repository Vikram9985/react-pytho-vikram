import React from "react";
import Sidebar from "../components/Sidebar";
import MapView from "../components/MapView";
import ActiveOperations from "./ActiveOperations";
import EarningsChart from "../components/EarningsChart";
import { Car, DollarSign, Calendar, Users, UserPlus, X, CheckCircle, Plus, AlertTriangle } from "lucide-react";
const stats = [
  { title: "Active Rides", value: "84", change: "+12%", color: "text-green-500", icon: Car },
  { title: "Total Earnings", value: "$12,450", change: "+12%", color: "text-green-500", icon: DollarSign },
  { title: "Bookings", value: "92", change: "-10%", color: "text-red-500", icon: Calendar },
  { title: "Online Drivers", value: "42", change: "-12%", color: "text-red-500", icon: Users },
  { title: "New Signups", value: "18", change: "+12%", color: "text-green-500", icon: UserPlus },
  { title: "Canceled", value: "20", change: "+6%", color: "text-green-500", icon: X },
];
const activities = [
  { text: "Ride #R-1022 Completed", time: "2m ago", icon: CheckCircle, color: "text-green-500" },
  { text: "New Ride Request", time: "5m ago", icon: Plus, color: "text-blue-500" },
  { text: "Driver Offline Alert", time: "12m ago", icon: AlertTriangle, color: "text-yellow-500" },
  { text: "New User Registration", time: "15m ago", icon: UserPlus, color: "text-purple-500" },
];

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1">
        {/* Navbar */}
        <div className="bg-white shadow px-6 py-4 flex justify-between items-center">
          <input
            type="text"
            placeholder="Search here..."
            className="border rounded-lg px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <div className="flex items-center gap-4">
            <span className="font-medium text-gray-700">Anjli Singh</span>
            <img
              src="https://i.pravatar.cc/40"
              alt="profile"
              className="rounded-full"
            />
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
        <h2 className="text-2xl font-bold mb-1">Dashboard</h2>
        <p className="text-gray-500 mb-6">
          Real-time insights and key performance metrics
        </p>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 mb-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl shadow"
            >
              <item.icon className="w-6 h-6 text-gray-500 mb-2" />
              <p className="text-sm text-gray-500">{item.title}</p>
              <h3 className="text-xl font-bold">{item.value}</h3>
              <p className={`text-sm ${item.color}`}>{item.change}</p>
            </div>
          ))}
        </div>

        {/* Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Map Section */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow p-4">
            <h3 className="font-semibold mb-2">Live Map View</h3>
           <div className="lg:col-span-2 bg-white rounded-xl shadow p-4">
  <h3 className="font-semibold mb-2">Live Map View</h3>
  <MapView />
</div>

          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow p-4">
            <h3 className="font-semibold mb-4">Recent Activity</h3>
            <ul className="space-y-4 text-sm">
              {activities.map((activity, index) => (
                <li key={index} className="flex items-center gap-2">
                  <activity.icon className={`w-4 h-4 ${activity.color}`} />
                  <span>{activity.text}</span>
                  <span className="text-gray-400 ml-auto">{activity.time}</span>
                </li>
              ))}
            </ul>

            <button className="mt-4 text-indigo-600 text-sm font-medium">
              View all →
            </button>
          </div>

        </div>
      </div>
      <EarningsChart/>
      <ActiveOperations />

    </div>
    </div>
  );
}

export default Dashboard;
