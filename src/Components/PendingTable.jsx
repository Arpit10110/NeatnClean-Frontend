import React from "react";
import Showpop from "./Showpop";
const PendingTable = ({ data,refreshData,openpop }) => {
  return (
    <div className="overflow-x-auto p-6 relative">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="py-3 px-4 border-b">Name</th>
            <th className="py-3 px-4 border-b">Phone Number</th>
            <th className="py-3 px-4 border-b">Address</th>
            <th className="py-3 px-4 border-b">Aadhaar</th>
            <th className="py-3 px-4 border-b">PAN</th>
            <th className="py-3 px-4 border-b text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            <tr key={item._id} className="hover:bg-gray-50">
              <td className="py-3 px-4 border-b">{item.worker_id.name}</td>
              <td className="py-3 px-4 border-b">{item.worker_id.phone}</td>
              <td className="py-3 px-4 border-b">{item.worker_id.address}</td>
              <td className="py-3 px-4 border-b">
                <a
                  href={item.adhar_image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  View
                </a>
              </td>
              <td className="py-3 px-4 border-b">
                <a
                  href={item.pan_image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  View
                </a>
              </td>
              <td className="py-3 px-4 border-b text-center">
                <div className="flex justify-center gap-2">
                  <button
                    className="px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600"
                    onClick={() =>{
                      let kyc_id = item._id
                      openpop(kyc_id,"accepted")
                    }}
                  >
                    Accept
                  </button>
                  <button
                    className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
                    onClick={() =>{
                       let kyc_id = item._id
                      openpop(kyc_id,"rejected")
                    }}
                  >
                    Reject
                  </button>
                  <button
                    className="px-3 py-1 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                    onClick={() => onOpenPopup("info", item)}
                  >
                    More Info
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PendingTable;
