import React, { useReducer } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Booking from "./Booking";
import ConfirmedBooking from "./ConfirmedBooking";
import Header from "./Header";

const Main = () => {
  // Random number generator for available times
  const seededRandom = (seed) => {
    const m = 2**35 - 31;
    const a = 185852;
    let s = seed % m;
    return () => (s = s * a % m) / m;
  }

  const fetchAPI = (date) => {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
      if(random() < 0.5) result.push(i + ':00');
      if(random() < 0.5) result.push(i + ':30');
    }
    return result;
  };

  const submitAPI = (formData) => true;

  // Reducer for managing available times
  const initialState = { availableTimes: fetchAPI(new Date()) };
  const [state, dispatch] = useReducer(updateTimes, initialState);

  function updateTimes(state, date) {
    return { availableTimes: fetchAPI(new Date(date)) };
  }

  const navigate = useNavigate();

  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      navigate("/confirmed");
    }
  };

  return (
    <main className="min-h-screen">
      <Routes>
        <Route path="/" element={<Header />} />
        <Route 
          path="/booking" 
          element={
            <div className="bg-gray-50">
              <Booking 
                availableTimes={state} 
                dispatch={dispatch} 
                submitForm={submitForm}
              />
            </div>
          } 
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </main>
  );
};

export default Main;