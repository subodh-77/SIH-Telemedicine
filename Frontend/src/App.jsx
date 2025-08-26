import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/Header.jsx";
import Hero from "./Components/Hero.jsx";
import Info from "./Components/Info.jsx";
import RolesSection from "./Components/RolesSection.jsx";
import Footer from "./Components/Footer.jsx";
import Dashboard from "./Components/Dashboard.jsx"; // 👈 create this page

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page (with all your sections) */}
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
        <Route path="./Components/Dashboard.jsx" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
