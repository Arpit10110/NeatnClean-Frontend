import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Otp from "../Components/Otp";
import { useParams, useNavigate, NavLink } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    address: "",
    phone: "",
  });
  const [role, setRole] = useState("user");
  const [loading, setLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);

  useEffect(() => {
    console.log(id);
    if (id !== "worker" && id !== "user") {
      navigate('/user/login');
    } else {
      setRole(id);
    }
    setOtpSent(false);
  }, [id, navigate]); 

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      let modifiedNumber = user.phone;
      if (user.phone?.toString().startsWith("9") && user.phone.length === 10) {
        modifiedNumber = `91${user.phone}`;
      }

      const res = await fetch("/api/v1/user/generateotp", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phone: parseInt(modifiedNumber) }),
      });

      const data = await res.json();
      console.log(data);

      if (!res.ok || data.success === false) {
        toast.error(data.message || "Invalid credentials");
      } else {
        toast.success(data.message || "OTP sent!");
        setOtpSent(true);
      }
    } catch (error) {
      toast.error("Something went wrong!");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="pt-[3rem] flex items-center justify-center bg-gradient-to-br from-teal-100 to-green-100 p-4">
        {otpSent ? (
          <Otp phone={user.phone} name={user.name} address={user.address} role={role} />
        ) : (
          <div className="flex flex-col gap-[1rem] w-full justify-center items-center">
            <div className="flex gap-[2rem] items-center">
              <NavLink
                to="/user/login"
                className={({ isActive }) =>
                  `hover:text-blue-600 transition ${
                    isActive ? "text-blue-600 font-semibold" : ""
                  } font-bold bg-[#d8d8d8] rounded-[5px] px-[1rem] py-[0.3rem]`
                }
              >
                User
              </NavLink>
              <NavLink
                to="/worker/login"
                className={({ isActive }) =>
                  `hover:text-blue-600 transition ${
                    isActive ? "text-blue-600 font-semibold" : ""
                  } font-bold bg-[#d8d8d8] rounded-[5px] px-[1rem] py-[0.3rem]`
                }
              >
                Worker
              </NavLink>
            </div>

            <form
              onSubmit={handleSubmit}
              className="bg-white shadow-lg rounded-2xl w-full max-w-md p-8 space-y-6"
            >
              <h2 className="text-2xl font-bold text-center text-teal-700">
                Cleaning Service {role} login
              </h2>

              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
                  onChange={handleChange}
                  value={user.name}
                />
              </div>

              <div>
                <label htmlFor="address" className="block text-gray-700 font-medium mb-1">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
                  onChange={handleChange}
                  value={user.address}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">
                  Phone
                </label>
                <input
                  type="number"
                  name="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
                  onChange={handleChange}
                  value={user.phone}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center items-center bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 rounded-lg transition duration-200 cursor-pointer disabled:opacity-60"
              >
                {loading ? (
                  <svg
                    className="animate-spin h-5 w-5 text-white mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                ) : null}
                {loading ? "Sending..." : "SEND OTP"}
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default Login;
