import React from "react";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {/* About Section */}
        <div>
          <h6 className="text-lg font-semibold text-white uppercase mb-4">
            About
          </h6>
          <ul className="space-y-2">
            <li>
              <button className="hover:text-gray-100 text-left">
                Our company
              </button>
            </li>
            <li>
              <button className="hover:text-gray-100 text-left">
                Core Team
              </button>
            </li>
            <li>
              <button className="flex items-center gap-1 hover:text-gray-100 text-left">
                Career{" "}
                <span className="bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
                  WE'RE HIRING
                </span>
              </button>
            </li>
            <li>
              <button className="hover:text-gray-100 text-left">CSR</button>
            </li>
            <li>
              <button className="hover:text-gray-100 text-left">
                How We Work
              </button>
            </li>
          </ul>
        </div>

        {/* Services Section */}
        <div>
          <h6 className="text-lg font-semibold text-white uppercase mb-4">
            Services
          </h6>
          <ul className="space-y-2">
            <li>
              <button className="hover:text-gray-100 text-left">
                iOS App Development
              </button>
            </li>
            <li>
              <button className="hover:text-gray-100 text-left">
                Android App Development
              </button>
            </li>
            <li>
              <button className="hover:text-gray-100 text-left">
                Software Development
              </button>
            </li>
            <li>
              <button className="hover:text-gray-100 text-left">
                Ideation & Design
              </button>
            </li>
            <li>
              <button className="hover:text-gray-100 text-left">
                Mobile App Dev
              </button>
            </li>
            <li>
              <button className="hover:text-gray-100 text-left">
                Research & Innovation
              </button>
            </li>
            <li>
              <button className="hover:text-gray-100 text-left">
                Digital Transformation
              </button>
            </li>
            <li>
              <button className="hover:text-gray-100 text-left">more...</button>
            </li>
          </ul>
        </div>

        {/* Technologies Section */}
        <div>
          <h6 className="text-lg font-semibold text-white uppercase mb-4">
            Technologies
          </h6>
          <ul className="space-y-2">
            <li>
              <button className="hover:text-gray-100 text-left">
                Blockchain
              </button>
            </li>
            <li>
              <button className="hover:text-gray-100 text-left">
                Artificial Intelligence
              </button>
            </li>
            <li>
              <button className="hover:text-gray-100 text-left">
                AR and VR
              </button>
            </li>
            <li>
              <button className="hover:text-gray-100 text-left">
                Cloud Computing
              </button>
            </li>
            <li>
              <button className="hover:text-gray-100 text-left">
                Internet of Things
              </button>
            </li>
            <li>
              <button className="hover:text-gray-100 text-left">
                Metaverse Development
              </button>
            </li>
            <li>
              <button className="hover:text-gray-100 text-left">
                NFT Development
              </button>
            </li>
            <li>
              <button className="hover:text-gray-100 text-left">more...</button>
            </li>
          </ul>
        </div>

        {/* Industries Section */}
        <div>
          <h6 className="text-lg font-semibold text-white uppercase mb-4">
            Industries
          </h6>
          <ul className="space-y-2">
            <li>
              <button className="hover:text-gray-100 text-left">
                Healthcare
              </button>
            </li>
            <li>
              <button className="hover:text-gray-100 text-left">
                Education
              </button>
            </li>
            <li>
              <button className="hover:text-gray-100 text-left">SaaS</button>
            </li>
            <li>
              <button className="hover:text-gray-100 text-left">Finance</button>
            </li>
            <li>
              <button className="hover:text-gray-100 text-left">
                On-Demand
              </button>
            </li>
            <li>
              <button className="hover:text-gray-100 text-left">
                eCommerce
              </button>
            </li>
            <li>
              <button className="hover:text-gray-100 text-left">
                Logistics
              </button>
            </li>
            <li>
              <button className="hover:text-gray-100 text-left">more...</button>
            </li>
          </ul>
        </div>

        {/* Portfolio Section */}
        <div>
          <h6 className="text-lg font-semibold text-white uppercase mb-4">
            Portfolio
          </h6>
          <ul className="space-y-2">
            <li>
              <button className="hover:text-gray-100 text-left">KFC</button>
            </li>
            <li>
              <button className="hover:text-gray-100 text-left">Adidas</button>
            </li>
            <li>
              <button className="hover:text-gray-100 text-left">IKEA</button>
            </li>
            <li>
              <button className="hover:text-gray-100 text-left">Hukoomi</button>
            </li>
            <li>
              <button className="hover:text-gray-100 text-left">
                Domino's
              </button>
            </li>
            <li>
              <button className="hover:text-gray-100 text-left">
                Pizza Hut
              </button>
            </li>
            <li>
              <button className="hover:text-gray-100 text-left">YouCOMM</button>
            </li>
            <li>
              <button className="hover:text-gray-100 text-left">more...</button>
            </li>
          </ul>
        </div>

        {/* Resources Section */}
        <div>
          <h6 className="text-lg font-semibold text-white uppercase mb-4">
            Resources
          </h6>
          <ul className="space-y-2">
            <li>
              <button className="hover:text-gray-100 text-left">Blog</button>
            </li>
            <li>
              <button className="hover:text-gray-100 text-left">
                Press Release
              </button>
            </li>
            <li>
              <button className="hover:text-gray-100 text-left">Guides</button>
            </li>
            <li>
              <button className="hover:text-gray-100 text-left">Ebooks</button>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-800 py-6 mt-12">
        <div className="max-w-6xl  px-4 sm:px-6 lg:px-8 flex flex-col md:flex-col justify-between  text-sm">
          <div className="mb-4 md:mb-0 flex items-center border-b border-gray-700 pb-4">
            <a
              href="https://www.dmca.com/r/p6j3m8k"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <img
                src="https://images.dmca.com/Badges/dmca_protected_16_120.png?ID=a6202d81-c868-495f-a624-14513a841966"
                alt="DMCA Protected"
                className="h-4 mr-2"
              />
            </a>
            <p className="text-gray-400 ml-2 text-xl">
              Full stack mobile (iOS, Android) and web app <br /> design and
              development agency
            </p>
          </div>
          <div className=" flex items-center justify-between mt-5 text-xl">
              <button className="hover:text-gray-100 ml-4 ">
                Statutory Legal Information
              </button>
            <div className="text-gray-400 space-y-2 md:space-y-0 md:flex items-center flex ">
              <p>
                © 2008-{new Date().getFullYear()} | Appinventiv® |{" "}
                <button className="hover:text-gray-100 ">
                  Sitemap
                </button>{" "}
                |{" "}
                <button className="hover:text-gray-100 ">
                  Privacy Policy
                </button>
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center space-x-4 text-gray-400">
              <button className="hover:text-gray-100" aria-label="Location">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12 2.163c3.204 0 5.827 2.623 5.827 5.827 0 3.181-2.596 6.792-5.827 9.999-3.211-3.207-5.827-6.82-5.827-10.001 0-3.204 2.623-5.827 5.827-5.827m0 9.215c1.759 0 3.188-1.429 3.188-3.188s-1.429-3.188-3.188-3.188-3.188 1.429-3.188 3.188 1.429 3.188 3.188 3.188"
                  />
                </svg>
              </button>
              <button className="hover:text-gray-100" aria-label="Twitter">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                  />
                </svg>
              </button>
              <button className="hover:text-gray-100" aria-label="LinkedIn">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268a1.265 1.265 0 01-1.26-1.26c0-.693.567-1.265 1.26-1.265s1.26.572 1.26 1.265c0 .693-.567 1.26-1.26 1.268zm9.5 12.268h-3v-6.769c0-1.5-1.235-2.769-2.735-2.769-1.5 0-2.765 1.269-2.765 2.769v6.769h-3v-11h3v1.793c1.127-1.703 3.106-1.703 4.233 0v-1.793h3v11z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-gray-800 text-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-700 focus:outline-none"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </footer>
  );
};

export default Footer;
