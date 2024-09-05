import React from 'react';
import Navbar from './Components/Navbar';
import Sign from './pages/Sign';
import Home from './pages/Home';
import About from './pages/About';
import Vans from './pages/Vans';
import SignUp from './pages/SignUp';
import Footer from './Components/Footer';
import MainButton from './Components/MainButton';
import Host from './pages/Host'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Host" element={<Host />} />
          <Route path="/About" element={<About />} />
          <Route path="/Vans" element={<Vans />} />
          <Route path="/Sign" element={<Sign />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;