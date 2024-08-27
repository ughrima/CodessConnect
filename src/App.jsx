import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MentorSessionTracking from "./pages/MentorSessionTracking";
import SessionsPage from './pages/Sessions';


function App() {
  return (

      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/MentorSessionTracking" element={<MentorSessionTracking />} />
      <Route path="/SessionsPage" element={<SessionsPage />} />
      </Routes>
      </BrowserRouter>

  );
}

export default App;

