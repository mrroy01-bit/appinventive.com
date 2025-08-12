import './App.css';
import LandingPage from './Pages/landingPage';

// About 
import AboutAppinventiv from './Pages/About/AboutAppinventiv';
import CoreTeam from './Pages/About/CoreTeam';
import SmoothScroller from './Component/common/SmoothScroller';
import WeWork from './Pages/About/weWork';
import Career from './Pages/About/Career';
import Corporate from './Pages/About/Corporate';
import ClientTestimonial from './Pages/About/ClientsTestimonial';

// Service 
import Android from './Pages/Service/Android';
import IOSAPP from './Pages/Service/IosApp';
import WebsiteDevelopment from './Pages/Service/WebsiteDevelopment';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <SmoothScroller>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutAppinventiv />} />
          <Route path="/about/core-team" element={<CoreTeam />} />
          <Route path="/about/we-work" element={<WeWork />} />
          <Route path="/about/career" element={<Career />} />
          <Route path='/about/corporate' element={<Corporate/>} />
          <Route path='/about/clients-testimonial' element={<ClientTestimonial />} />

          <Route path="/services/android-app-development" element={<Android />} />
          <Route path="/services/ios-app-development" element={<IOSAPP />} />
          <Route path="/services/website-development" element={<WebsiteDevelopment />} />
        </Routes>
      </Router>
    </SmoothScroller>
  );
}

export default App;
