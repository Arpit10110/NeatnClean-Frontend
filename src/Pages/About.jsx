import React from 'react'
import about from '../assets/aboutImage.webp'
import Hero from '../Components/Hero'
import barb from '../assets/barb.webp'
import tom from '../assets/tom.webp'
import madison from '../assets/madison.webp'
import josh from '../assets/josh.webp'
import booking from '../assets/booking.webp'

// Import icons
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { NavLink } from 'react-router-dom'

// Framer Motion
import { motion } from "framer-motion"

// Team data
const team = [
  {
    img: barb,
    name: "Ankita Kashyap",
    role: "Senior Cleaning Specialist",
  },
  {
    img: tom,
    name: "Arpit Agrahari",
    role: "Deep Cleaning Specialist",
  },
  {
    img: madison,
    name: "Abhishek Kumar",
    role: "Appliance and Specialty Cleaner",
  },
  {
    img: josh,
    name: "Arpita Agrahari",
    role: "Move-in/Move-Out Cleaner",
  },
];

const About = () => {
  return (
    <>
      {/* Top Section */}
      <div className="flex flex-col bg-[#0A3F87] gap-4 md:flex-row md:items-center justify-around">
        <motion.div
          className="flex flex-col gap-3 p-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-white text-6xl font-bold">About</h1>
          <p className="text-white text-2xl md:text-xl">
            Enjoy a spotless space with our expert cleaning team. Affordable, eco-
          </p>
          <p className="text-white text-2xl md:text-xl">
            friendly, and tailored to your needs!
          </p>
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 pt-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <img className="w-full rounded-lg shadow-lg" src={about} alt="about" />
        </motion.div>
      </div>

      <div>
        <Hero />
      </div>

      <hr className="my-8" />

      {/* Team Section */}
      <div className="text-center mb-8">
        <h3 className="text-lg text-gray-500 tracking-wide">BEHIND THE SCENE</h3>
        <h1 className="text-4xl font-bold text-[#0A3F87]">Our Team</h1>
      </div>

      <div className="grid gap-8 px-6 md:px-20 md:grid-cols-2 lg:grid-cols-4">
        {team.map((member, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-40 h-40 object-cover rounded-full shadow-md mb-4"
            />
            <h2 className="text-xl font-semibold text-[#0A3F87]">{member.name}</h2>
            <h3 className="text-gray-600 mb-4">{member.role}</h3>

            {/* Social icons */}
            <div className="flex gap-4 text-[#0A3F87]">
              <a href="#" className="hover:text-blue-600">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="hover:text-sky-500">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="hover:text-pink-500">
                <FaInstagram size={20} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <hr className="my-12" />

      {/* Join Our Team Section */}
      <div className="flex flex-col md:flex-row items-center justify-around gap-8 px-6 md:px-20 py-12 bg-gray-50">
        {/* Image */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src={booking}
            alt="Join our team"
            className="w-full rounded-xl shadow-lg"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          className="flex flex-col gap-4 w-full md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h4 className="text-[#0A3F87] text-lg font-semibold uppercase tracking-wide">
            Join Our Team
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Join Our Team of Professional Cleaners
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We are a team of passionate cleaning experts who take pride in
            delivering the highest standard of service. With years of experience
            in the industry, we’ve perfected our cleaning methods to ensure every
            job is done right.
          </p>

          {/* Button with hover animation */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <NavLink
              to="/book-service"
              className="mt-4 inline-block bg-[#0A3F87] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#082c61] transition-colors duration-300 w-fit"
            >
              Join Now
            </NavLink>
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}

export default About
