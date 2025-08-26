import { FaUser, FaStethoscope, FaHospital } from "react-icons/fa";
import InfoCard from "./InfoCard2";

function RolesSection() {
  return (
    <div className="flex flex-col items-center text-center my-12">
      <h2 className="text-2xl font-bold text-gray-900">
        Join Our Healthcare Network
      </h2>
      <p className="text-gray-600 mt-2 max-w-4xl">
        Choose your role and become part of Nabha's comprehensive healthcare
        ecosystem. Together, we’re making quality healthcare accessible to rural
        communities.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
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
        />

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
        />

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
        />
      </div>
    </div>
  );
}

export default RolesSection;
