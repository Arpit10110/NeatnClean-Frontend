import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Otp = ({ phone, name, address,role }) => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [timer, setTimer] = useState(120);
  const [canResend, setCanResend] = useState(false);
 
   

 
 

  const navigate = useNavigate();

  let modifiedNumber = phone;
  if (phone?.toString().startsWith("9") && phone.length === 10) {
    modifiedNumber = `+91${phone}`;
  }

  useEffect(() => {
    
    let interval;
    if (timer > 0) {
      interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    } else {
      setCanResend(true);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const res = await fetch(`/v1/user/verifyotp`, {
        method: "POST",
        credentials:"include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone: modifiedNumber,
          name,
          address,
          otp,
          role,
        }),
      });

      const data = await res.json();
     console.log(data)

      if (data.success === true) {
        setMessage({ type: "success", text: "OTP Verified Successfully ✅" });
        console.log("Verified Data:", data);
      
       navigate('/')
      } else {
        setMessage({
          type: "error",
          text: data.message || "OTP Verification Failed ❌",
        });
      }
    } catch (error) {
      setMessage({
        type: "error",
        text: "Server Error. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    setTimer(120);
    setCanResend(false);
    setMessage({ type: "info", text: "OTP resent successfully 🔄" });

    try {
      await fetch(`/v1/user/generateotp`, {
        method: "POST",
        credentials:"include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: modifiedNumber }),
      });
    } catch (err) {
      setMessage({ type: "error", text: "Failed to resend OTP ❌" });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center h-screen"
    >
      <div className="bg-white shadow-lg rounded-xl p-8 w-96">
        <h2 className="text-2xl font-bold text-teal-700 mb-4 text-center">
          Enter OTP sent to{" "}
          <span className="text-teal-500">{modifiedNumber}</span>
        </h2>

        <input
          type="number"
          placeholder="Enter OTP"
          className="border rounded-lg px-4 py-2 w-full mb-4 focus:ring-2 focus:ring-teal-500 outline-none"
          value={otp}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 px-6 rounded-lg text-white font-semibold transition ${
            loading ? "bg-gray-400 cursor-not-allowed" : "bg-teal-600 hover:bg-teal-700"
          }`}
        >
          {loading ? "Verifying..." : "Verify OTP"}
        </button>

        {/* Timer and Resend */}
        <div className="text-center mt-4">
          {canResend ? (
            <button
              type="button"
              onClick={handleResend}
              className="text-teal-600 font-semibold hover:underline"
            >
              Resend OTP
            </button>
          ) : (
            <p className="text-gray-600">Resend available in {timer}s</p>
          )}
        </div>

        {message && (
          <p
            className={`mt-4 text-center font-medium ${
              message.type === "success"
                ? "text-green-600"
                : message.type === "error"
                ? "text-red-600"
                : "text-blue-600"
            }`}
          >
            {message.text}
          </p>
        )}
      </div>
    </form>
  );
};

export default Otp;
