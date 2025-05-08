// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ExplorePage from './pages/ExplorePage';
import FindJobsPage from './pages/FindjobsPage';
import HireFreelancersPage from './pages/HireFreelancersPage';

const App = () => {
  return (
    <Router>
    <div>
      <Navbar />
      {/* Add your page content below */}
      <Routes>
      <Route path="/" element={<ExplorePage />} />
      <Route path="/explore" element={<ExplorePage />} />
      <Route path="/find jobs" element={<FindJobsPage />} />
      <Route path="/hire freelancers" element={<HireFreelancersPage />} />
        </Routes>
    </div>
    </Router>
  );
};

export default App;
