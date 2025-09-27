import React from "react";

const AcceptTable = ({ data,refreshdata }) => {
  console.log("refreshdata")
  return (
    <div className="overflow-x-auto p-6">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="py-3 px-4 border-b">Name</th>
            <th className="py-3 px-4 border-b">Phone</th>
            <th className="py-3 px-4 border-b">Address</th>
            <th className="py-3 px-4 border-b">Aadhaar</th>
            <th className="py-3 px-4 border-b">PAN</th>
            <th className="py-3 px-4 border-b">Bank Details</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            <tr key={item._id} className="hover:bg-gray-50">
              <td className="py-3 px-4 border-b">{item.worker_id.name}</td>
              <td className="py-3 px-4 border-b">{item.worker_id.phone}</td>
              <td className="py-3 px-4 border-b">{item.worker_id.address}</td>
              <td className="py-3 px-4 border-b">
                <a href={item.adhar_image} target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600">View</a>
              </td>
              <td className="py-3 px-4 border-b">
                <a href={item.pan_image} target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600">View</a>
              </td>
              <td className="py-3 px-4 border-b">
                <p><strong>Bank:</strong> {item.bank_name}</p>
                <p><strong>Account:</strong> {item.account_number}</p>
                <p><strong>IFSC:</strong> {item.ifsc_code}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AcceptTable;
