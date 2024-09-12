import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import imagePath from "./assets/Gec.png";
import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutVM from './pages/AboutVM';
import Contact from "./pages/Contact";
import Departments from './pages/Departments';
import Administration from './pages/Administration';
import Payments from './pages/Payments';
import Programmes from './pages/Programmes';
import UG from './pages/UG';
import PG from './pages/PG';
import PhD from './pages/PhD';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./App.css";
import AboutInstitute from './pages/AboutInstitute';
import PrincipalDesk from './pages/PrincipalDesk';
import Footer from './pages/Footer'

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
          <>
            <Router>
              <Navbar
                imageSrcPath={imagePath}
                navItems={navItems}
              />
              <div className="container-fluid container m-0 p-0">
                <Routes>
                  <Route path="*" element={<Navigate to="/" />} />
                  <Route path="/" element={<Home />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/aboutvm" element={<AboutVM />} />
                  <Route path="/aboutinstitute" element={<AboutInstitute />} />
                  <Route path="/principaldesk" element={<PrincipalDesk />} />
                  <Route path="/departments" element={<Departments />} />
                  <Route path="/administration" element={<Administration />} />
                  <Route path="/payments" element={<Payments />} />
                  <Route path="/programmes" element={<Programmes />} />
                  <Route path="/ug" element={<UG />} />
                  <Route path="/phd" element={<PhD />} />
                  <Route path="/pg" element={<PG />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </div>
            </Router>
            <div className='footer-spacing'>
              <Footer />
            </div>
          </>
          );
}

          export default App;