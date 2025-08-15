import React from 'react';
import Header from '../../Component/common/Header';
import Testimonials from '../../Component/About/ClientsTestimonials/Testimonials';
import TestimonialCard from '../../Component/About/ClientsTestimonials/TestimonialCard';
import LogoGrid from '../../Component/About/ClientsTestimonials/LogoCard';
import StarCard from '../../Component/About/ClientsTestimonials/Star';
const ClientTestimonial = () => {
  return (
    <div>
      <Header />
      <Testimonials />
      <TestimonialCard />
      <LogoGrid />
      <StarCard />
    </div>
  );
}

export default ClientTestimonial;
