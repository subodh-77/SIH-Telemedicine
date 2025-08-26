import React from "react";
import logo from "../assets/Logo2.png"; // update path if needed
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#0d1b2a] text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo + About */}
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="Healthy India Logo" className="w-30 h-12" />
            <div>
              <h2 className="text-xl font-semibold text-white">Healthy India</h2>
              <p className="text-sm text-gray-400">Care Made Easy</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-400 leading-relaxed">
            Connecting communities with quality healthcare through technology.
            Making medical care accessible, affordable, and available 24/7.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-teal-400">Home</a></li>
            <li><a href="#" className="hover:text-teal-400">Services</a></li>
            <li><a href="#" className="hover:text-teal-400">Find Doctors</a></li>
            <li><a href="#" className="hover:text-teal-400">Medicine Finder</a></li>
            <li><a href="#" className="hover:text-teal-400">Emergency</a></li>
          </ul>
        </div>

        {/* For Providers */}
        <div>
          <h3 className="text-white font-semibold mb-4">For Providers</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-teal-400">Doctor Registration</a></li>
            <li><a href="#" className="hover:text-teal-400">Pharmacy Partnership</a></li>
            <li><a href="#" className="hover:text-teal-400">Hospital Network</a></li>
            <li><a href="#" className="hover:text-teal-400">Training Resources</a></li>
            <li><a href="#" className="hover:text-teal-400">Support Center</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2"><Phone size={16}/> +91-XXX-XXX-XXXX</li>
            <li className="flex items-center gap-2"><Mail size={16}/> support@healthyindia.in</li>
            <li className="flex items-center gap-2"><MapPin size={16}/> New Delhi, India</li>
          </ul>
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-teal-400"><Facebook size={18}/></a>
            <a href="#" className="hover:text-teal-400"><Twitter size={18}/></a>
            <a href="#" className="hover:text-teal-400"><Instagram size={18}/></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 px-6">
        <p>© 2024 Healthy India. All rights reserved.</p>
        <div className="flex gap-6 mt-3 md:mt-0">
          <a href="#" className="hover:text-teal-400">Privacy Policy</a>
          <a href="#" className="hover:text-teal-400">Terms of Service</a>
          <a href="#" className="hover:text-teal-400">Help Center</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
