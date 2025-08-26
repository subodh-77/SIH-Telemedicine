import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/Header.jsx";
import Hero from "./Components/Hero.jsx";
import Info from "./Components/Info.jsx";
import RolesSection from "./Components/RolesSection.jsx";
import Footer from "./Components/Footer.jsx";
import Dashboard from "./Components/Dashboard.jsx";
import UserDashboard from "./Components/Dashboards/UserDashboard.jsx"; 
import DoctorDashboard from "./Components/Dashboards/DoctorDashBoard.jsx";

function App() {
  return (
    <Router>
      <Routes>
        
        <Route
          path="/"
          element={
            <div>
              <Header />
              <Hero />
              <Info />
              <RolesSection />
              <Footer />
            </div>
          }
        />

        {/* Dashboard Page */}
        <Route path="/dashboard" element={<UserDashboard/>} />
       
        <Route path="/doctorDashBoard" element={<DoctorDashboard/>} />
      </Routes>
    </Router>
  );
}

export default App;
