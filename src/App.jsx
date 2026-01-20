import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Destination from './pages/Destination.jsx';
import Crew from './pages/Crew.jsx';
import Technology from './pages/Technology.jsx';
import './styles.css';

function App() {
  const location = useLocation();

  // Background change logic
  useEffect(() => {
    const body = document.querySelector('body');
    body.classList.remove('background', 'background2', 'background3', 'background4');

    if (location.pathname === '/') body.classList.add('background');
    else if (location.pathname === '/destination') body.classList.add('background2');
    else if (location.pathname === '/crew') body.classList.add('background3');
    else if (location.pathname === '/technology') body.classList.add('background4');
  }, [location]);

  // Global loader cleanup
  useEffect(() => {
    const loader = document.getElementById('global-loader');
    if (loader) {
      loader.style.display = 'none';
    }
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
      </main>
    </>
  );
}

export default App;