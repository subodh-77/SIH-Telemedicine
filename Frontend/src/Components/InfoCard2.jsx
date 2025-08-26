import React from "react";

function InfoCard({ icon, title, description, features = [], buttonText, buttonColor }) {
  return (
    <div className="flex flex-col justify-between bg-white shadow-md rounded-2xl p-6 w-[320px] border border-gray-200 hover:shadow-lg transition">
      {/* Top Section */}
      <div>
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="bg-gradient-to-br from-blue-100 to-green-100 p-5 rounded-full">
            <span className="text-blue-600 text-4xl">{icon}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-800 text-center">
          {title}
        </h3>
        <p className="text-gray-500 text-sm mt-2 text-center">{description}</p>

        {/* Features */}
        <ul className="mt-4 space-y-2 text-sm text-gray-700 text-left">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Button */}
      {buttonText && (
        <button
          className={`mt-6 w-full py-2 rounded-lg text-white font-medium hover:opacity-90 transition ${buttonColor}`}
        >
          {buttonText}
        </button>
      )}
    </div>
  );
}

export default InfoCard;
