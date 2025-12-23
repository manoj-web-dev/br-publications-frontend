import { Routes, Route } from "react-router-dom";
import Dashboard from "../components/layout/dashboard";
import Login from "../components/common/login";
import ContactUs from "../pages/contactUs";
import IPR from "../pages/IPRComponents/ipr";
import MobileAppDevelopment from "../pages/ProjectsComponents/mobileAppDevelopment";
import StudentsInternshipProgram from "../pages/ProjectsComponents/studentsInternshipProgram";
import WebAppDevelopment from "../pages/ProjectsComponents/webAppDevelopment";
import AboutUs from "../pages/aboutUs";
import Home from "../pages/home";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Dashboard />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ipr" element={<IPR />} />
        <Route path="/webappdevelopment" element={<WebAppDevelopment />} />
        <Route path="/mobileappdevelopment" element={<MobileAppDevelopment />} />
        <Route path="/StudentsInternshipProgram" element={<StudentsInternshipProgram />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Route>
    </Routes>
  )
}
