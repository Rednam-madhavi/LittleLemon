import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const ConfirmedBooking = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md text-center">
        <div className="flex justify-center">
          <CheckCircleIcon className="h-16 w-16 text-green-500" />
        </div>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
          Booking Confirmed!
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Your reservation has been successfully booked.
        </p>
        <p className="text-sm text-gray-500">
          We've sent a confirmation to your email.
        </p>
        <div className="mt-8">
          <button
            onClick={() => window.location.href = '/'}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            Return to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmedBooking;