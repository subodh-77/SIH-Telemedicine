// InfoCard2.jsx
import React from "react";

function InfoCard2({ icon, title, description, features, buttonText, buttonColor, onClick }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="text-gray-500 mb-4 text-sm list-disc list-inside">
        {features.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
      <button
        onClick={onClick} // Make sure this calls the onClick passed from RolesSection
        className={`${buttonColor} text-white px-4 py-2 rounded-md hover:opacity-90 transition`}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default InfoCard2;
