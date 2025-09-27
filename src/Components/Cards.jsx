import React from 'react'
import service1 from '../assets/service-1.webp'
import service2 from '../assets/service-2.webp'
import service3 from '../assets/service-3.webp'
import service4 from '../assets/service-4.webp'
import service5 from '../assets/service-5.webp'
import service6 from '../assets/service-6.webp'

const Cards = () => {
  const arr = [
    { id: 1, title: "Residential Cleaning", image: service1 },
    { id: 2, title: "Commercial Cleaning", image: service2 },
    { id: 3, title: "Deep Cleaning", image: service3 },
    { id: 4, title: "Move-In/Move-Out Cleaning", image: service4 },
    { id: 5, title: "Post-Construction Cleaning", image: service5 },
    { id: 6, title: "Carpet and Upholstery Cleaning", image: service6 },
  ]

  return (
    <section className="py-12 px-6">


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {arr.map((curElem) => (
          <div 
            key={curElem.id} 
            className="relative rounded-xl overflow-hidden shadow-lg group"
          >
            {/* Image */}
            <img 
              className="w-full h-64 object-cover transform transition duration-500 group-hover:scale-105" 
              src={curElem.image} 
              alt={curElem.title} 
            />

            {/* Blurred Title Bar */}
            <div className="absolute bottom-0 w-full bg-black/30 backdrop-blur-md text-center py-3">
              <p className="text-white text-lg font-semibold">{curElem.title}</p>
            </div>

            {/* Hidden Button (shows on hover) */}
            <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-500">
              <button className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded-lg shadow hover:bg-yellow-500">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Cards
