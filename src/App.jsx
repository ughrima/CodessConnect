import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SessionsPage from './pages/Sessions';
import './index.css'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/sessions" element={<SessionsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
