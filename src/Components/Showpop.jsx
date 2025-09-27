import React, { useState } from 'react'

const Showpop = ({ type, kyc_id , onClose,getkyc }) => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        console.log(message)
        console.log(kyc_id,type)
      setLoading(true);
      const res = await fetch("http://localhost:5000/v1/worker/updatekyc", {
        method: "PUT",
        credentials:"include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          status: type,
          message,
          kycid: kyc_id,
        }),
      });

      const data = await res.json();
      console.log(data)
      if (data.success) {
        alert("KYC updated successfully ✅");
        onClose();
        getkyc()
      } else {
        alert(data.message || "Something went wrong ❌");
      }
    } catch (error) {
      console.error("Error updating KYC:", error);
      alert("Failed to update KYC ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/30 backdrop-blur-sm z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 w-11/12 max-w-md">
        {(type === "accepted" || type === "rejected") && (
          <form onSubmit={handleSubmit}>
            <h2 className="text-xl font-semibold mb-4 capitalize">{type} User</h2>
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              placeholder={`Enter reason for ${type}...`}
              className="w-full min-h-[120px] p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
            />
            <div className="flex justify-end gap-3">
              <button type="button" onClick={onClose} className="px-4 py-2 rounded-lg bg-gray-300 text-black hover:bg-gray-400 transition" disabled={loading}>Cancel</button>
              <button type="submit" className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition" disabled={loading}>{loading ? "Submitting..." : "Submit"}</button>
            </div>
          </form>
        )}

        {type === "info" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Worker Details</h2>
            <p><strong>Name:</strong> {user?.worker_id?.name}</p>
            <p><strong>Phone:</strong> {user?.worker_id?.phone}</p>
            <p><strong>Address:</strong> {user?.worker_id?.address}</p>
            <p><strong>Bank:</strong> {user?.bank_name}</p>
            <p><strong>Account:</strong> {user?.account_number}</p>
            <p><strong>IFSC:</strong> {user?.ifsc_code}</p>
            <div className="flex gap-4 mt-4">
              <a href={user?.adhar_image} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600">View Aadhaar</a>
              <a href={user?.pan_image} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600">View PAN</a>
            </div>
            <div className="flex justify-end mt-6">
              <button onClick={onClose} className="px-4 py-2 rounded-lg bg-gray-300 text-black hover:bg-gray-400 transition">Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Showpop
