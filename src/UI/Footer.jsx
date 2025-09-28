import React from 'react'
import { motion } from 'framer-motion'
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { FaDiscord } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { NavLink } from 'react-router-dom';
import { FaRegClock } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const iconHoverVariants = {
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: { duration: 0.2 }
    }
  };

  const linkHoverVariants = {
    hover: {
      x: 5,
      color: "#60A5FA",
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.footer 
      className="bg-[#161C2D] text-white"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Main Footer Content */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 p-6 lg:p-12">
        
        {/* Company Info Section */}
        <motion.div 
          className="w-full lg:w-1/4 flex flex-col gap-6"
          variants={itemVariants}
        >
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <h1 className="text-2xl lg:text-3xl font-bold text-white">
              neat<span className="text-yellow-400">N</span>Clean
            </h1>
          </motion.div>

          {/* Company Description */}
          <motion.p 
            className="text-gray-300 leading-relaxed text-sm lg:text-base"
            variants={itemVariants}
          >
            We are a team of passionate cleaning experts who take pride in delivering the highest standard of service. With years of experience in the industry, we've perfected our cleaning methods to ensure every job is done right.
          </motion.p>

          {/* Social Media Icons */}
          <motion.div 
            className="flex gap-4 text-2xl"
            variants={itemVariants}
          >
                
            {[
              { icon: CiFacebook, href: "#" },
              { icon: CiInstagram, href: "#" },
              { icon: CiYoutube, href: "#" },
              { icon: FaDiscord, href: "#" }
            ].map((social, index) => {
              const IconComponent = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-yellow-400 cursor-pointer transition-colors duration-300"
                  variants={iconHoverVariants}
                  whileHover="hover"
                  whileTap={{ scale: 0.95 }}
                >
                  <IconComponent />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Company Links */}
        <motion.div 
          className="w-full lg:w-1/4 flex flex-col gap-4"
          variants={itemVariants}
        >
          <h2 className="text-xl font-semibold text-white mb-2">Company</h2>
          
          <div className="flex flex-col gap-3">
            {[
              { to: "/", label: "Home" },
              { to: "/services", label: "Our Services" },
              { to: "/projects", label: "Projects" },
              { to: "/about", label: "About Us" },
              { to: "/blog", label: "Blog" },
              { to: "/contact", label: "Contact" }
            ].map((link, index) => (
              <motion.div key={index} variants={linkHoverVariants} whileHover="hover">
                <NavLink 
                  to={link.to} 
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 cursor-pointer"
                >
                  {link.label}
                </NavLink>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services Links */}
        <motion.div 
          className="w-full lg:w-1/4 flex flex-col gap-4"
          variants={itemVariants}
        >
          <h2 className="text-xl font-semibold text-white mb-2">Our Services</h2>
          
          <div className="flex flex-col gap-3">
            {[
              "Residential Cleaning",
              "Deep Cleaning", 
              "Commercial Cleaning",
              "Carpet and Upholstery Cleaning",
              "Post-Construction Cleaning"
            ].map((service, index) => (
              <motion.div key={index} variants={linkHoverVariants} whileHover="hover">
                <NavLink 
                  to={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 cursor-pointer"
                >
                  {service}
                </NavLink>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div 
          className="w-full lg:w-1/4 flex flex-col gap-6"
          variants={itemVariants}
        >
          {/* Working Hours */}
          <motion.div 
            className="flex flex-col gap-3"
            variants={itemVariants}
          >
            <div className="flex gap-3 items-center">
              <motion.div 
                className="text-yellow-400 text-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <FaRegClock />
              </motion.div>
              <h3 className="text-lg font-semibold text-white">We're Open</h3>
            </div>
            <p className="text-gray-300 ml-7">Monday-Saturday 08.00 - 18.00</p>
          </motion.div>

          {/* Office Location */}
          <motion.div 
            className="flex flex-col gap-3"
            variants={itemVariants}
          >
            <div className="flex gap-3 items-center">
              <motion.div 
                className="text-yellow-400 text-lg"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2 }}
              >
                <LuMapPin />
              </motion.div>
              <h3 className="text-lg font-semibold text-white">Office Location</h3>
            </div>
            <p className="text-gray-300 ml-7">
            Jalan complex old exchange road near satyanarayan mandir Sitamarhi<br />
            843302, India
            </p>
          </motion.div>

          {/* Contact Email */}
          <motion.div 
            className="flex flex-col gap-3"
            variants={itemVariants}
          >
            <div className="flex gap-3 items-center">
              <motion.div 
                className="text-yellow-400 text-lg"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2 }}
              >
                <MdEmail />
              </motion.div>
              <h3 className="text-lg font-semibold text-white">Send a Message</h3>
            </div>
            <motion.a 
              href="mailto:hello@neatnclean.com"
              className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 ml-7"
              whileHover={{ x: 5 }}
            >
              hello@neatnclean.com
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Footer */}
      <motion.div 
        className="border-t border-gray-700 py-6 px-6 lg:px-12"
        variants={itemVariants}
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.p 
            className="text-gray-400 text-sm text-center md:text-left"
            whileHover={{ color: "#D1D5DB" }}
          >
            © 2025 neatNClean. All rights reserved.
          </motion.p>
          
          <motion.div 
            className="flex gap-6 text-sm"
            variants={itemVariants}
          >
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item, index) => (
              <motion.a
                key={index}
                href="#"
                className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
