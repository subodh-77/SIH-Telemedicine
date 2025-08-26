// src/Dashboard.js
import React from "react";
import { FaStethoscope, FaCalendarAlt, FaFileMedical, FaPills, FaRobot, FaUserCog, FaAmbulance, FaHeartbeat } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-1/4 bg-white shadow-lg rounded-r-2xl p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Navigation</h2>
        <ul className="space-y-4">
          <li className="flex items-center gap-3 text-gray-700 hover:text-blue-600 cursor-pointer">
            <FaStethoscope /> Start Consultation
          </li>
          <li className="flex items-center gap-3 text-gray-700 hover:text-blue-600 cursor-pointer">
            <FaCalendarAlt /> Book Appointment
          </li>
          <li className="flex items-center gap-3 text-gray-700 hover:text-blue-600 cursor-pointer">
            <FaFileMedical /> Health Records
          </li>
          <li className="flex items-center gap-3 text-gray-700 hover:text-blue-600 cursor-pointer">
            <FaPills /> Medicine Availability
          </li>
          <li className="flex items-center gap-3 text-gray-700 hover:text-blue-600 cursor-pointer">
            <FaRobot /> AI Symptom Checker
          </li>
          <li className="flex items-center gap-3 text-gray-700 hover:text-blue-600 cursor-pointer">
            <FaUserCog /> Profile & Settings
          </li>
        </ul>

        <div className="mt-8 border-t pt-4">
          <h4 className="font-semibold text-gray-600">Need Help?</h4>
          <a href="#" className="text-blue-500 hover:underline">
            Contact Support
          </a>
        </div>
      </aside>

      {/* Main Dashboard Content */}
      <main className="flex-1 p-6">
        {/* Welcome Section */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Welcome, Nirmal 👋</h1>
          <p className="text-sm text-gray-500">Health ID: RH-2024-001234</p>
        </div>

        <h3 className="text-lg font-bold text-gray-700 mb-4">Dashboard Overview</h3>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Next Appointment */}
          <div className="bg-white shadow-md rounded-xl p-5">
            <h4 className="font-semibold text-gray-700 mb-2">Next Appointment</h4>
            <p className="text-gray-600">Dr. Priya Sharma</p>
            <p className="text-gray-500">General Medicine</p>
            <p className="text-gray-500">Tomorrow, 2:30 PM</p>
            <button className="mt-3 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
              Join Video Call
            </button>
          </div>

          {/* Recent Consultation */}
          <div className="bg-white shadow-md rounded-xl p-5">
            <h4 className="font-semibold text-gray-700 mb-2">Recent Consultation</h4>
            <p className="text-gray-600">Dr. Rajesh Kumar</p>
            <p className="text-gray-500">3 days ago</p>
            <span className="text-green-600 font-medium">Follow-up Required</span>
            <button className="mt-3 bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg">
              View Report
            </button>
          </div>

          {/* Medicine Availability */}
          <div className="bg-white shadow-md rounded-xl p-5">
            <h4 className="font-semibold text-gray-700 mb-2">Medicine Availability</h4>
            <p className="text-gray-600">Nearest Pharmacy: Kumar Medical Store</p>
            <p>Status: <span className="text-green-600 font-medium">Open</span></p>
            <p className="text-gray-500">1.2 km away</p>
            <button className="mt-3 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
              Check Medicines
            </button>
          </div>

          {/* Health Overview */}
          <div className="bg-white shadow-md rounded-xl p-5">
            <h4 className="font-semibold text-gray-700 mb-2">Health Overview</h4>
            <p className="text-gray-600">Blood Pressure: 120/80</p>
            <p className="text-gray-600">Heart Rate: 72 bpm</p>
            <button className="mt-3 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
              Update Vitals
            </button>
          </div>

          {/* Emergency Services */}
          <div className="bg-white shadow-md rounded-xl p-5">
            <h4 className="font-semibold text-gray-700 mb-2">Emergency Services</h4>
            <p className="text-gray-600">24/7 Available</p>
            <p className="text-gray-600 flex items-center gap-2"><FaAmbulance className="text-red-500" /> 108 - Ambulance</p>
            <p className="text-gray-600">102 - Health Helpline</p>
            <button className="mt-3 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg">
              Emergency Call
            </button>
          </div>

          {/* Connection Status */}
          <div className="bg-white shadow-md rounded-xl p-5">
            <h4 className="font-semibold text-gray-700 mb-2">Connection Status</h4>
            <p>Status: <span className="text-green-600 font-medium">Online</span></p>
            <p className="text-gray-500">All features available</p>
            <p className="text-gray-500">Last sync: 2 minutes ago</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
