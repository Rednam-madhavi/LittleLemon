import React from "react";
import BookingForm from "./BookingForm";

const Booking = (props) => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Reserve a Table</h1>
          <p className="text-lg text-gray-600">
            Fill out the form below to book your dining experience
          </p>
        </div>
        
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <BookingForm 
            availableTimes={props.availableTimes} 
            dispatch={props.dispatch} 
            submitForm={props.submitForm}
          />
        </div>
        
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Need help? Call us at (123) 456-7890</p>
        </div>
      </div>
    </div>
  );
};

export default Booking;