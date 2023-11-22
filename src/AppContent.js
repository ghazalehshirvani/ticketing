// AppContent.js
import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './scenes/api/AuthProvider';
import Login from './scenes/Login';
import Dashboard from './scenes/dashboard';
import Team from './scenes/team';
import Contacts from './scenes/contacts';
import Calendar from './scenes/calendar/calendar';
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";

const AppContent = () => {
  //const { token } = useAuth();
  const token = localStorage.getItem('authToken');

  return (
    <Routes>
      <Route
        path="/login"
        // Redirect to Dashboard if the user is already logged in
        //element={token ? <Navigate to="/dashboard" /> : <Login />}
        element={<Login/>}
      />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/team" element={<Team />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/form" element={<Form />} />
      <Route path="/bar" element={<Bar />} />
      <Route path="/pie" element={<Pie />} />
      <Route path="/line" element={<Line />} />
      <Route path="/faq" element={<FAQ />} />
      {/* Add more routes as needed */}
    </Routes>
  );
};

export default AppContent;
