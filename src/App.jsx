import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import imagePath from "./assets/Gec.jpg"; // Correct import path
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Departments from './pages/Departments';
import Administration from './pages/Administration';
import Payments from './pages/Payments';
import Programmes from './pages/Programmes';
import "./App.css";
function App() {
  const navItems = [
    { name: "HOME" },
    {
      name: "ABOUT",
      subLinks: ["About Institute", "Principal's Desk", "Vision and Mission"]
    },
    {
      name: "DEPARTMENTS",
      subLinks: ["Computer Science & Engineering", "Electronics & Telecommunication Engineering", "Instrumentation Engineering", "Electrical Engineering", "Mechanical Engineering", "Civil Engineering"]
    },
    {
      name: "ADMINISTRATION",
      subLinks: ["Principal & HOD", "Student Section", "Office", "Committees", "Tenders", "Grievance Form"]
    },
    {
      name: "PROGRAMMES",
      subLinks: ["UG (B.Tech)", "PG (M.Tech)", "Ph.D"]
    },
    { name: "PAYMENTS" },
    { 
      name: "OTHERS",
      subLinks: [
        "Committees",
        "Training & Placements",
        { name: "Events & Achievements", subLinks: ["News & Events", "TechnoUtsav", "Abhirang"] },
        "Alumini",
        "Resources",
        { name: "Hostel", subLinks: ["Boy's Hostel", "Girl's Hostel"] }
      ]
    },
    { name: "CONTACT" }
  ];

  return (
    <Router>
      <Navbar
        imageSrcPath={imagePath}  
        navItems={navItems}
      />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/administration" element={<Administration />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/programmes" element={<Programmes />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
