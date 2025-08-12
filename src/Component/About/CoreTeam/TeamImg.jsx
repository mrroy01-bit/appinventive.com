import React from 'react';
import img1 from '../../../assest/CoreTeam/saurabh-singh.webp';
import img2 from '../../../assest/CoreTeam/sudeep.webp';
import img3 from '../../../assest/CoreTeam/prateek1.webp';
import img4 from '../../../assest/CoreTeam/peeyush.webp';
import img5 from '../../../assest/CoreTeam/dileep.webp';
import img6 from '../../../assest/CoreTeam/nitin.webp';
import img7 from '../../../assest/CoreTeam/lee-ranchod.webp';
import img8 from '../../../assest/CoreTeam/amardeep.webp';
import img9 from '../../../assest/CoreTeam/suyash.webp';
import img10 from '../../../assest/CoreTeam/avinash.webp';
import img11 from '../../../assest/CoreTeam/rajat.webp';
import img12 from '../../../assest/CoreTeam/apeksha.webp';
import img13 from '../../../assest/CoreTeam/chirag.webp';
import img14 from '../../../assest/CoreTeam/Ayush-img.webp';
import img15 from '../../../assest/CoreTeam/kamal-new.webp';
import img16 from '../../../assest/CoreTeam/nayan-sharma-new.webp';
import img17 from '../../../assest/CoreTeam/kushank-bhanot.webp';
import img18 from '../../../assest/CoreTeam/aparna.webp';


const TeamImg = () => {
  const teamMembers = [
    { name: 'Saurabh Singh', title: 'CEO & DIRECTOR' },
    { name: 'Sudeep Srivastava', title: 'DIRECTOR & CO-FOUNDER' },
    { name: 'Prateek Saxena', title: 'DIRECTOR & CO-FOUNDER' },
    { name: 'Peeyush Singh', title: 'DIRECTOR & CO-FOUNDER' },
    { name: 'Dileep Gupta', title: 'DIRECTOR & CO-FOUNDER' },
    { name: 'Nitin Soni', title: 'SVP - Sales' },
    { name: 'Lee Ranchod', title: 'Non Executive Director' },
    { name: 'Amardeep Rawat', title: 'VP - Technology' },
    { name: 'Suyash Saxena', title: 'VP - Delivery' },
    { name: 'Avinash Sharma', title: 'VP - Delivery' },
    { name: 'Rajat Singh', title: 'VP - DELIVERY' },
    { name: 'Apeksha Mehta', title: 'VP - TECHNOLOGY' },
    { name: 'Chirag Bharadwaj', title: 'VP - Technology' },
    { name: 'Ayush Gupta', title: 'VP - Government Relations' },
    { name: 'Kamaldeep Thakur', title: 'VP - Chandigarh Operations' },
    { name: 'Nayan Sharma', title: 'VP - Digital Transformation & Technology' },
    { name: 'Kushank Bhanot', title: 'AVP - Sales' },
    { name: 'Aparna Kaushik', title: 'Head of Marketing' }
  ];


  const placeholderImage = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18];
  
  // Default fallback image in case of loading errors
  const fallbackImage = "https://via.placeholder.com/300x300.png?text=Team+Member";
  
  const handleImageError = (e) => {
    e.target.src = fallbackImage;
  };

  return (
    <section className="py-12 mt-10 bg-white">
      <div className="max-w-7xl mx-10 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Our Core Team Leaders</h2>
        <p className="text-lg text-gray-500 mb-8">
          Meet an exceptional team of technology advisors, growth facilitators, <br /> and subject matter experts with proven experience
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                className="w-full rounded-md shadow-lg aspect-square object-cover"
                src={placeholderImage[index]}
                alt={member.name}
                onError={handleImageError}
              />
              <div className="text-center mt-4">
                <p className="text-md font-semibold text-gray-900">{member.name}</p>
                <p className="text-sm text-gray-600">{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default TeamImg;