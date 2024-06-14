import React from "react";

function LandingSite() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-2xl text-center">
        <h1 className="text-3xl font-semibold mb-4">Welcome to SURE Briefing</h1>
        <p className="text-gray-700 mb-4">
          SURE Briefing generates a daily newspaper/briefing using state-of-the-art AI. This is an active project. Please send any feedback or suggestions to
          <a href="mailto:info@simonsure.com" className="text-blue-500 underline ml-1">info@simonsure.com</a>.
        </p>
        <p className="text-gray-700 mb-4">
          Please sign up to receive the daily briefing via email.
        </p>
      </div>
    </div>
  );
}

export default LandingSite;