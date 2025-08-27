import { useState } from 'react';
import { FaUser, FaStethoscope, FaHospital } from "react-icons/fa";
import InfoCard from "./InfoCard2";

function RolesSection() {
  const [selectedRole, setSelectedRole] = useState(null);

  const handleRegisterClick = (role) => {
    setSelectedRole(role);
  };

  const handleClose = () => setSelectedRole(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Registered as ${selectedRole}!`);
    handleClose();
  };

  return (
    <div className="flex flex-col items-center text-center my-12">
      <h2 className="text-2xl font-bold text-gray-900">
        Join Our Healthcare Network
      </h2>
      <p className="text-gray-600 mt-2 max-w-4xl">
        Choose your role and become part of Nabha's comprehensive healthcare ecosystem. Together, we’re making quality healthcare accessible to rural communities.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Patient */}
        <InfoCard
          icon={<FaUser />}
          title="Patient"
          description="Book appointments, consult with doctors, access your health records, and find medicines."
          features={[
            "Video consultations with doctors",
            "Digital health record management",
            "Medicine availability checker",
            "AI-powered symptom assessment",
          ]}
          buttonText="Register as Patient →"
          buttonColor="bg-blue-600"
          onClick={() => handleRegisterClick("Patient")}
        />

        {/* Doctor */}
        <InfoCard
          icon={<FaStethoscope />}
          title="Doctor"
          description="Provide remote consultations, manage patient records, and set your availability schedule."
          features={[
            "Conduct video consultations",
            "Access patient medical history",
            "Issue digital prescriptions",
            "Manage appointment calendar",
          ]}
          buttonText="Register as Doctor →"
          buttonColor="bg-green-600"
          onClick={() => handleRegisterClick("Doctor")}
        />

        {/* Pharmacy */}
        <InfoCard
          icon={<FaHospital />}
          title="Pharmacy"
          description="Update medicine stock, manage inventory, and connect with patients in your area."
          features={[
            "Update medicine availability",
            "Manage inventory in real-time",
            "Connect with local patients",
            "Sync with central database",
          ]}
          buttonText="Register as Pharmacy →"
          buttonColor="bg-teal-600"
          onClick={() => handleRegisterClick("Pharmacy")}
        />
      </div>

      {/* Registration Forms */}
      {selectedRole === "Patient" && (
        <div className="fixed inset-0 bg-[#ada8a8b1] bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-[400px] relative">
            <h2 className="text-xl font-semibold mb-4 text-center">Patient Registration</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" placeholder="Full Name" required className="w-full p-2 border rounded-md" />
              <input type="email" placeholder="Email" required className="w-full p-2 border rounded-md" />
              <input type="date" placeholder="Date of Birth" required className="w-full p-2 border rounded-md" />
              <input type="text" placeholder="Address" required className="w-full p-2 border rounded-md" />
              <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded-md hover:opacity-90 transition">
                Register
              </button>
            </form>
            <button onClick={handleClose} className="absolute top-3 right-3 text-gray-600 hover:text-black">✕</button>
          </div>
        </div>
      )}

      {selectedRole === "Doctor" && (
        <div className="fixed inset-0 bg-[#ada8a8b1] bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-[400px] relative">
            <h2 className="text-xl font-semibold mb-4 text-center">Doctor Registration</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" placeholder="Full Name" required className="w-full p-2 border rounded-md" />
              <input type="email" placeholder="Email" required className="w-full p-2 border rounded-md" />
              <input type="text" placeholder="Medical License Number" required className="w-full p-2 border rounded-md" />
              <input type="text" placeholder="Specialization" required className="w-full p-2 border rounded-md" />
              <input type="text" placeholder="Clinic/Hospital Name" required className="w-full p-2 border rounded-md" />
              <button type="submit" className="w-full py-2 bg-green-600 text-white rounded-md hover:opacity-90 transition">
                Register
              </button>
            </form>
            <button onClick={handleClose} className="absolute top-3 right-3 text-gray-600 hover:text-black">✕</button>
          </div>
        </div>
      )}

      {selectedRole === "Pharmacy" && (
        <div className="fixed inset-0 bg-[#ada8a8b1] bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-[400px] relative">
            <h2 className="text-xl font-semibold mb-4 text-center">Pharmacy Registration</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" placeholder="Pharmacy Name" required className="w-full p-2 border rounded-md" />
              <input type="email" placeholder="Email" required className="w-full p-2 border rounded-md" />
              <input type="text" placeholder="License Number" required className="w-full p-2 border rounded-md" />
              <input type="text" placeholder="Address" required className="w-full p-2 border rounded-md" />
              <input type="text" placeholder="Contact Number" required className="w-full p-2 border rounded-md" />
              <button type="submit" className="w-full py-2 bg-teal-600 text-white rounded-md hover:opacity-90 transition">
                Register
              </button>
            </form>
            <button onClick={handleClose} className="absolute top-3 right-3 text-gray-600 hover:text-black">✕</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default RolesSection;
