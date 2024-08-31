import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Home";
import MentorSessionTracking from "./pages/MentorSessionTracking";
import SessionsPage from './pages/Sessions';


function App() {
  return (

      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/MentorSessionTracking" element={<MentorSessionTracking />} />
      <Route path="/SessionsPage" element={<SessionsPage />} />
      </Routes>
      </BrowserRouter>

  );
}

export default App;

