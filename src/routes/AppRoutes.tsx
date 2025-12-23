import { Routes, Route } from "react-router-dom"
import Dashboard from "../components/layout/dashboard"
import Home from "../pages/Home"
import AboutUs from "../pages/AboutUs"
import ContactUs from "../pages/ContactUs"
import IPR from "../pages/IPRComponents/IPR"
import WebAppDevelopment from "../pages/ProjectsComponents/WebAppDevelopment"
import MobileAppDevelopment from "../pages/ProjectsComponents/MobileAppDevelopment"
import StudentsInternshipProgram from "../pages/ProjectsComponents/StudentsInternshipProgram"
import Login from "../components/common/login"

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
