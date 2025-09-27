import React from "react";
import girl from "../assets/girl.webp";
const Contacts = () => {
  return (
    <>
      <div className="bg-[#0A3F87] flex flex-col gap-3 p-3 md:flex-row md:justify-center md:items-center">
        <div className="md:w-1/2">
          <h1 className="text-white text-4xl">Contact</h1>
          <p className="text-[#7895BD] text-xl">
            Enjoy a spotless space with our expert cleaning team. Affordable,
            eco-friendly, and tailored to your needs!
          </p>
        </div>
        <div>
          <img className="w-[100vw] md:w-[50vw]" src={girl} alt="image" />
        </div>
      </div>
    </>
  );
};

export default Contacts;
