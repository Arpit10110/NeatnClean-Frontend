import React, { useEffect, useState } from "react";
import PendingTable from "./PendingTable";
import AcceptTable from "./AcceptTable";
import RejectTable from "./RejectTable";
import Showpop from "./Showpop";
const WorkerDetails = () => {
  const [status, setStatus] = useState("pending"); 
  const [user, setUser] = useState([]);
  const [showpop,Setshowpop] = useState(false)
  const [selectedkyc,setselectedkyc] = useState("");
  const [selectedtype,Setselectedtype] = useState("")
  const getKyc = async () => {
    try {
      console.log(status)
      const res = await fetch(
        `/api/v1/worker/getallkyc?status=${status}`,
        { credentials: "include" }
      );
      const details = await res.json();
      if (res.ok && details.success && details.data) {
        setUser(details.data);
      }
    } catch (error) {
      console.error("Error fetching KYC data:", error);
    }
  };

    const handleOpenPopup = (kyc_id, type) => {
      setselectedkyc(kyc_id)
      Setselectedtype(type)
      Setshowpop(true)
  };

  const handleClosePopup = () => {
        console.log("close pop")
        Setshowpop(false)
  };

  useEffect(() => {
    getKyc();
  }, [status]);

  return (
    <div className="w-full min-h-screen border border-gray-200 py-10 bg-gray-50 rounded-lg">
      {/* Header */}
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Worker Applications</h2>
        <p className="text-gray-600 mt-2">Manage worker status and applications</p>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-around items-center border border-gray-300 bg-white rounded-lg p-6 max-w-2xl mx-auto shadow-sm mb-8">
        <button
          onClick={() =>{
             setStatus("accepted")
             getKyc()
          }}
          className={`${status === "accepted" ? 'bg-green-200 border-green-500' : 'bg-green-100 border-green-300'} hover:bg-green-200 text-green-700 font-semibold py-3 px-8 rounded-lg border`}
        >
          Accepted
        </button>
        <button
          onClick={() =>{
             setStatus("rejected")
             getKyc()
          }}
          className={`${status === "rejected" ? 'bg-red-200 border-red-500' : 'bg-red-100 border-red-300'} hover:bg-red-200 text-red-700 font-semibold py-3 px-8 rounded-lg border`}
        >
          Rejected
        </button>
        <button
          onClick={() => setStatus("pending")}
          className={`${status === "pending" ? 'bg-yellow-200 border-yellow-500' : 'bg-yellow-100 border-yellow-300'} hover:bg-yellow-200 text-yellow-700 font-semibold py-3 px-8 rounded-lg border`}
        >
          Pending
        </button>
      </div>

      {/* Tables */}
      <div className="mt-6">
        {status === "pending" && <PendingTable data={user} refreshData={getKyc} openpop={handleOpenPopup} />}
        {status === "accepted" && <AcceptTable data={user} refreshData={getKyc} />}
        {status === "rejected" && <RejectTable data={user} refreshData={getKyc} />}
      </div>
      {showpop ?
      <Showpop kyc_id={selectedkyc} type={selectedtype} onClose={handleClosePopup} getkyc={getKyc} />:
      <></>
      }
    </div>
  );
};

export default WorkerDetails;
