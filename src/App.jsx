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
import Profile from "./Pages/Profile";
import UserList from "./Pages/UserList.jsx";
import UserOrder from "./Pages/UserOrder.jsx";
import WorkerList from "./Pages/workerlist.jsx";

import Deep from "./Pages/Deep";
import Commercial from "./Pages/Commercial";
import Carpet from "./Pages/Carpet";
import Post from "./Pages/Post";
import WorkerProfile from "./Pages/WorkerProfile";
import UploadKyc from "./Pages/UploadKyc";

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
  <Route path="/admin/userlist" element={<UserList />} />
  <Route path="/admin/userorders" element={<UserOrder />} />
  <Route path="/admin/workerlist" element={<WorkerList />} />
  <Route path="/admin/workerapplication" element={<WorkerDetails />} />
  <Route path="/admin/worker/kyc" element={<KycStatus />} />
  <Route path="/admin/user" element={<UserDetails />} />
  <Route path="/book-service" element={<AppointmentForm/>}/>
  <Route path="/services/residential-cleaning" element={<ResidentialCleaning/>}/> 
  < Route path="/services/commercial-cleaning" element={<Commercial/>}/>
  <Route path="/services/carpet-and-upholstery-cleaning" element={<Carpet/>}/>
  <Route path="/services/post-construction-cleaning" element={<Post/>}/>
  <Route path="/services/deep-cleaning" element={<Deep/>}/>
   <Route path="/profile" element={<Profile/>} />
   <Route path="/worker/profile" element={<WorkerProfile/>} />
   <Route path="/worker/uploadKyc" element={<UploadKyc/>} />
</Routes>


        <Footer />
      </HashRouter>
    </>
  );
};

export default App;
