import React, { useState } from "react";
import { toast } from "react-toastify";

const banks = [
  "State Bank of India (SBI)", "Punjab National Bank (PNB)", "Bank of Baroda",
  "Canara Bank", "Union Bank of India", "Indian Bank", "ICICI Bank", 
  "HDFC Bank", "Axis Bank", "Kotak Mahindra Bank", "Yes Bank", 
  "IDFC FIRST Bank", "IndusInd Bank"
];

const KycForm = () => {
  const [form, setForm] = useState({ bank: "", account: "", ifscCode: "" });
  const [files, setFiles] = useState({ aadhar: null, pan: null });
  const [urls, setUrls] = useState({ aadhar: "", pan: "" });
  const [uploading, setUploading] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const uploadFile = async (file, type) => {
    if (!file) return toast.error(`Please select ${type.toUpperCase()} file first!`);
    
    setUploading(true);
    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await fetch("/apiv1/worker/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      
      if (res.ok && data.success) {
        setUrls(prev => ({ ...prev, [type]: data.imageUrl }));
        toast.success(`${type.toUpperCase()} uploaded successfully!`);
      } else {
        toast.error(data.message || `Failed to upload ${type}`);
      }
    } catch (err) {
      toast.error(`Error uploading ${type}`);
    } finally {
      setUploading(false);
    }
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files?.[0]) setFiles(prev => ({ ...prev, [name]: files[0] }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!urls.aadhar || !urls.pan || !form.bank || !form.account || !form.ifscCode) {
      return toast.error("Please fill all required details!");
    }

    setSubmitting(true);
    const payload = {
      adhar_image: urls.aadhar,
      pan_image: urls.pan,
      bank_name: form.bank,
      account_number: form.account,
      ifsc_code: form.ifscCode,
    };

    try {
      const res = await fetch("/api/v1/worker/submitkyc", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        credentials: "include",
      });
      const data = await res.json();
console.log(data)
      if (res.ok && data.success) {
        toast.success("KYC submitted successfully!");
        // Reset form
        setForm({ bank: "", account: "", ifscCode: "" });
        setFiles({ aadhar: null, pan: null });
        setUrls({ aadhar: "", pan: "" });
      } else {
        toast.error(data.message || "Failed to submit KYC!");
      }
    } catch (err) {
      toast.error("Something went wrong!");
    } finally {
      setSubmitting(false);
    }
  };

  // Show loader for both uploading and submitting
  const isLoading = uploading || submitting;

  return (
    <>
      {/* Minimal Blur Overlay Loader */}
      {isLoading && (
        <div className="fixed inset-0 backdrop-blur-[2px] flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500 mb-3"></div>
            <p className="text-base font-medium text-gray-700">
              {uploading ? "Uploading file..." : "Submitting KYC..."}
            </p>
          </div>
        </div>
      )}

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-50 p-6">
        <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
            🧹 Cleaning Services KYC
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* File Upload Section */}
            {["aadhar", "pan"].map((type) => (
              <div key={type} className="space-y-2">
                <label className="font-medium text-gray-700 capitalize">
                  Upload {type === "aadhar" ? "Aadhaar" : "PAN"}
                </label>
                <input
                  type="file"
                  name={type}
                  accept="image/*,.pdf"
                  onChange={handleFileChange}
                  disabled={isLoading}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <button
                  type="button"
                  onClick={() => uploadFile(files[type], type)}
                  disabled={isLoading}
                  className={`w-full py-2 rounded-lg text-white transition ${
                    type === "aadhar" ? "bg-blue-500" : "bg-green-500"
                  } hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  Upload {type === "aadhar" ? "Aadhaar" : "PAN"}
                </button>
                {urls[type] && <p className="text-xs text-green-600">✓ Uploaded successfully</p>}
              </div>
            ))}

            {/* Form Fields */}
            <div>
              <label className="font-medium text-gray-700 mb-2 block">Select Bank</label>
              <select
                name="bank"
                value={form.bank}
                onChange={handleChange}
                disabled={isLoading}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <option value="">--Select Bank--</option>
                {banks.map((bank, i) => (
                  <option key={i} value={bank}>{bank}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="font-medium text-gray-700 mb-2 block">Account Number</label>
              <input
                type="text"
                name="account"
                placeholder="1234567890"
                value={form.account}
                onChange={handleChange}
                disabled={isLoading}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>

            <div>
              <label className="font-medium text-gray-700 mb-2 block">IFSC Code</label>
              <input
                type="text"
                name="ifscCode"
                placeholder="e.g., SBIN0001234"
                value={form.ifscCode}
                onChange={handleChange}
                disabled={isLoading}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold py-3 rounded-lg shadow-md hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Submit KYC
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default KycForm;
