import React from "react";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import imagePath from "./assets/Gec.png";
import { BrowserRouter as BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutVM from './About/AboutVM';
import Contact from "./pages/Contact";
import UG from './Programmes/UG';
import PG from './Programmes/PG';
import PhD from './Programmes/PhD';
import GrievanceForm from './Administration/GrievanceForm';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./App.css";
import AboutInstitute from './About/AboutInstitute';
import PrincipalDesk from './About/PrincipalDesk';
import CSE from './Departments/Cse/CSE';
import INSTRU from './Departments/Instrumentation/instru';
import MECH from './Departments/Mechanical/Mech';
import Elec from './Departments/Electrical/Elec';
import Entc from './Departments/ElecNTC/Entc';
import Cvl from './Departments/Civil/Cvl';
import Footer from './pages/Footer';
import Studentlogin from './Administration/Studentlogin';
import Boyshostel from './hostel/Boyshostel';
import Girlshostel from './hostel/Girlshostel';
import Login from './Administration/Login';
import AdminLogin from './Administration/AdminLogin';
import Tenders from './Administration/Tenders';
import Committees from './Administration/Committees';
import SignupAdmin from './Administration/SigupAdmin';
import StudentSignUp from './Administration/StudentSignUp';
import ForgetStudent from './Administration/ForgetStudent';

import AboutCIIIT from "./CIIITPage/AboutCIIIT";
import AdmissionForm from "./CIIITPage/AdmissionForm";
import CIIITBrochure from "./CIIITPage/CIIITBrochure";
import CIIITContact from "./CIIITPage/CIIITContact";
import CIIITLeaflet from "./CIIITPage/CIIITLeaflet";
import CoursesDetails from "./CIIITPage/CoursesDetails";
import EligibilityCriteria from "./CIIITPage/EligibilityCriteria";
import ForgetAdmin from "./Administration/ForgetAdmin";
import Workshop from './Departments/Workshop';
import Studentprofile from './Administration/Studentprofile';
import AdminProfile from "./Administration/Adminprofile";
import WelcomeSection from "./pages/welcomepage";
import StudentProfile from "./Administration/StudentGrievanceDisplay";
import AdminDashboard from "./Administration/AdminGrievanceDisplay";
import ChatbotCTA from "./pages/chatbotCTA";
import StudentSection from "./Administration/studentSection";
import Technoutsav from "./Others/Technoutsav";
import TechnoutsavGallery from "./Others/TechnoutsavGallery";
import TechnoBanner from "./Others/TechnoBanner";
import Abhirang from "./Others/Abhirang";
import AbhirangGallery from "./Others/AbhirangGallery";
import AbhirangBanner from "./Others/AbhirangBanner";
import NewsEvents from "./pages/NewsEvents";
import PrincipalHods from "./Administration/principalHods";
import Office from "./Administration/Office";
import TPOPage from "./Others/TPOPage";
import TPOstuAdmin from "./Others/TPOstuAdmin";
import TPOstuFeedback from "./Others/TPOstuFeedback";
import TPOempAdmin from "./Others/TPOempAdmin";
import TPOempFeedback from "./Others/TPOempFeedback";

function App() {
  const navItems = [
    { name: "HOME" },
    {
      name: "ABOUT",
      subLinks: ["About Institute", "Principal's Desk", "Vision and Mission"]
    },
    {
      name: "DEPARTMENTS",
      subLinks: ["Computer Science & Engineering", "Electronics & Telecommunication Engineering", "Instrumentation Engineering", "Electrical Engineering", "Mechanical Engineering", "Civil Engineering", "Workshop"]
    },
    {
      name: "ADMINISTRATION",
      subLinks: ["Principal & HOD", "Student Section", "Office", "Committees", "Tenders", "Grievance Form"]
    },
    {
      name: "PROGRAMMES",
      subLinks: ["UG (B.Tech)", "PG (M.Tech)", "Ph.D"]
    },
    { name: "CIIIT", subLinks: ["About CIIIT", "Courses Details", "Eligibility Criteria", "Admission Form", "CIIIT Brochure", "CIIIT Leaflet", "CIIIT Contact"] },
    {
      name: "PAYMENTS",
      subLinks: [
        { name: "Online Payment (SBI)", subLinks: ["Admission/Exam/CIIIT fee", "Academic Verification/Security Deposit", "Tender/Testing", "Hostel Fee"] },
        { name: "Payment Gateway", subLinks: ["Payment by the Student", "Payment for Testing and Consultancy", "Payment for Ex-Student Verification"] }
      ]
    },
    {
      name: "HOSTEL",
      subLinks: ["Boys Hostel", "Girls Hostel"]
    },
    {
      name: "OTHERS",
      subLinks: [
        "Training & Placements",
        { name: "Events & Achievements", subLinks: ["News & Events", "TechnoUtsav", "Abhirang"] },
        "Alumni"
      ]
    },
    { name: "CONTACT" }
  ];

  return (
    <>
      <BrowserRouter basename="/">
        <Navbar imageSrcPath={imagePath} navItems={navItems} />
        <div className="container-fluid m-0 p-0">
          <Routes>
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/" element={<Home />} />
            <Route path="/aboutvm" element={<AboutVM />} />
            <Route path="/aboutinstitute" element={<AboutInstitute />} />
            <Route path="/principaldesk" element={<PrincipalDesk />} />
            <Route path="/ug" element={<UG />} />
            <Route path="/phd" element={<PhD />} />
            <Route path="/pg" element={<PG />} />
            <Route path="/grievanceform" element={<GrievanceForm />} />
            <Route path="/tenders" element={<Tenders />} />
            <Route path="/committees" element={<Committees />} />
            <Route path="/studentsignup" element={<StudentSignUp />} />
            <Route path="/cse" element={<CSE />} />
            <Route path="/instru" element={<INSTRU />} />
            <Route path="/mech" element={<MECH />} />
            <Route path="/elec" element={<Elec />} />
            <Route path="/entc" element={<Entc />} />
            <Route path="/cvl" element={<Cvl />} />
            <Route path="/studentlogin" element={<Studentlogin />} />
            <Route path="/signupadmin" element={<SignupAdmin />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/girlshostel" element={<Girlshostel />} />
            <Route path="/boyshostel" element={<Boyshostel />} />
            <Route path="/adminlogin" element={<AdminLogin />} />
            <Route path="/forgetstudent" element={<ForgetStudent />} />
            <Route path="/forgetadmin" element={<ForgetAdmin />} />
            <Route path="/workshop" element={<Workshop />} />
            <Route path="/studentprofile" element={<Studentprofile />} />
            <Route path="/aboutCIIIT" element={<AboutCIIIT />} />
            <Route path="/admissionform" element={<AdmissionForm />} />
            <Route path="/ciiitbrochure" element={<CIIITBrochure />} />
            <Route path="/ciiitcontact" element={<CIIITContact />} />
            <Route path="/ciiitleaflet" element={<CIIITLeaflet />} />
            <Route path="/coursesdetails" element={<CoursesDetails />} />
            <Route path="/eligibilitycriteria" element={<EligibilityCriteria />} />
            <Route path="/adminprofile" element={<AdminProfile />} />
            <Route path="/technoutsav" element={<Technoutsav />} />
            <Route path="/technoutsavgallery" element={<TechnoutsavGallery />} />
            <Route path="/technobanner" element={<TechnoBanner />} />
            <Route path="/abhirang" element={<Abhirang />} />
            <Route path="/abhiranggallery" element={<AbhirangGallery />} />
            <Route path="/abhirangbanner" element={<AbhirangBanner />} />
            <Route path="/welcomepage" element={<WelcomeSection />} />
            <Route path="/studentgrievancedisplay" element={<StudentProfile />} />
            <Route path="/admingrievancedisplay" element={<AdminDashboard />} />
            <Route path="/chatbotCTA" element={<chatbotCTA />} />
            <Route path="/newsevents" element={<NewsEvents />} />
            <Route path="/principalHods" element={<PrincipalHods />} />
            <Route path="/studentSection" element={<StudentSection />} />
            <Route path="/office" element={<Office />} />
            <Route path="/tpopage" element={<TPOPage />} />
            <Route path="/tpostuadmin" element={<TPOstuAdmin />} />
            <Route path="/tpostufeedback" element={<TPOstuFeedback />} />
            <Route path="/tpoempadmin" element={<TPOempAdmin />} />
            <Route path="/tpoempfeedback" element={<TPOempFeedback />} />
          </Routes>
        </div>
      </BrowserRouter>
      <ChatbotCTA />
      <Footer />
    </>
  );
}

export default App;
