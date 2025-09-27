import React from 'react'
import girl from '../assets/girl.webp'
const ResidentialCleaning = () => {
  return (
    <div>
      <div className='w-full bg-[#0A3F87] flex justify-around items-center '>
      <div>
          <h1>Residential Cleaning</h1>
      </div>
        <div className='border w-[45vw]'>
            <img className='w-full' src={girl} alt="image" />
        </div>
      </div>
    </div>
  )
}

export default ResidentialCleaning
