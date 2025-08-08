import './App.css';
import LandingPage from './Pages/landingPage';

// About 
import AboutAppinventiv from './Pages/About/AboutAppinventiv';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
   
  <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<AboutAppinventiv />} />
    </Routes>
  </Router>
    
    </>
  );
}

export default App;
