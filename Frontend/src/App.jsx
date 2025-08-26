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
import Chatbot from "./Components/Chatbot.jsx";
import PharmaDashBoard from "./Components/Dashboards/PharmaDashBoard.jsx";

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
              <Chatbot/>
              <Info />
              <RolesSection />
              <Footer />
              
            </div>
          }
        />

        {/* Dashboard Page */}
        <Route path="/dashboard" element={<UserDashboard/>} />
       
        <Route path="/doctorDashBoard" element={<DoctorDashboard/>} />

        <Route path="/PharmaDashboard" element={<PharmaDashBoard/>} />
      </Routes>
    </Router>
  );
}

export default App;
