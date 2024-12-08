"use client";

import { useState } from "react";

const SignupPage = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("User Email:", email);
    alert("Signed up successfully!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white-100">
      <form 
        onSubmit={handleSubmit} 
        className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg"
      >
        <h1 className="mb-4 text-2xl font-semibold text-gray-700">
          Sign Up
        </h1>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 mb-4 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-800 rounded-lg hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignupPage;

