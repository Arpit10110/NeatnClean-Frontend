
import React from 'react'
import girl from '../assets/girl.webp'
import HomeService from '../Components/HomeService'
import { NavLink } from "react-router-dom"
import { motion } from "framer-motion"

const Services = () => {
  return (
    <>
      <div className='bg-[#0A3F87] flex flex-col justify-around items-center p-4 gap-4 md:flex-row'>
        
        {/* Left Side Content */}
        <motion.div 
          className='flex flex-col gap-3 md:p-10'
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className='text-5xl text-white mb-2'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Service
          </motion.h1>
          
          <motion.p 
            className='text-white text-2xl'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Enjoy a spotless space with our expert cleaning team. Affordable, eco-
          </motion.p>
          
          <motion.p 
            className='text-white text-2xl'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            friendly, and tailored to your needs!
          </motion.p>

          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <NavLink 
              to="/book-service" 
              className="bg-white text-[#0A3F87] px-6 py-2 rounded-2xl font-semibold shadow-md"
            >
              Get Started
            </NavLink>
          </motion.div>
        </motion.div>

        {/* Right Side Image */}
        <motion.div 
          className='w-full'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <img className='w-full rounded-2xl shadow-lg' src={girl} alt="" />
        </motion.div>
      </div>

      {/* Home Service Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <HomeService />
      </motion.div>
    </>
  )
}

export default Services
