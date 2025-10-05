import React from "react";
import { services } from "../Helpers/services";


const Pricing = () => {
  return (
    <section className="px-4 md:px-8 lg:px-20 py-12 max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
        Cleaning Services Pricing
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Transparent & affordable cleaning solutions for your home and office
      </p>


      <div className="overflow-x-auto shadow-lg rounded-xl">
        <table className="min-w-full bg-white rounded-xl">
          <thead>
            <tr className="bg-gray-100 text-gray-800">
              <th className="py-3 px-4 text-left font-semibold">#</th>
              <th className="py-3 px-4 text-left font-semibold">Service</th>
              <th className="py-3 px-4 text-left font-semibold">Price (₹)</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service, idx) => (
              <tr
                key={service.id}
                className={`border-b last:border-none ${
                  idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                } hover:bg-blue-50 transition`}
              >
                <td className="py-3 px-4">{service.id}</td>
                <td className="py-3 px-4 font-medium">{service.name}</td>
                <td className="py-3 px-4 text-blue-600 font-semibold">
                  ₹{service.price}<span className="text-red-600">*</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};


export default Pricing;
