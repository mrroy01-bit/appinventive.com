import React from 'react';

// --- DUMMY DATA ---
// In a real application, this data would come from a CMS or API.

const tableOfContentsLinks = [
  { title: "Why Leverage Mobile App Development?", id: "why-leverage-apps" },
  { title: "Provide More Value to Customers", id: "more-value" },
  { title: "Build a Stronger Brand", id: "stronger-brand" },
  { title: "Increase Customer Engagement", id: "increase-engagement" },
  { title: "The Roadmap to Successful Development", id: "roadmap" },
];

const keyTakeawaysData = [
  "By 2026, mobile app downloads are expected to surpass 180 billion.",
  "Mobile apps generate more than just engagement—they enable hyper-personalized experiences using AI.",
  "Statista projects mobile app revenue to hit $781.7 billion by 2029, driven by in-app purchases and subscriptions.",
  "Developing a mobile app is about building a direct, scalable, and powerful communication channel with your customers.",
];

const relatedGuidesData = [
    {
      category: 'APPRENTIV GUIDE',
      title: 'Software Product Development – Steps and Methodologies',
      description: 'Creating a product that can gain instant traction in the market is seldom a...',
      author: 'Sudeep Srivastava',
      date: '24 Jun 2022',
      imageUrl: 'https://images.unsplash.com/photo-1516116216624-53e697320f64?q=80&w=2070&auto=format&fit=crop'
    },
    {
      category: 'APPRENTIV GUIDE',
      title: 'Blockchain App Development Cost: A Comprehensive Guide 2025',
      description: 'The well-intentioned shift to the decentralized universe, also known as Web 3.0, has...',
      author: 'Sudeep Srivastava',
      date: '20 Dec 2021',
      imageUrl: 'https://images.unsplash.com/photo-1642104792697-752b99473456?q=80&w=2070&auto=format&fit=crop'
    },
    {
      category: 'APPRENTIV GUIDE',
      title: 'How to Create a Social Media App? A Comprehensive Guide 2025',
      description: 'Key takeaways: Social media usage continues to soar, with around 6.05 billion users...',
      author: 'Prateek Saxena',
      date: '26 May 2022',
      imageUrl: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop'
    }
];


// --- REUSABLE COMPONENTS (for this page) ---

const PostBanner = () => (
  <section className="bg-red-500 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="md:w-3/5">
          <p className="text-sm font-medium text-red-100">Home / Guides</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mt-4 leading-tight">
            Mobile App Development Explained: The Ultimate Step-by-Step Guide
          </h1>
          <p className="mt-8 text-red-100">Saurabh Singh  •  August 6, 2025</p>
        </div>
        <div className="md:w-2/5 flex justify-center">
            {/* You can replace this with an actual SVG illustration */}
            <div className="w-64 h-64 bg-red-400/50 rounded-full flex items-center justify-center">
                 <svg className="w-32 h-32 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            </div>
        </div>
      </div>
    </div>
  </section>
);

const TableOfContents = ({ links }) => (
    <aside className="hidden lg:block sticky top-24 h-fit">
        <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500">Table Of Content</h3>
        <ul className="mt-4 space-y-2">
            {links.map(link => (
                <li key={link.id}>
                    <a 
                        href={`#${link.id}`} 
                        className="block text-sm text-gray-600 hover:text-blue-600 transition-colors border-l-2 border-transparent hover:border-blue-600 pl-3"
                    >
                        {link.title}
                    </a>
                </li>
            ))}
        </ul>
        <div className="mt-6 border-t pt-4">
             <h4 className="text-xs font-semibold text-gray-800">Share this article</h4>
             {/* Add social icons here */}
        </div>
    </aside>
);

