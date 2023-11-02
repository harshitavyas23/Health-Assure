import React from 'react'
import Home from "../pages/Home"
import Contact from "../pages/Contact"
import Login from "../pages/Login"
import Signup from "../pages/Signup"
import Services from "../pages/Services"
import Doctors from "../pages/Doctors/Doctors"
import DoctorDetails from "../pages/Doctors/DoctorDetails"
import UserDetail from "../pages/UserDetail"
import {Routes,Route} from 'react-router-dom'
function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/doctors" element={<Doctors/>}/>
      <Route path="/doctordetail" element={<DoctorDetails/>}/>
      <Route path="/userdetail" element={<UserDetail/>}/>
    </Routes>
  )
}

export default Routers
