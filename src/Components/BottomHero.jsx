import React from 'react'
import { FaUsers, FaClock, FaShieldAlt } from 'react-icons/fa'

const BottomHero = () => {
  return (
    <>
      <div className="flex flex-col gap-10 p-6 md:flex-row md:p-[4rem] md:justify-between">
        
        {/* Professional Team */}
        <div className="flex items-start gap-5">
          <div className="text-amber-500 text-4xl">
            <FaUsers />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-lg">Professional Team</h1>
            <p className="text-[#666] leading-relaxed">
              Reliable, punctual service that respects your schedule and exceeds expectations.
            </p>
          </div>
        </div>

        {/* On Time Service */}
        <div className="flex items-start gap-5">
          <div className="text-amber-500 text-4xl">
            <FaClock />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-lg">On Time Service</h1>
            <p className="text-[#666] leading-relaxed">
              Affordable, upfront rates with no hidden costs — quality cleaning at the right price.
            </p>
          </div>
        </div>

        {/* Trusted & Insured */}
        <div className="flex items-start gap-5">
          <div className="text-amber-500 text-4xl">
            <FaShieldAlt />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-lg">Trusted & Insured</h1>
            <p className="text-[#666] leading-relaxed">
              Our trained, insured cleaners ensure professional, trusted and impeccable results.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default BottomHero