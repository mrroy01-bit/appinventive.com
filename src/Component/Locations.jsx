import React from 'react';
import { MessageSquare } from 'lucide-react';
import SvgIndia from '../assest/Locations/hq-india.svg';
import SvgUsa from '../assest/Locations/hq-usa.svg';
import SvgAustralia from '../assest/Locations/hq-aus-new.svg';
import SvgUk from '../assest/Locations/hq-uk.svg';
import SvgUae from '../assest/Locations/hq-uae.svg';
import SvgCanada from '../assest/Locations/hq-canada.svg';
import SvgLogo from '../assest/Locations/app-wht-logo-new.svg';




// --- Data for Locations (UPDATED) ---
const locationsData = [
    {
        name: 'INDIA',
        address: 'B-25, Sector-58, Noida - 201301, Delhi - NCR, India',
        Icon: SvgIndia,
    },
    {
        name: 'USA',
        address: '79, Madison Ave, Manhattan, NY 10001, USA',
        Icon: SvgUsa,
    },
    {
        name: 'Australia',
        address: 'Appinventiv Australia, East Brisbane QLD 4169, Australia',
        Icon: SvgAustralia,
    },
    {
        name: 'UK',
        address: '3rd Floor, 86-90 Paul Street EC2A 4NE London, UK',
        Icon: SvgUk,
    },
    {
        name: 'UAE',
        address: 'Tiger Al Yarmook Building, 13th floor B-Block Al Nahda St - Sharjah',
        Icon: SvgUae,
    },
    {
        name: 'CANADA',
        address: 'Suite 3810, Bankers Hall West, 888 - 3rd Street Sw Calgary Alberta',
        Icon: SvgCanada,
    },
];

// --- Main Component ---
export default function App() {
  return (
    <div className="bg-black text-white font-sans antialiased relative">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header Section */}
        <header className="flex flex-col sm:flex-row justify-between items-center mb-12">
          {/* Logo */}
          <div className="flex items-center space-x-2 mb-6 sm:mb-0">
            <img src={SvgLogo} alt="" />
          </div>

          {/* Clutch Badge */}
          <div className="border border-blue-400/50 rounded-lg p-3 flex items-center space-x-3 bg-gray-900/50">
            <div className="bg-white rounded-full p-1">
                <img src="https://clutch.co/img/clutch-logo-blue.svg" alt="Clutch Logo" className="w-6 h-6"/>
            </div>
            <span className="text-sm text-gray-300">Most trusted Mobile App Comsultancy Company on Clutch</span>
          </div>
        </header>

        <main>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-10 text-center">
                {locationsData.map((location) => (
                    <div key={location.name} className="flex flex-col items-center text-gray-600 hover:text-gray-300">
                        <img src={location.Icon} alt={`${location.name} icon`} className="w-full h-24 mb-4" />
                        <h3 className="font-bold text-lg mb-2 text-gray-500  hover:text-gray-300 uppercase">{location.name}</h3>
                        <p className="text-xs text-gray-500 hover:text-gray-300 leading-relaxed whitespace-pre-line transition-colors">{location.address}</p>
                    </div>
                ))}
            </div>
        </main>
        </div>
      <button className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 transition-colors text-white p-4 rounded-full shadow-lg z-10">
        <MessageSquare size={24} />
      </button>
    </div>
  );
}
