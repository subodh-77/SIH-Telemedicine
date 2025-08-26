import React from "react";

function InfoCard({ icon, title, description, features = [], buttonText }) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 w-[260px] flex flex-col justify-between text-center border border-gray-100">
      {/* Icon */}
      <div>
        <div className="flex justify-center mb-4">
          <div className="bg-green-100 p-4 rounded-full">
            <span className="text-green-600 text-3xl">{icon}</span>
          </div>
        </div>

        {/* Title & Description */}
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-500 text-sm mt-2">{description}</p>

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
        <button className="mt-6 w-[180px] mx-auto py-2 rounded-lg bg-gradient-to-r from-blue-500 to-green-500 text-white font-medium hover:opacity-90 transition">
          {buttonText}
        </button>
      )}
    </div>
  );
}

export default InfoCard;
