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
import Portfolio from './Pages/Service/Portfolio';
import PortfolioVideos  from './Pages/Service/portfolioVideos'; 
import LogoDesign from './Pages/Service/LogoDesign';
import FlyerDesignPage from './Pages/Service/FlyerDesignPage';
import FlexPrintingPage from './Pages/Service/FlexPrintingPage';
import BannerPrintingPage from './Pages/Service/BannerPrintingPage';
import SeoServices from './Pages/Service/SeoServices';
import WebsiteAuditAnalysis from './Pages/Service/WebsiteAuditAnalysis';
import TechnicalSEOPage from './Pages/Service/TechnicalSEOPage';

import Adidas from './Pages/PortFolio/Adidas';
import IKEA from './Pages/PortFolio/IKEA';

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
          <Route path="/services/portfolio-design" element={<Portfolio />} />
          <Route path="/services/portfolio-videos" element={<PortfolioVideos />} />
          <Route path="/services/logo-design" element={<LogoDesign />} />
          <Route path="/services/flyer-design" element={<FlyerDesignPage />} />
          <Route path="/services/flex-printing" element={<FlexPrintingPage />} />
          <Route path="/services/banner-printing" element={<BannerPrintingPage />} />
          <Route path="/services/seo" element={<SeoServices />} />
          <Route path="/services/website-audit" element={<WebsiteAuditAnalysis />} />
          <Route path="/services/technical-seo" element={<TechnicalSEOPage />} />


          {/* Portfolio */}
          <Route path="/portfolio/adidas" element={<Adidas />} />
          <Route path="/portfolio/ikea" element={<IKEA />} />
        </Routes>
      </Router>
    </SmoothScroller>
  );
}

export default App;
