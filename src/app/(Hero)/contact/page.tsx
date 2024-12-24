"use client";
import React, { HtmlHTMLAttributes, useState } from "react";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle the form submission logic here (e.g., API call)
    console.log("Form Data Submitted:", formData);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4 text-white">
      <div className="max-w-xl w-full bg-gray-900 p-8 shadow-lg rounded-md">
        <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>
        {isSubmitted ? (
          <div className="text-center text-green-500 font-medium">
            Thank you for contacting us! We'll respond shortly.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 p-3 block w-full border border-gray-700 rounded-md shadow-sm bg-black text-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 p-3 block w-full border border-gray-700 rounded-md shadow-sm bg-black text-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="mt-1 p-3 block w-full border border-gray-700 rounded-md shadow-sm bg-black text-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="Write your message here"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default ContactUs;
