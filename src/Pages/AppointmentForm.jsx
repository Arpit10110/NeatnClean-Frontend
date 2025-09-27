import React from "react";
import { motion } from "framer-motion";
import FormData from "../Components/Formdata";
import booking from "../assets/booking.webp";

const AppointmentForm = () => {
  return (
    <>
      <div className="border w-full min-h-screen flex justify-center items-center bg-[#0A3F87] flex-col gap-10 px-4 py-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center items-center text-center max-w-2xl p-[2rem]"
        >
          <h1 className="text-white text-4xl md:text-[4rem] font-bold mb-3">
            Book Service
          </h1>
          <p className="text-white/90 text-sm md:text-base">
            Enjoy a spotless space with our expert cleaning team. Affordable,
            eco-friendly, and tailored to your needs!
          </p>
        </motion.div>

        {/* Card Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full max-w-5xl flex flex-col md:flex-row justify-center bg-white rounded-2xl shadow-2xl overflow-hidden"
        >
          {/* Image Section */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="md:w-[40%] w-full flex justify-center items-center p-6 bg-gray-50"
          >
            <img
              className="w-[80%] md:w-[90%] object-contain"
              src={booking}
              alt="booking"
            />
          </motion.div>

          {/* Form Section */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="md:w-[60%] w-full p-6 md:p-10"
          >
            <FormData />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default AppointmentForm;
