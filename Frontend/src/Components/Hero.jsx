import React from "react";
import doctor from "../assets/Hero.png"; // your image
import "../App.css";

function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-green-50 py-16 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            Quality Healthcare <br />
            <span className="text-blue-600">For Rural Communities</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Connecting patients in Nabha and surrounding villages with qualified
            doctors through secure telemedicine, digital health records, and
            real-time medicine availability.
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="px-6 py-3 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-600 transition">
              Start Consultation
            </button>
            <button className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 transition">
              Book Appointment
            </button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6">
            <div className="flex flex-col items-center text-center">
              <span className="text-blue-500 text-3xl">📹</span>
              <p className="text-sm font-medium mt-1">Video Consultations</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-green-500 text-3xl">📄</span>
              <p className="text-sm font-medium mt-1">Digital Records</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-blue-400 text-3xl">💊</span>
              <p className="text-sm font-medium mt-1">Medicine Finder</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-green-400 text-3xl">📅</span>
              <p className="text-sm font-medium mt-1">Appointments</p>
            </div>
          </div>
        </div>

        {/* Right Side Image + Stats */}
        <div className="relative flex justify-center">
          <img
            src={doctor}
            alt="Telemedicine consultation"
            className="rounded-2xl shadow-lg w-[500px] h-auto object-cover"
          />

          {/* Doctor Stat */}
          <div className="absolute top-4 right-4 bg-white shadow-md px-4 py-2 rounded-lg">
            <p className="text-green-500 font-bold text-lg">50+</p>
            <p className="text-xs text-gray-500">Expert Doctors</p>
          </div>

          {/* Patients Stat */}
          <div className="absolute bottom-4 left-4 bg-white shadow-md px-4 py-2 rounded-lg">
            <p className="text-blue-600 font-bold text-lg">500+</p>
            <p className="text-xs text-gray-500">Patients Served</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
