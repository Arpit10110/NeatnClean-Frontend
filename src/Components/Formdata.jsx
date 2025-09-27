import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";
const FormData = () => {
  const [formData, setFormData] = useState({
    service: "",
    date: new Date(),
    time: new Date(),
    email: "",
    any_message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, date });
  };

  const handleTimeChange = (time) => {
    setFormData({ ...formData, time });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    toast.success("Appointment Booked")
    const res = await fetch("/v1/service/addnewservice",{
        method:"POST",
        credentials:"include",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(formData)
    })
const data =  await res.json()
console.log(data)
  };
  const getuser = async() => {
    console.log("Form Data:", formData);
    const res = await fetch("/v1/user/getuser",{
        method:"GET",
        credentials:"include",
        headers:{
            "Content-Type":"application/json"
        },
    })
const data =  await res.json()
console.log(data)
  };

  return (
    <div className="max-w-2xl mx-auto bg-white  rounded-2xl p-8">
        <button onClick={getuser} >getuser</button>
      
      <form onSubmit={handleSubmit} className="grid gap-6">
        {/* Service */}
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Select Service *
          </label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full mt-2 p-3 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select a service</option>

            <optgroup label="General Cleaning">
              <option value="Room Cleaning">Room Cleaning</option>
              <option value="Bathroom Cleaning">Bathroom Cleaning</option>
              <option value="Carpet Cleaning">Carpet Cleaning</option>
            </optgroup>

            <optgroup label="Appliance Cleaning">
              <option value="AC Cleaning">AC Cleaning</option>
              <option value="Sofa Cleaning">Sofa Cleaning</option>
            </optgroup>

            <optgroup label="Vehicle Cleaning">
              <option value="Car Cleaning">Car Cleaning</option>
            </optgroup>

            <optgroup label="Home Packages">
              <option value="1 BHK">1 BHK</option>
              <option value="2 BHK">2 BHK</option>
              <option value="3 BHK">3 BHK</option>
              <option value="4 BHK">4 BHK</option>
              <option value="5 BHK">5 BHK</option>
            </optgroup>

            <optgroup label="Commercial">
              <option value="Restaurant Cleaning">Restaurant Cleaning</option>
            </optgroup>
          </select>
        </div>

        {/* Date */}
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Select Date *
          </label>
          <DatePicker
            selected={formData.date}
            onChange={handleDateChange}
            dateFormat="MMMM d, yyyy"
            minDate={new Date()}
            className="w-full mt-2 p-3 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        {/* Time */}
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Select Time *
          </label>
          <DatePicker
            selected={formData.time}
            onChange={handleTimeChange}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={30}
            timeCaption="Time"
            dateFormat="h:mm aa"
            className="w-full mt-2 p-3 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Have Any Message?
          </label>
          <textarea
            name="any_message"
            placeholder="Your Message"
            value={formData.any_message}
            onChange={handleChange}
            className="w-full mt-2 p-3 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            rows="4"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-6 py-3 rounded-md font-medium shadow-md hover:bg-blue-600 transition cursor-pointer"
        >
          Send Appointment
        </button>
      </form>
    </div>
  );
};

export default FormData;
