import React from 'react';
import Hero from "../../Component/About/ClientPortfolio/Hero.jsx";
import Tabs from "../../Component/About/ClientPortfolio/TabSystem.jsx";
import InnerFooter from "../../Component/About/ClientPortfolio/InnerFooter.jsx";
import Header from '../../Component/common/Header';
import Footer from '../../Component/common/Footer';


const ClientPortfolio = () => {
  return (
    <div>
        <Header />
      <Hero />
      <Tabs />
      <InnerFooter />
      <Footer />
    </div>
  );
}

export default ClientPortfolio;
