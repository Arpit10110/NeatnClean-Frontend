import React from "react";
import { motion } from "framer-motion";
import wipe from '../assets/wipe.webp'
import clean2 from '../assets/clean2.webp'
import clean3 from '../assets/clean3.webp'
import clean4 from '../assets/clean4.webp'

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const textVariants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9]
      }
    }
  };

  const tagVariants = {
    hidden: { 
      opacity: 0, 
      x: -30 
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 30
    },
    visible: (index) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: index * 0.1, // Reduced delay for mobile
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    })
  };

  const hoverVariants = {
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  // Mobile-specific variants
  const mobileImageVariants = {
    hidden: { 
      opacity: 0, 
      y: 20
    },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut"
      }
    })
  };

  return (
    <motion.div 
      className="w-full flex flex-col lg:flex-row items-center py-8 lg:py-16 px-4 sm:px-6 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Left Content Section */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4 lg:gap-6 lg:pr-12 mb-8 lg:mb-0">
        <motion.div 
          className="flex justify-center lg:justify-start"
          variants={tagVariants}
        >
          <motion.div 
            className="rounded-xl bg-[#ECF7FF] py-2 px-4 lg:px-6 inline-block"
            whileHover={{ 
              backgroundColor: "#E3F2FD",
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
          >
            <h4 className="text-[#4A90E2] text-xs sm:text-sm font-semibold tracking-wider">
              ABOUT neatNclean
            </h4>
          </motion.div>
        </motion.div>
        
        <motion.div 
          variants={textVariants}
          className="text-center lg:text-left"
        >
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Bringing Clean, Comfort,
          </motion.h1>
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            and Care Together
          </motion.h1>
        </motion.div>

        <motion.div
          variants={textVariants}
          transition={{ delay: 0.6 }}
          className="text-center lg:text-left"
        >
          <motion.p 
            className="text-[#666666] text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            We are a team of passionate cleaning experts who take pride in delivering the 
            highest standard of service. With years of experience in the industry, we've perfected 
            our cleaning methods to ensure every job is done right.
          </motion.p>
        </motion.div>
      </div>

      {/* Right Images Section */}
      <div className="w-full lg:w-1/2">
        
        {/* Desktop Layout (lg and up) */}
        <div className="hidden lg:flex gap-4">
          {/* Large left image */}
          <motion.div 
            className="w-1/2"
            custom={0}
            variants={imageVariants}
          >
            <motion.img 
              src={wipe} 
              alt="Professional shower cleaning" 
              className="rounded-2xl object-cover w-full h-[500px] cursor-pointer" 
              variants={hoverVariants}
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
            />
          </motion.div>

          {/* Right grid of smaller images */}
          <div className="w-1/2 grid grid-rows-2 gap-4">
            <motion.div
              custom={1}
              variants={imageVariants}
            >
              <motion.img 
                src={clean2} 
                alt="Cleaning professional with supplies" 
                className="rounded-2xl object-cover w-full h-[240px] cursor-pointer" 
                variants={hoverVariants}
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
              />
            </motion.div>
            
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                custom={2}
                variants={imageVariants}
              >
                <motion.img 
                  src={clean3} 
                  alt="Surface cleaning with spray" 
                  className="rounded-2xl object-cover w-full h-[240px] cursor-pointer" 
                  variants={hoverVariants}
                  whileHover="hover"
                  whileTap={{ scale: 0.98 }}
                />
              </motion.div>
              
              <motion.div
                custom={3}
                variants={imageVariants}
              >
                <motion.img 
                  src={clean4} 
                  alt="Window cleaning service" 
                  className="rounded-2xl object-cover w-full h-[240px] cursor-pointer" 
                  variants={hoverVariants}
                  whileHover="hover"
                  whileTap={{ scale: 0.98 }}
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Mobile and Tablet Layout (below lg) */}
        <div className="lg:hidden">
          {/* Single column layout for mobile/tablet */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <motion.div
              custom={0}
              variants={mobileImageVariants}
              className="sm:col-span-2"
            >
              <motion.img 
                src={wipe} 
                alt="Professional shower cleaning" 
                className="rounded-2xl object-cover w-full h-[200px] sm:h-[250px] md:h-[300px] cursor-pointer" 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              />
            </motion.div>

            <motion.div
              custom={1}
              variants={mobileImageVariants}
            >
              <motion.img 
                src={clean2} 
                alt="Cleaning professional with supplies" 
                className="rounded-2xl object-cover w-full h-[180px] sm:h-[200px] cursor-pointer" 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              />
            </motion.div>

            <motion.div
              custom={2}
              variants={mobileImageVariants}
            >
              <motion.img 
                src={clean3} 
                alt="Surface cleaning with spray" 
                className="rounded-2xl object-cover w-full h-[180px] sm:h-[200px] cursor-pointer" 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              />
            </motion.div>

            <motion.div
              custom={3}
              variants={mobileImageVariants}
              className="sm:col-span-2"
            >
              <motion.img 
                src={clean4} 
                alt="Window cleaning service" 
                className="rounded-2xl object-cover w-full h-[180px] sm:h-[200px] cursor-pointer" 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
