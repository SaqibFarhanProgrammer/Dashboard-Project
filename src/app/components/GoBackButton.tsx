"use client";

import React from 'react';

export default function GoBackButton() {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <button
      onClick={handleGoBack}
      className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center gap-2"
    >
      <i className="ri-arrow-left-line"></i>
      Go Back
    </button>
  );
}