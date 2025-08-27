import React from 'react';

// StatCard Component
const StatCard = ({ title, value, color }) => (
  <div className={`bg-white border-l-4 ${color} rounded shadow p-4 hover:shadow-lg transition`}>
    <h2 className="text-2xl font-bold">{value}</h2>
    <p className="text-gray-600">{title}</p>
  </div>
);

// InfoTile Component
const InfoTile = ({ title, value }) => (
  <div className="border rounded p-4 text-center bg-gray-50 hover:bg-gray-100 transition">
    <p className="font-bold text-lg">{value}</p>
    <p className="text-gray-500">{title}</p>
  </div>
);

// AppointmentCard Component
const AppointmentCard = ({ appointment }) => (
  <div className="border-b py-2 flex justify-between items-center hover:bg-gray-50 transition">
    <div>
      <p className="font-semibold">{appointment.doctor}</p>
      <p className="text-gray-500">{appointment.time}</p>
    </div>
    <button className="text-white bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded transition">Join Call</button>
  </div>
);

// ConsultationCard Component
const ConsultationCard = ({ consultation }) => (
  <div className="border-b py-2 hover:bg-gray-50 transition p-2 rounded">
    <p className="font-semibold">{consultation.doctor}</p>
    <p className="text-gray-500 whitespace-pre-line">{consultation.details}</p>
    <div className="mt-2 flex gap-2">
      <button className="text-white bg-green-500 hover:bg-green-600 px-3 py-1 rounded transition">View</button>
      <button className="text-white bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded transition">Prescription</button>
    </div>
  </div>
);

// Header Component
const Header = () => (
  <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-6 rounded-lg mb-6 shadow-lg">
    <h1 className="text-3xl font-bold mb-2">Welcome Nirmal pandey</h1>
    <p className="text-gray-200 mb-1">Welcome to your health dashboard</p>
    <p className="text-gray-200 mb-2">Contact: +91 98765 43210</p>
    <span className="bg-green-500 px-3 py-1 rounded-full font-semibold shadow">Health Card Active</span>
  </div>
);

// DashboardStats Component
const DashboardStats = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
    <StatCard title="Upcoming Appointments" value={2} color="border-blue-500" />
    <StatCard title="Recent Consultations" value={5} color="border-green-500" />
    <StatCard title="Medicine Orders" value={1} color="border-yellow-500" />
    <StatCard title="Health Records" value={12} color="border-purple-500" />
  </div>
);

// HealthCardDetails Component
const HealthCardDetails = () => (
  <div className="bg-white border rounded shadow p-6 mb-6 hover:shadow-lg transition">
    <h2 className="text-2xl font-bold mb-2">Health Card Details</h2>
    <p className="text-gray-600 mb-3">Your health insurance and coverage information</p>
    <div className="mt-2">
      <p className="font-semibold">Ayushman Bharat PMJAY</p>
      <p className="text-gray-700">PMJAY-PB-2024-****7891 <span className="text-green-500 font-semibold">Active</span></p>
      <p className="text-gray-500">COVERAGE: ₹5,00,000 per family per year</p>
    </div>
    <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
      <InfoTile title="Network Hospitals" value={12} />
      <InfoTile title="Co-payment" value="₹20000" />
      <InfoTile title="Coverage Area" value="Pan India" />
    </div>
    <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded shadow hover:bg-blue-600 transition">Find Hospitals</button>
  </div>
);

// ConsultationHistory Component
const ConsultationHistory = ({ consultations }) => (
  <div className="bg-white border rounded shadow p-6 mb-6 hover:shadow-lg transition">
    <h2 className="text-2xl font-bold mb-2">Consultation History</h2>
    <p className="text-gray-600 mb-4">Your recent medical consultations and records</p>
    {consultations.map((consultation, index) => (
      <ConsultationCard key={index} consultation={consultation} />
    ))}
  </div>
);

// UpcomingAppointments Component
const UpcomingAppointments = ({ appointments }) => (
  <div className="bg-white border rounded shadow p-6 mb-6 hover:shadow-lg transition">
    <h2 className="text-2xl font-bold mb-2">Upcoming Appointments</h2>
    <p className="text-gray-600 mb-4">Your scheduled consultations</p>
    {appointments.map((appointment, index) => (
      <AppointmentCard key={index} appointment={appointment} />
    ))}
  </div>
);

// HealthInsights Component
const HealthInsights = () => (
  <div className="bg-white border rounded shadow p-6 hover:shadow-lg transition">
    <h2 className="text-2xl font-bold mb-2">Health Insights</h2>
    <p className="text-gray-600 mb-2">Medicine Adherence</p>
    <div className="bg-gray-200 rounded h-4">
      <div className="bg-green-500 h-4 rounded" style={{ width: '85%' }}></div>
    </div>
    <p className="mt-2 text-gray-500">Tip: Schedule medicine reminders to improve adherence by 20%</p>
  </div>
);

// Main Dashboard Component
const UserDashboard = () => {
  const appointments = [
    { doctor: 'Dr. Meera Patel', time: 'Tomorrow, 2:00 PM' },
    { doctor: 'Dr. Harpreet Singh', time: 'Dec 28, 10:30 AM' },
  ];

  const consultations = [
    { doctor: 'Dr. Priya Sharma', details: 'General Medicine\n2024-12-20, 2:30 PM, Video Consultation' },
    { doctor: 'Dr. Rajesh Gupta', details: 'Cardiology\n2024-12-20, 10:00 AM, Audio Consultation' },
    { doctor: 'Dr. Sunita Kaur', details: 'Dermatology\n2024-12-05, 4:15 PM, Video Consultation' },
    { doctor: 'Dr. Amit Singh', details: 'Orthopedics\n2024-12-05, 11:30 AM, Video Consultation' },
  ];

  return (
    <div className="container mx-auto p-4 space-y-6">
      <Header />
      <DashboardStats />
      <HealthCardDetails />
      <ConsultationHistory consultations={consultations} />
      <UpcomingAppointments appointments={appointments} />
      <HealthInsights />
    </div>
  );
};

export default UserDashboard;

