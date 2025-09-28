import React from 'react'
import girl from '../assets/girl.webp'
import living from '../assets/livingRoom.webp'
import bedroom from '../assets/bedroom.webp'
import kitchen from '../assets/kitchen.webp'
import bathroom from '../assets/bathroom.webp'

const Deep = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="w-full bg-[#0A3F87] flex flex-col md:flex-row justify-around items-center text-white px-6 py-12">
        <div className="max-w-lg">
          <h1 className="text-4xl font-bold mb-4">Residential Cleaning</h1>
          <p className="text-lg leading-relaxed">
            A clean home is a happy home! Let us take care of the cleaning so
            you can enjoy your space stress-free. Our professional cleaning
            services are tailored to fit your lifestyle and budget.
          </p>
        </div>
        <div className="w-[80%] md:w-[45%] mt-8 md:mt-0">
          <img className="w-full rounded-lg shadow-lg" src={girl} alt="Residential Cleaning" />
        </div>
      </div>

      {/* Services & Why Choose Us Section */}
      <div className="w-full px-6 py-16 flex flex-col lg:flex-row gap-10 justify-center items-start">
        
        {/* Left Column - Services */}
        <div className="flex-1 max-w-xl">
          <p className="text-gray-700 mb-6 leading-relaxed">
            Life is busy, and your time is precious. Let us take care of the
            cleaning so you can enjoy a fresh, spotless living space without the
            hassle. Our residential cleaning services are tailored to fit your
            unique needs, delivering the highest standards of cleanliness and care.
          </p>

          <h2 className="text-2xl font-bold mb-6">Residential Cleaning Services List</h2>
          <ul className="space-y-3 text-gray-700">
            {[
              "Dusting surfaces, furniture, and décor",
              "Vacuuming and mopping floors",
              "Wiping down countertops and tabletops",
              "Cleaning and sanitizing bathrooms (toilets, sinks, showers, tubs)",
              "Cleaning and sanitizing kitchen surfaces (stovetops, sinks, and appliances)",
              "Emptying trash bins and replacing liners",
              "Cleaning mirrors and glass surfaces",
              "Tidying up and organizing as needed",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-yellow-500 text-lg">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column - Why Choose Us */}
        <div className="flex-1 max-w-xl bg-blue-400 text-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6">
            Why Choose Our Residential Cleaning Services?
          </h2>
          <ol className="space-y-4">
            <li>
              <span className="font-bold">1. Experienced and Trusted Team:</span>{" "}
              Our cleaners are fully trained, background-checked, and committed
              to delivering exceptional results.
            </li>
            <li>
              <span className="font-bold">2. Customizable Cleaning Plans:</span>{" "}
              Choose from one-time deep cleaning, weekly, biweekly, or monthly
              service options to suit your needs and budget.
            </li>
            <li>
              <span className="font-bold">3. Eco-Friendly Cleaning Products:</span>{" "}
              We prioritize the health of your family and the environment by
              using safe, non-toxic cleaning solutions.
            </li>
            <li>
              <span className="font-bold">4. Attention to Detail:</span> From
              dusting high shelves to scrubbing tile grout, we leave no spot
              untouched.
            </li>
          </ol>
        </div>
      </div>

      {/* Comprehensive Cleaning Services Section */}
      <div className="w-full bg-gray-50 px-6 py-16">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-12">
          Our Comprehensive Cleaning Services Include
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { img: living, title: "Living Rooms" },
            { img: bedroom, title: "Bedrooms" },
            { img: kitchen, title: "Kitchens" },
            { img: bathroom, title: "Bathrooms" },
          ].map((service, index) => (
            <div
              key={index}
              className="text-center bg-white rounded-lg shadow hover:shadow-lg transition p-4"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Deep