import React from 'react';
import { motion } from 'framer-motion';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import Delo from "../../assest/ads/dellot.webp"
import Logo from "../../assest/common/AppLogo.svg";
import { CaretDownIcon, CodeIcon, PersonIcon, GearIcon, BarChartIcon, ReaderIcon, VideoIcon, Link2Icon, PlusIcon, StarIcon, GlobeIcon, HomeIcon, ChatBubbleIcon, RocketIcon } from '@radix-ui/react-icons';

// A reusable list item component for dropdown links
const ListItem = React.forwardRef(({ className, children, title, ...props }, forwardedRef) => (
  <li className="list-none">
    <NavigationMenu.Link asChild>
      <a
        ref={forwardedRef}
        className={`flex flex-col w-full h-full p-3 no-underline transition-colors duration-150 rounded-md outline-none select-none hover:bg-neutral-100 focus:shadow-md ${className || ''}`}
        {...props}
      >
        <p className="font-medium leading-tight text-neutral-900">{title}</p>
        {children && <p className="mt-1 text-sm leading-snug text-neutral-600">{children}</p>}
      </a>
    </NavigationMenu.Link>
  </li>
));
ListItem.displayName = "ListItem";

// Main App Component
export default function App() {
  return (
    <Header />

  );
}

// Header Component
const Header = () => {

    const menuItems = [
        {
            name: "About",
            content: (
                <div className="grid w-[500px] max-w-[90vw] grid-cols-[1fr,1fr] gap-4 p-4 overflow-auto">
                    <div className="flex flex-col">
                        <ul className="flex flex-col space-y-1 list-none p-0 m-0">
                            <ListItem href="/about" title="About Appinventiv" />
                            <ListItem href="#" title="Our Core Team" />
                            <ListItem href="#" title="How We Work and Function" />
                            <ListItem href="#" title="Client Portfolio" />
                            <ListItem href="#" title="Client Testimonials" />
                            <ListItem href="#" title="Corporate Social Responsibility" />
                            <ListItem href="#" title="Start Your Career With Us" />
                        </ul>
                    </div>
                    <div className="flex flex-col h-full">
                         <h3 className="mb-2 text-sm font-medium text-neutral-500">Featured Insight</h3>
                         <div className="flex flex-col justify-between h-full p-4 transition-colors duration-150 bg-white border border-neutral-200 rounded-lg hover:bg-neutral-50">
                            <img src={Delo} alt="Featured Insight" className="w-full rounded-md"/>
                            <h4 className="mt-2 font-semibold text-neutral-800">Appinventiv Wins Big: Consecutive Deloitte Tech Fast 50 Awards</h4>
                            <a href="#" className="mt-2 text-sm font-semibold text-blue-600 hover:underline">Read Full Article →</a>
                         </div>
                    </div>
                </div>
            )
        },
        {
            name: "Services",
            content: (
                <div className="w-[650px] max-w-[90vw] p-4 overflow-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <h3 className="flex items-center mb-3 text-sm font-medium text-neutral-500"><CodeIcon className="w-4 h-4 mr-2"/> Product Development & Engineering</h3>
                            <ul className="space-y-2 list-none p-0 m-0">
                                <ListItem href="#" title="Product Design" className="p-2"/>
                                <ListItem href="#" title="Application Development" className="p-2"/>
                                <ListItem href="#" title="Software Development" className="p-2"/>
                                <ListItem href="#" title="QA and Testing" className="p-2"/>
                                <ListItem href="#" title="DevOps" className="p-2"/>
                                <ListItem href="#" title="Product Management" className="p-2"/>
                            </ul>
                        </div>
                        <div>
                            <h3 className="flex items-center mb-3 text-sm font-medium text-neutral-500"><GearIcon className="w-4 h-4 mr-2"/> Digital Transformation</h3>
                             <ul className="space-y-2 list-none p-0 m-0">
                                <ListItem href="#" title="Legacy Application Modernization" className="p-2"/>
                                <ListItem href="#" title="Cloud" className="p-2"/>
                                <ListItem href="#" title="Blockchain" className="p-2"/>
                                <ListItem href="#" title="Cybersecurity" className="p-2"/>
                                <ListItem href="#" title="IoT" className="p-2"/>
                                <ListItem href="#" title="AR/VR" className="p-2"/>
                            </ul>
                        </div>
                        <div>
                            <h3 className="flex items-center mb-3 text-sm font-medium text-neutral-500"><PersonIcon className="w-4 h-4 mr-2"/> Consulting Services</h3>
                             <ul className="space-y-2 list-none p-0 m-0">
                                <ListItem href="#" title="IT Consulting" className="p-2"/>
                                <ListItem href="#" title="Software Consulting" className="p-2"/>
                            </ul>
                             <h3 className="flex items-center mt-6 mb-3 text-sm font-medium text-neutral-500"><BarChartIcon className="w-4 h-4 mr-2"/> Data Services</h3>
                             <ul className="space-y-2 list-none p-0 m-0">
                                <ListItem href="#" title="Big Data" className="p-2"/>
                                <ListItem href="#" title="Data Analytics" className="p-2"/>
                            </ul>
                        </div>
                    </div>
                    <div className="p-4 mt-6 bg-yellow-100 rounded-lg">
                        <p className="text-sm text-center text-yellow-900">
                            Didn't find what you're looking for? Let us know your needs, and we'll tailor a solution just for you.
                            <a href="#" className="ml-4 font-semibold text-blue-600 rounded-full hover:underline">Schedule Free Consultations</a>
                        </p>
                    </div>
                </div>
            )
        },
        {
            name: "Industries",
            content: (
                 <div className="w-[550px] max-w-[90vw] p-4 overflow-auto">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-2 list-none p-0 m-0">
                        <ListItem href="#" title="Healthcare"><StarIcon className="absolute w-4 h-4 top-3 left-3 text-neutral-400"/></ListItem>
                        <ListItem href="#" title="FinTech"><GlobeIcon className="absolute w-4 h-4 top-3 left-3 text-neutral-400"/></ListItem>
                        <ListItem href="#" title="Restaurant"><HomeIcon className="absolute w-4 h-4 top-3 left-3 text-neutral-400"/></ListItem>
                        <ListItem href="#" title="Wearables"><GearIcon className="absolute w-4 h-4 top-3 left-3 text-neutral-400"/></ListItem>
                        <ListItem href="#" title="Banking"><BarChartIcon className="absolute w-4 h-4 top-3 left-3 text-neutral-400"/></ListItem>
                        <ListItem href="#" title="Travel"><RocketIcon className="absolute w-4 h-4 top-3 left-3 text-neutral-400"/></ListItem>
                        <ListItem href="#" title="Fitness"><StarIcon className="absolute w-4 h-4 top-3 left-3 text-neutral-400"/></ListItem>
                        <ListItem href="#" title="Insurance"><PersonIcon className="absolute w-4 h-4 top-3 left-3 text-neutral-400"/></ListItem>
                        <ListItem href="#" title="Real Estate"><HomeIcon className="absolute w-4 h-4 top-3 left-3 text-neutral-400"/></ListItem>
                    </ul>
                     <div className="p-4 mt-6 bg-yellow-100 rounded-lg">
                        <p className="text-sm text-center text-yellow-900">
                            Didn't find what you're looking for? Let us know your needs, and we'll tailor a solution just for you.
                            <a href="#" className="ml-4 font-semibold text-blue-600 rounded-full hover:underline">Schedule Free Consultations</a>
                        </p>
                    </div>
                </div>
            )
        },
        {
            name: "Portfolio",
            content: (
                <div className="grid w-[600px] max-w-[90vw] grid-cols-[2fr,1fr] gap-4 p-4 overflow-auto">
                    <div>
                        <ul className="grid grid-cols-2 gap-4 list-none p-0 m-0">
                            <ListItem href="#" title="Adidas" className="h-32">A leading digital platform to offer engaging shopping experience.</ListItem>
                            <ListItem href="#" title="KFC" className="h-32">A mobile app to digitise & expand KFC's digital footprint.</ListItem>
                            <ListItem href="#" title="Jobget" className="h-32">The MIT innovation award-winning app.</ListItem>
                            <ListItem href="#" title="IKEA" className="h-32">A transforming ERP solution for the world's largest furniture retailer.</ListItem>
                        </ul>
                    </div>
                    <div className="flex flex-col h-full">
                         <h3 className="mb-2 text-sm font-medium text-neutral-500">Featured Insight</h3>
                         <div className="flex flex-col justify-between h-full p-4 transition-colors duration-150 bg-white border border-neutral-200 rounded-lg hover:bg-neutral-50">
                            <img src={Delo} alt="Featured Insight" className="w-full rounded-md"/>
                            <h4 className="mt-2 font-semibold text-neutral-800">Appinventiv Wins Big: Consecutive Deloitte Tech Fast 50 Awards</h4>
                            <a href="#" className="mt-2 text-sm font-semibold text-blue-600 hover:underline">Read Full Article →</a>
                         </div>
                    </div>
                </div>
            )
        },
        {
            name: "Resources",
            content: (
                 <div className="grid w-[700px] max-w-[90vw] grid-cols-[1fr,2fr,1.5fr] gap-6 p-4 overflow-auto">
                    <div>
                        <h3 className="mb-3 text-sm font-medium text-neutral-500">Discover</h3>
                        <div className="p-4 bg-black rounded-lg">
                            <p className="text-white">Discover how our expertise can solve your most complex business challenges.</p>
                            <button className="w-full px-4 py-2 mt-4 text-sm font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700">Talk to Experts</button>
                        </div>
                    </div>
                    <div>
                        <h3 className="mb-3 text-sm font-medium text-neutral-500">Recommended Blogs</h3>
                        <ul className="space-y-2 list-none p-0 m-0">
                           <ListItem href="#" title="How Much Does It Cost to Build a Safety Observation App?" className="p-2"/>
                           <ListItem href="#" title="Staff Augmentation vs In-House Hiring: Which Is the Better Model?" className="p-2"/>
                           <ListItem href="#" title="10 Ways Generative AI is Transforming the eCommerce Industry" className="p-2"/>
                        </ul>
                    </div>
                    <div className="flex flex-col h-full">
                         <h3 className="mb-2 text-sm font-medium text-neutral-500">Featured Insight</h3>
                         <div className="flex flex-col justify-between h-full p-4 transition-colors duration-150 bg-white border border-neutral-200 rounded-lg hover:bg-neutral-50">
                            <img src={Delo} alt="Featured Insight" className="w-full rounded-md"/>
                            <h4 className="mt-2 font-semibold text-neutral-800">Appinventiv Wins Big: Consecutive Deloitte Tech Fast 50 Awards</h4>
                            <a href="#" className="mt-2 text-sm font-semibold text-blue-600 hover:underline">Read Full Article →</a>
                         </div>
                    </div>
                 </div>
            )
        },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black shadow-md">
            <NavigationMenu.Root className="relative z-10 flex items-center justify-between max-w-6xl px-4 py-3 mx-auto">
                <NavigationMenu.List className="flex items-center gap-2">
                    {/* Logo */}
                    <NavigationMenu.Item>
                       <NavigationMenu.Link href="/" className="flex items-center gap-2 text-xl font-bold text-white">
                           <img src={Logo} alt="Appinventiv Logo" className="w-full h-10 text-blue-500" />
                       </NavigationMenu.Link>
                    </NavigationMenu.Item>
                </NavigationMenu.List>

                <NavigationMenu.List className="flex items-center gap-1">
                     <NavigationMenu.Item>
                       <NavigationMenu.Link href="#" className="px-3 py-2 text-sm font-medium text-white rounded-md hover:bg-neutral-800">Let's Talk AI</NavigationMenu.Link>
                    </NavigationMenu.Item>
                    {menuItems.map((item, index) => {
                        // Set dynamic alignment based on menu position and content width
                        let alignClass;
                        if (item.name === "Services" || item.name === "Industries") {
                            alignClass = "left-1/2 -translate-x-1/2"; // Center these wide menus
                        } else if (item.name === "About") {
                            alignClass = "left-0"; // Always left align About regardless of index
                        } else {
                            // Left align first items, right align last items
                            alignClass = index >= menuItems.length - 2 ? "right-0" : "left-0";
                        }
                        
                        return (
                            <NavigationMenu.Item key={item.name} className="relative">
                                <NavigationMenu.Trigger className="group flex items-center gap-1 px-3 py-2 text-sm font-medium text-white rounded-md outline-none select-none hover:bg-neutral-800 data-[state=open]:bg-neutral-800">
                                    {item.name}
                                    <CaretDownIcon className="relative transition-transform duration-200 ease-in-out top-px group-data-[state=open]:-rotate-180" aria-hidden />
                                </NavigationMenu.Trigger>
                                <NavigationMenu.Content className={`absolute top-full z-[60] ${alignClass}`}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 4, scale: 0.98 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 4, scale: 0.98 }}
                                        transition={{ duration: 0.18, ease: 'easeOut' }}
                                        style={{ maxHeight: '85vh' }}
                                        className={`mt-2 ${index >= menuItems.length - 2 ? 'origin-top-right' : 'origin-top-left'} bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-auto`}
                                    >
                                        {item.content}
                                    </motion.div>
                                </NavigationMenu.Content>
                            </NavigationMenu.Item>
                        );
                    })}
                </NavigationMenu.List>
            </NavigationMenu.Root>
        </header>
    );
};
