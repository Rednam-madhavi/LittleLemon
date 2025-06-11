import React from "react";
import { useState } from "react";

const BookingForm = (props) => {
  const [occasion, setOccasion] = useState("");
  const [guests, setGuests] = useState("");
  const [date, setDate] = useState("");
  const [times, setTimes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submitForm(e);
  };

  const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
  };

  return (
    <section className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <form onSubmit={handleSubmit}>
        <fieldset className="space-y-4">
          <legend className="text-2xl font-bold text-center mb-6 text-primary">
            Book a Table
          </legend>

          {/* Date Input */}
          <div className="space-y-2">
            <label htmlFor="book-date" className="block text-sm font-medium text-gray-700">
              Choose Date
            </label>
            <input
              id="book-date"
              value={date}
              onChange={(e) => handleChange(e.target.value)}
              type="date"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              required
            />
          </div>

          {/* Time Select */}
          <div className="space-y-2">
            <label htmlFor="book-time" className="block text-sm font-medium text-gray-700">
              Choose Time
            </label>
            <select
              id="book-time"
              value={times}
              onChange={(e) => setTimes(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              required
            >
              <option value="">Select a Time</option>
              {props.availableTimes.availableTimes.map((time) => (
                <option key={time}>{time}</option>
              ))}
            </select>
          </div>

          {/* Guests Input */}
          <div className="space-y-2">
            <label htmlFor="book-guests" className="block text-sm font-medium text-gray-700">
              Number of Guests
            </label>
            <input
              id="book-guests"
              min="1"
              max="10"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              type="number"
              placeholder="0"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              required
            />
          </div>

          {/* Occasion Select */}
          <div className="space-y-2">
            <label htmlFor="book-occasion" className="block text-sm font-medium text-gray-700">
              Occasion
            </label>
            <select
              id="book-occasion"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              required
            >
              <option value="">Select an Option</option>
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full px-4 py-2 bg-primary text-white font-medium rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
            >
              Make Your Reservation
            </button>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default BookingForm;