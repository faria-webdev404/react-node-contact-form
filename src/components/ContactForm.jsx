import React, { useState } from 'react';
import pic from "../assets/images/pic.png";

const ContactForm = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setStatus("⚠️ Please fill out all fields.");
      return;
    }
    setTimeout(() => {
      setStatus("✅ Submitted successfully!");
      setFormData({ email: '', password: '' });
    }, 1000);
  };

  return (
    <div className="min-h-screen  flex items-center justify-center bg-gradient-to-r from-white to-teal-100 px-4 py-8">
      <div className="flex flex-col md:flex-row max-w-4xl w-full bg-white shadow-xl rounded-xl overflow-hidden">

        {/* Left: Login Form */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-center">
          <div className="mb-6 border-b-4 border-gray-100">
            <button className="text-teal-600 text-2xl md:text-3xl font-semibold pb-2 border-b-2 border-teal-500">
              Login
            </button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="email"
              name="email"
              placeholder="Email or phone number"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-b-2 border-gray-300 focus:border-teal-500 outline-none py-3 px-3 rounded-md shadow-sm transition duration-200"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border-b-2 border-gray-300 focus:border-teal-500 outline-none py-3 px-3 rounded-md shadow-sm transition duration-200"
            />
            <div className="text-sm text-left text-gray-600">
              <a href="#" className="text-teal-500 hover:underline">
                Forgot your password?
              </a>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-teal-500 text-white px-8 py-3 rounded-md shadow-md hover:bg-teal-600 transition"
              >
                Submit
              </button>
            </div>
          </form>
          {status && (
            <p className={`mt-4 text-sm ${status.includes('success') ? 'text-green-500' : 'text-red-500'}`}>
              {status}
            </p>
          )}
        </div>

        {/* Right: Image */}
        <div className="w-full md:w-1/2 bg-gradient-to-br from-teal-200 to-teal-400 flex items-center justify-center p-6">
          <img src={pic} alt="Illustration" className="max-w-xs sm:max-w-sm w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