const RightSidebar = ({ takeaways }) => (
    <aside className="hidden lg:block sticky top-24 h-fit space-y-6">
        {/* Key Takeaways Card */}
        <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="font-bold text-lg text-gray-800">Key takeaways:</h3>
            <ul className="mt-4 space-y-3 list-disc list-inside text-sm text-gray-700">
                {takeaways.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
        
        {/* Contact Form Card */}
        <div className="bg-gray-800 text-white p-6 rounded-lg">
            <h3 className="font-bold text-lg">Let's Build Your App Together!</h3>
            <form className="mt-4 space-y-4 text-sm">
                <input type="text" placeholder="Full Name" className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 focus:ring-blue-500 focus:border-blue-500" />
                <input type="email" placeholder="Email Address*" className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 focus:ring-blue-500 focus:border-blue-500" />
                <textarea placeholder="Your Message" rows="3" className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 focus:ring-blue-500 focus:border-blue-500"></textarea>
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 font-bold py-2 rounded transition-colors">Submit</button>
                <p className="text-xs text-gray-400 text-center">Your idea is 100% protected by our Non Disclosure Agreement.</p>
            </form>
        </div>
    </aside>
);

const CallToActionBlock = () => (
    <div className="my-12 bg-red-500 rounded-xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
            <h3 className="text-2xl font-bold">Mobile apps are fueling $2.2 trillion in revenue growth this decade.</h3>
            <p className="mt-1 text-red-100">Don't let your business miss out on this momentum</p>
        </div>
        <a href="#" className="flex-shrink-0 bg-white text-red-500 font-bold py-3 px-6 rounded-lg hover:bg-red-50 transition-colors">
            [Connect With Experts]
        </a>
    </div>
);

const ArticleBody = () => (
    // The `prose` class from @tailwindcss/typography is perfect for this
    <article className="prose lg:prose-lg max-w-none">
        <p>This surge is powered by growing smartphone adoption, deeper user engagement, and the widespread embrace of mobile-first solutions across industries like healthcare, fintech, entertainment, and retail.</p>
        <p>Again, <a href="#">Statista reported</a> that in 2026, consumers are projected to download 143 billion mobile apps from the Google Play Store and approximately 38 billion apps from the Apple App Store. Furthermore, the total revenue generated by mobile apps is also expected to reach $781.70 billion by 2029, pointing to a rapidly expanding market.</p>
        
        <CallToActionBlock />
        
        <h2 id="why-leverage-apps">Why Should Businesses Leverage Mobile Application Development: A Quick Glimpse Into Multifaceted Benefits</h2>
        <p>Simply put, the unprecedented surge in app downloads and the expected revenue to be generated by the apps signifies that now is the right moment to bring your digital vision to life and capture the momentum of this digital wave.</p>
        
        <h3 id="more-value">Provide More Value to Customers</h3>
        <p>From exploring various app types and understanding their benefits to the underlying development process and overall costs, this mobile app development guide will help you in navigating the journey of bringing your app idea to life.</p>
        
        <h3 id="stronger-brand">Build a Stronger Brand</h3>
        <p>Fast forward to today, and that vision has been vastly outpaced. According to data.ai's Mobile App Market Forecast 2030, the mobile app economy—spanning iOS, Google Play, and third-party platforms is now on track to generate a staggering $2.2 trillion in global revenue between 2021 and 2030.</p>
        
        <h3 id="increase-engagement">Achieve Increased Customer Engagement Level</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        
        <h2 id="roadmap">The Roadmap to Successful Mobile App Development Process</h2>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </article>
);


const RelatedGuides = ({ guides }) => (
    <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-10">Read More Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {guides.map((guide, index) => (
                    <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group border border-gray-200">
                        <div className="w-full h-48 bg-blue-100 flex items-center justify-center">
                            <img src={guide.imageUrl} alt={guide.title} className="w-full h-full object-cover"/>
                        </div>
                        <div className="p-6">
                            <p className="text-xs font-semibold text-gray-500 uppercase">{guide.category}</p>
                            <h3 className="mt-2 text-md font-bold text-gray-800 group-hover:text-blue-700 transition-colors">
                                <a href="#">{guide.title}</a>
                            </h3>
                            <p className="mt-4 text-xs text-gray-400">{guide.author} · {guide.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const NewsletterSubscribe = () => (
    <section className="bg-blue-600">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div className="md:w-1/2 text-white text-center md:text-left">
                    <p className="font-bold uppercase tracking-wider">Subscribe Our Newsletter</p>
                    <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Get stories in your inbox twice a month.</h2>
                </div>
                <div className="w-full md:w-1/2">
                    <form className="flex">
                        <input type="email" placeholder="Your email address" className="w-full rounded-l-md border-0 px-4 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500"/>
                        <button type="submit" className="bg-red-500 hover:bg-red-600 text-white font-bold px-6 py-3 rounded-r-md transition-colors">Subscribe</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
);


// --- MAIN PAGE COMPONENT ---
export default function BlogPostPage() {
  return (
    <div className="bg-white">
      {/* <Header /> This would be your site's main navigation */}
      
      <main>
        <PostBanner />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8">
                
                {/* Left Column: Table of Contents */}
                <div className="lg:col-span-3">
                    <TableOfContents links={tableOfContentsLinks} />
                </div>
                
                {/* Center Column: Main Article Content */}
                <div className="lg:col-span-6">
                    <ArticleBody />
                </div>
                
                {/* Right Column: Key Takeaways & Contact Form */}
                <div className="lg:col-span-3 mt-12 lg:mt-0">
                    <RightSidebar takeaways={keyTakeawaysData} />
                </div>

            </div>
        </div>

        <RelatedGuides guides={relatedGuidesData} />
        <NewsletterSubscribe />
      </main>

      {/* <Footer /> This would be your site's footer */}
    </div>
  )
}