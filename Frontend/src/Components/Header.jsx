import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "../App.css";
import logo from "../assets/logo2.png";

function Header() {
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showOtp, setShowOtp] = useState(false);

  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [otp, setOtp] = useState("");
  const [enteredOtp, setEnteredOtp] = useState("");
  const [currentUser, setCurrentUser] = useState(null);

  const navigate = useNavigate(); 


  const handleSignup = async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const userData = Object.fromEntries(formData.entries());

  try {
    const response = await fetch("http://localhost:8000/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData)
    });

    const data = await response.json();

    if (response.ok) {
      alert("Registration Successful ✅");
      setShowSignup(false);
      e.target.reset();
    } else {
      alert(`❌ Error: ${data.error}`);
    }
  } catch (err) {
    console.error(err);
    alert("❌ Something went wrong. Try again.");
  }
};


 
  const handleLogin = async (e) => {
  e.preventDefault();
  const email = e.target.email.value;

  try {
    const res = await fetch("http://localhost:8000/user");
    const users = await res.json();

    const user = users.find((u) => u.email === email);

    if (user) {
      const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
      setOtp(generatedOtp);
      setCurrentUser(user);
      setShowLogin(false);
      setShowOtp(true);

      console.log("Generated OTP:", generatedOtp);
      alert(`✅ OTP sent to ${email} (Demo: ${generatedOtp})`);
    } else {
      alert("❌ Email not registered! Please sign up first.");
    }
  } catch (err) {
    console.error(err);
    alert("❌ Unable to fetch users. Try again.");
  }
};



  const handleOtpVerify = (e) => {
    e.preventDefault();

    if (enteredOtp === otp) {
      alert(`🎉 Login successful! Welcome ${currentUser.firstName}`);
      setShowOtp(false);
      setEnteredOtp("");
      setOtp("");

     
      navigate("/dashboard");
    } else {
      alert("❌ Invalid OTP. Please try again.");
    }
  };

  return (
    <>
      {/* Navbar */}
      <div className="shadow fixed top-0 w-full bg-white z-50">
        <nav className="center py-3 flex items-center justify-between px-6">
          <div>
            <img src={logo} alt="logo" className="w-auto h-12" />
          </div>

          <div className="flex gap-6 font-[400]">
            <a href="#" className="hover:text-[#0f80a5]">Services</a>
            <a href="#" className="hover:text-[#0f80a5]">About</a>
            <a href="#" className="hover:text-[#0f80a5]">Contact</a>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setShowLogin(true)}
              className="px-4 flex items-center py-2 border rounded-full bg-[#0f80a5] text-white"
            >
              Login
            </button>
            <button
              onClick={() => setShowSignup(true)}
              className="px-4 py-2 flex items-center border rounded-full bg-[#0f80a5] text-white"
            >
              Sign Up
            </button>
          </div>
        </nav>
      </div>

     
      {showSignup && (
        <div className="fixed inset-0 bg-[#c7c7c77e] flex justify-center items-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-[500px] relative">
            <h2 className="text-xl font-semibold mb-4 text-center text-gray-800">
              User Registration
            </h2>
            <form onSubmit={handleSignup} className="space-y-4">
              <input type="text" name="firstName" placeholder="First Name" required className="w-full p-2 border rounded-md"/>
              <input type="text" name="lastName" placeholder="Last Name" required className="w-full p-2 border rounded-md"/>
              <input type="email" name="email" placeholder="Email" required className="w-full p-2 border rounded-md"/>
              <select name="gender" required className="w-full p-2 border rounded-md">
                <option value="">Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
              <input type="date" name="dob" required className="w-full p-2 border rounded-md"/>
              <button type="submit" className="w-full py-2 bg-[#0f80a5] text-white rounded-md hover:opacity-90 transition">
                Register
              </button>
            </form>
            <button onClick={() => setShowSignup(false)} className="absolute top-3 right-3 text-gray-600 hover:text-black">✕</button>
          </div>
        </div>
      )}

      
      {showLogin && (
        <div className="fixed inset-0 bg-[#c7c7c77e] flex justify-center items-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-[400px] relative">
            <h2 className="text-xl font-semibold mb-4 text-center text-gray-800">
              User Login
            </h2>
            <form onSubmit={handleLogin} className="space-y-4">
              <input type="email" name="email" placeholder="Enter your Email" required className="w-full p-2 border rounded-md"/>
              <button type="submit" className="w-full py-2 bg-[#0f80a5] text-white rounded-md hover:opacity-90 transition">
                Next
              </button>
            </form>
            <button onClick={() => setShowLogin(false)} className="absolute top-3 right-3 text-gray-600 hover:text-black">✕</button>
          </div>
        </div>
      )}

      {/* OTP Modal */}
      {showOtp && (
        <div className="fixed inset-0 bg-[#c7c7c77e] flex justify-center items-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-[400px] relative">
            <h2 className="text-xl font-semibold mb-4 text-center text-gray-800">
              Enter OTP
            </h2>
            <form onSubmit={handleOtpVerify} className="space-y-4">
              <input 
                type="text" 
                placeholder="Enter OTP" 
                value={enteredOtp} 
                onChange={(e) => setEnteredOtp(e.target.value)} 
                required 
                className="w-full p-2 border rounded-md"
              />
              <button type="submit" className="w-full py-2 bg-[#0f80a5] text-white rounded-md hover:opacity-90 transition">
                Verify OTP
              </button>
            </form>
            <button onClick={() => setShowOtp(false)} className="absolute top-3 right-3 text-gray-600 hover:text-black">✕</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
