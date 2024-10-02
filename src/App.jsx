import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Home";
import MentorSessionTracking from "./pages/MentorSessionTracking";
import SessionsPage from './pages/Sessions';
import Opportunities from "./pages/Opportunities";


function App() {
  return (

      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/MentorSessionTracking" element={<MentorSessionTracking />} />
      <Route path="/SessionsPage" element={<SessionsPage />} />
      <Route path="/Opportunities" element={<Opportunities />} />
      </Routes>
      </BrowserRouter>

  );
}

export default App;

