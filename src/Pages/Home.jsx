import React from "react";
import { motion } from "framer-motion";
import diwali from "../assets/diwali.jpg";
import { NavLink } from "react-router-dom";
import Hero from "../Components/Hero";
import BottomHero from "../Components/BottomHero";
import HomeService from "../Components/HomeService";
import Pricing from "../Components/Pricing";
import TermsAndConditions from "../Components/TermsAndConditions";
import FloatingContactButtons from "../Components/FloatingContactButtons";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const Home = () => {
  return (
    <>
      {/* Floating Contact Buttons */}
      <FloatingContactButtons 
        phoneNumber="+917004105221" 
        whatsappNumber="917004105221" 
      />

      <div
        className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex justify-center items-center flex-col relative"
        style={{ backgroundImage: `url(${diwali})` }}
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col justify-center items-center gap-4 text-center"
        >
          <motion.h1 variants={item} className="text-white text-7xl">
            Refreshing Spaces
          </motion.h1>
          <motion.h1 variants={item} className="text-white text-7xl">
            With Sparkle And Care
          </motion.h1>
          <motion.p variants={item} className="text-2xl text-white/90">
            Fast, reliable and affordable cleaning service
          </motion.p>
          <motion.div variants={item} className="mt-2">
            <NavLink
              to="/book-service"
              className="text-2xl bg-[#FEE74A] px-6 py-3 rounded-xl font-bold my-4 shadow-md hover:shadow-lg transition-shadow duration-300 text-gray-900"
            >
              Book a service
            </NavLink>
          </motion.div>
        </motion.div>
        <div className="flex flex-col gap-5 absolute bottom-0 bg-[#FFFFFF] shadow-lg shadow-amber-950 rounded-xl p-4 md:flex-row ">
          <div className="flex justify-center items-center gap-5">
            <svg
              className=" w-20"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#3BA9F4"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="9" />
              <polyline points="12 7 12 12 15 15" />
            </svg>

            <div>
              <h1 className="font-bold">Areas of Coverage</h1>
              <p>Trust us to deliver reliable solutions.</p>
            </div>
          </div>

          <div className="flex gap-5 justify-center items-center">
            <svg
              className="w-20"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#3BA9F4"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="5" width="18" height="16" rx="2" ry="2" />

              <line x1="8" y1="3" x2="8" y2="7" />
              <line x1="16" y1="3" x2="16" y2="7" />
              <line x1="3" y1="9" x2="21" y2="9" />

              <rect x="7" y="13" width="2" height="2" fill="#3BA9F4" />
              <rect x="11" y="13" width="2" height="2" fill="#3BA9F4" />
              <rect x="15" y="13" width="2" height="2" fill="#3BA9F4" />
            </svg>
            <div>
              <h1 className="font-bold">Booking Service</h1>
              <p>Trust us to deliver reliable solutions.</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Hero />
      </div>

      <div>
        <BottomHero />
      </div>

      <div className="w-1/2 bg-black "></div>
      <div>
        <HomeService />
      </div>

      <div id="pricing">
        <Pricing />
      </div>

      <div>
        <TermsAndConditions />
      </div>
    </>
  );
};

export default Home;
