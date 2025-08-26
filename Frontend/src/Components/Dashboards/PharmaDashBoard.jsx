// src/components/PharmaDashboard.js
import React from "react";
import { Search, Bell, User, Eye } from "lucide-react";

const PharmaDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Top Navbar */}
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-lg font-semibold">
          <span className="bg-blue-600 text-white px-2 py-1 rounded">Rx</span>{" "}
          PharmaCare Dashboard
        </h1>
        <span className="text-gray-500">Welcome back, Dr. Smith</span>
        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search patients, medications..."
              className="border px-3 py-2 rounded-lg w-64"
            />
            <Search className="absolute top-2 right-3 text-gray-400 w-4 h-4" />
          </div>
          <Bell className="w-5 h-5 text-gray-600" />
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-gray-700" />
          </div>
        </div>
      </header>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <Card title="Today's Orders" value="24" sub="+12% from yesterday" />
        <Card
          title="Active Patients"
          value="1,429"
          sub="+5% this week"
          highlight
        />
        <Card
          title="Revenue Today"
          value="$3,247"
          sub="+8% from yesterday"
          highlight
        />
        <Card
          title="Low Stock Items"
          value="5"
          sub="2 critical"
          warning
        />
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Recent Prescriptions */}
        <div className="col-span-2 bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold mb-4">Recent Prescriptions</h2>
          <div className="space-y-3">
            {prescriptions.map((p) => (
              <div
                key={p.id}
                className="p-3 border rounded-lg flex justify-between items-start"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">{p.id}</span>
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-xs px-2 py-0.5 rounded-full ${tagColors[tag]}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="font-medium">{p.name}</p>
                  <p className="text-sm text-gray-600">{p.medication}</p>
                  <p className="text-xs text-gray-400">{p.time}</p>
                </div>
                <Eye className="text-gray-400 w-4 h-4" />
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions & Inventory */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="font-semibold mb-3">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              {actions.map((a, i) => (
                <button
                  key={i}
                  className={`p-3 rounded-lg border hover:shadow transition ${
                    a.primary ? "bg-blue-600 text-white" : ""
                  }`}
                >
                  {a.label}
                </button>
              ))}
            </div>
          </div>

          {/* Inventory Status */}
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="font-semibold mb-3">Inventory Status</h3>
            <div className="space-y-3">
              {inventory.map((item) => (
                <div key={item.name}>
                  <div className="flex justify-between text-sm">
                    <span>
                      {item.name}{" "}
                      <span className="text-gray-500">({item.category})</span>
                    </span>
                    <span className="text-gray-600">
                      {item.quantity} bottles
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 h-2 rounded">
                    <div
                      className="bg-blue-500 h-2 rounded"
                      style={{
                        width: `${(item.quantity / item.total) * 100}%`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* === Sub Components & Data === */
const Card = ({ title, value, sub, highlight, warning }) => (
  <div
    className={`p-4 rounded-lg shadow ${
      highlight ? "bg-green-50" : warning ? "bg-yellow-50" : "bg-white"
    }`}
  >
    <p className="text-sm text-gray-500">{title}</p>
    <p className="text-2xl font-bold">{value}</p>
    <p className="text-xs text-gray-400">{sub}</p>
  </div>
);

const prescriptions = [
  {
    id: "RX001",
    name: "Sarah Johnson",
    medication: "Amoxicillin 500mg × 30",
    tags: ["Urgent", "Pending"],
    time: "10 mins ago",
  },
  {
    id: "RX002",
    name: "Michael Chen",
    medication: "Metformin 850mg × 60",
    tags: ["Processing"],
    time: "25 mins ago",
  },
  {
    id: "RX003",
    name: "Emily Davis",
    medication: "Lisinopril 10mg × 90",
    tags: ["Ready"],
    time: "1 hour ago",
  },
  {
    id: "RX004",
    name: "David Wilson",
    medication: "Omeprazole 20mg × 30",
    tags: ["Completed"],
    time: "2 hours ago",
  },
];

const actions = [
  { label: "New Prescription", primary: true },
  { label: "Search Patient" },
  { label: "Add Inventory" },
  { label: "Generate Report" },
  { label: "Manage Orders" },
  { label: "Patient Database" },
];

const inventory = [
  { name: "Amoxicillin 500mg", quantity: 45, total: 50, category: "Antibiotics" },
  { name: "Metformin 850mg", quantity: 12, total: 25, category: "Diabetes" },
  { name: "Lisinopril 10mg", quantity: 8, total: 25, category: "Blood Pressure" },
  { name: "Omeprazole 20mg", quantity: 67, total: 40, category: "Gastric" },
];

const tagColors = {
  Urgent: "bg-red-100 text-red-600",
  Pending: "bg-yellow-100 text-yellow-600",
  Processing: "bg-blue-100 text-blue-600",
  Ready: "bg-green-100 text-green-600",
  Completed: "bg-gray-100 text-gray-600",
};

export default PharmaDashboard;

