import React from "react";
import { HashRouter, Routes, Route, Router } from "react-router-dom";
import Login from "./Pages/Login";
import Header from "./UI/Header";
import Footer from "./UI/Footer";
import Home from "./Pages/Home";
import Subscription from "./Pages/Subscription";
import Services from "./Pages/Services";
import HowItWorks from "./Pages/HowItWorks";
import Contacts from "./Pages/Contacts";
import Admin from "./Pages/Admin";
import WorkerDetails from "./Components/WorkerDetails";
import KycStatus from "./Components/KycStatus";
import UserDetails from "./Components/UserDetails";

import AppointmentForm from "./Pages/AppointmentForm";
import About from "./Pages/About";
import ResidentialCleaning from "./Pages/ResidentialCleaning";

const App = () => {
  return (
    <>
      <HashRouter>
        <Header />

      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/:id/login" element={<Login />} />
  <Route path="/subscription" element={<Subscription />} />
  <Route path="/services" element={<Services />} />
  <Route path="/how-it-works" element={<HowItWorks />} />
  <Route path="/contacts" element={<Contacts />} />

   <Route path="/about" element={<About/>} /> 
  <Route path="/admin" element={<Admin />} />
  <Route path="/admin/worker" element={<WorkerDetails />} />
  <Route path="/admin/worker/kyc" element={<KycStatus />} />
  <Route path="/admin/user" element={<UserDetails />} />
  <Route path="/book-service" element={<AppointmentForm/>}/>
  <Route path="/services/residential-cleaning" element={<ResidentialCleaning/>} />
</Routes>


        <Footer />
      </HashRouter>
    </>
  );
};

export default App;
