import React from "react";
import {
  Calendar,
  CalendarCheck,
  ClipboardList,
  FileText,
  Clock,
  Video,
  FolderOpen,
  CalendarCog,
  MessageSquare,
  UserCog,
  Home,
  Stethoscope,
  FilePlus,
  Bell,
  Search,
} from "lucide-react";

// Sidebar
const Sidebar = () => {
  return (
    <div className="w-64 bg-white shadow h-screen fixed top-0 left-0 flex flex-col z-20">
      {/* Logo */}
      <div className="flex items-center gap-2 px-6 py-5 border-b">
        <div className="w-10 h-10 bg-blue-500 text-white flex items-center justify-center rounded-lg font-bold">
          M
        </div>
        <div>
          <h1 className="font-bold text-gray-800">MediCare</h1>
          <p className="text-xs text-gray-500">Physician Portal</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 mt-4">
        <ul className="space-y-2 px-4">
          <li className="flex items-center gap-3 text-gray-700 p-2 rounded-lg hover:bg-blue-50 cursor-pointer">
            <Home size={18} /> Dashboard
          </li>
          <li className="flex items-center gap-3 text-gray-700 p-2 rounded-lg hover:bg-blue-50 cursor-pointer">
            <Calendar size={18} /> My Appointments
          </li>
          <li className="flex items-center gap-3 text-gray-700 p-2 rounded-lg hover:bg-blue-50 cursor-pointer">
            <Stethoscope size={18} /> Start Consultation
          </li>
          <li className="flex items-center gap-3 text-gray-700 p-2 rounded-lg hover:bg-blue-50 cursor-pointer">
            <FolderOpen size={18} /> Patient Records
          </li>
          <li className="flex items-center gap-3 text-gray-700 p-2 rounded-lg hover:bg-blue-50 cursor-pointer">
            <FilePlus size={18} /> Add Prescription
          </li>
          <li className="flex items-center gap-3 text-gray-700 p-2 rounded-lg hover:bg-blue-50 cursor-pointer">
            <MessageSquare size={18} /> Messages
          </li>
          <li className="flex items-center gap-3 text-gray-700 p-2 rounded-lg hover:bg-blue-50 cursor-pointer">
            <UserCog size={18} /> Profile & Settings
          </li>
        </ul>
      </nav>
    </div>
  );
};

// Top Navbar
const TopNavbar = () => {
  return (
    <div className="fixed top-0 left-64 right-0 h-16 bg-white shadow flex items-center justify-between px-6 z-10">
      {/* Search */}
      <div className="flex items-center bg-gray-100 px-3 py-2 rounded-lg w-96">
        <Search size={18} className="text-gray-500" />
        <input
          type="text"
          placeholder="Search patients, appointments..."
          className="ml-2 bg-transparent outline-none text-sm w-full"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        {/* Notification */}
        <button className="relative">
          <Bell size={20} className="text-gray-600" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
        </button>

        {/* Profile */}
        <div className="flex items-center gap-2">
          <div>
            <p className="font-medium text-gray-800">Dr. Sarah Wilson</p>
            <p className="text-xs text-gray-500">Cardiologist</p>
          </div>
          <div className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center rounded-full font-semibold">
            SW
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Dashboard
const DoctorDashboard = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Content */}
      <div className="ml-64 flex-1">
        {/* Top Navbar */}
        <TopNavbar />

        {/* Main Dashboard Content */}
        <div className="p-6 mt-16 bg-gray-100 min-h-screen">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-6 rounded-2xl shadow flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div>
              <h1 className="text-2xl font-bold">Hello, Dr. Sarah Wilson</h1>
              <p className="mt-1 text-sm">Tuesday, August 26, 2025</p>
              <p className="text-sm opacity-90">
                Ready to help your patients today?
              </p>
            </div>
            <button className="mt-4 sm:mt-0 bg-white text-blue-600 font-semibold px-4 py-2 rounded-lg shadow hover:bg-gray-100 transition">
              Start Consultation
            </button>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            <div className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition">
              <div className="flex items-center gap-3">
                <CalendarCheck className="text-blue-500" size={28} />
                <h2 className="text-lg font-semibold">Today's Appointments</h2>
              </div>
              <p className="text-3xl font-bold mt-3 text-gray-800">12</p>
              <p className="text-gray-500">3 completed, 9 remaining</p>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition">
              <div className="flex items-center gap-3">
                <ClipboardList className="text-green-500" size={28} />
                <h2 className="text-lg font-semibold">
                  Completed Consultations
                </h2>
              </div>
              <p className="text-3xl font-bold mt-3 text-gray-800">248</p>
              <p className="text-green-600 font-medium">+12% from last month</p>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition">
              <div className="flex items-center gap-3">
                <FileText className="text-orange-500" size={28} />
                <h2 className="text-lg font-semibold">Pending Prescriptions</h2>
              </div>
              <p className="text-3xl font-bold mt-3 text-gray-800">5</p>
              <p className="text-gray-500">Awaiting your review</p>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition">
              <div className="flex items-center gap-3">
                <Clock className="text-purple-500" size={28} />
                <h2 className="text-lg font-semibold">Avg. Consultation Time</h2>
              </div>
              <p className="text-3xl font-bold mt-3 text-gray-800">18m</p>
              <p className="text-gray-500">2m faster than average</p>
            </div>
          </div>

          {/* Today's Schedule + Quick Actions */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
            {/* Schedule */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold text-gray-800">
                Today's Schedule
              </h2>
              <div className="bg-white p-5 rounded-2xl shadow mt-3">
                <div className="flex justify-between items-center border-b py-3">
                  <p className="font-medium text-gray-700">
                    09:00 - John Smith (Follow-up)
                  </p>
                  <span className="text-sm text-green-600">Completed</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <p className="font-medium text-gray-700">
                    09:30 - Maria Garcia (Initial Consultation)
                  </p>
                  <span className="text-sm text-green-600">Completed</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div>
              <h2 className="text-xl font-bold text-gray-800">Quick Actions</h2>
              <div className="flex flex-col gap-4 mt-4">
                <button className="flex items-center gap-2 justify-center bg-blue-500 text-white py-3 rounded-xl hover:bg-blue-600 transition shadow">
                  <Video size={18} /> Join Next Consultation
                </button>
                <button className="flex items-center gap-2 justify-center bg-green-500 text-white py-3 rounded-xl hover:bg-green-600 transition shadow">
                  <FolderOpen size={18} /> View Patient Records
                </button>
                <button className="flex items-center gap-2 justify-center bg-purple-500 text-white py-3 rounded-xl hover:bg-purple-600 transition shadow">
                  <CalendarCog size={18} /> Manage Schedule
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;

