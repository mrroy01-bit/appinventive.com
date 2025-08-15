import React from 'react';

import Header from '../../Component/common/Header';

// --- DUMMY DATA ---
// In a real app, you would fetch this data from an API
const featuredArticleData = {
  category: 'Guides',
  title: 'Mobile App Development Explained: The Ultimate Step-by-Step Guide',
  description: 'What began as a small collection of utilities and games has now become a cornerstone of digital life, powering everything from entertainment and social interaction...',
  author: 'Saurabh Singh',
  imageUrl: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop', // Placeholder
};

const latestArticlesData = [
  {
    category: 'Artificial Intelligence',
    title: 'How Generative AI is Powering Digital Product Development',
    description: 'Key takeaways: Ranging from rapid prototyping through automated coding,...',
    author: 'Chirag Bhardwaj',
    date: '13 Aug 2025',
    imageUrl: 'https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=2070&auto=format&fit=crop', // Placeholder
  },
  {
    category: 'Artificial Intelligence',
    title: 'AI Agents in Customer Service: The Future of Seamless Customer Interactions',
    description: 'Key takeaways: AI agents are redefining the customer service experience by...',
    author: 'Chirag Bhardwaj',
    date: '12 Aug 2025',
    imageUrl: 'https://images.unsplash.com/photo-1696203437439-c1833ebd38b4?q=80&w=1932&auto=format&fit=crop', // Placeholder
  },
];

const moreArticlesData = [
  {
    category: 'App Development',
    title: 'How Much Does It Cost To Develop an App in 2025? A Detailed Guide',
    description: 'When it comes to mobile app development, a million-dollar question (sometimes literally)...',
    author: 'Saurabh Singh',
    imageUrl: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2070&auto=format&fit=crop', // Placeholder
  },
  {
    category: 'App Development',
    title: 'How to Build an Minimal Viable Product (MVP) and Raise Funding in 2025',
    description: 'Facebook, TikTok, Tinder, Uber, Instagram, Zoom, Spotify — today, all these big players...',
    author: 'Prateek Saxena',
    imageUrl: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070&auto=format&fit=crop', // Placeholder
  },
  {
    category: 'App Development',
    title: 'How Long Does It Take to Develop a Mobile App?',
    description: 'Once you have an app idea, a lot of thoughts occupy your mind - various...',
    author: 'Saurabh Singh',
    imageUrl: 'https://images.unsplash.com/photo-1533750349088-24331b33b706?q=80&w=2070&auto=format&fit=crop', // Placeholder
  },
];

const categories = [
  'Healthcare & Fitness', 'Restaurant App Development', 'React Native Development',
  'Digital Transformation', 'Data Science & Analytics', 'Android Development',
  'Fintech', 'IOT Development', 'Education', 'Cloud Computing'
];


// --- COMPONENTS ---

const Table = () => (
  <div className="bg-white/80 backdrop-blur-md mt-24  z-50  ">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <div className="flex items-center">
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">App Development</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Software Dev</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Blockchain</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Cloud</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Data Analytics</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Artificial Intelligence</a>
        </nav>
        <div className="flex items-center">
           <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          <span className="ml-2 text-gray-600 font-medium hidden lg:block">Search</span>
        </div>
      </div>
    </div>
  </div>
);

const FeaturedArticle = ({ article }) => (
  <section className="py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="bg-[#FEE2E2] rounded-2xl overflow-hidden md:grid md:grid-cols-2 md:items-center">
        <div className="p-8 md:p-12">
          <p className="text-sm font-semibold text-red-600 uppercase">{article.category}</p>
          <h1 className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            {article.title}
          </h1>
          <p className="mt-4 text-lg text-gray-600">{article.description}</p>
          <p className="mt-6 text-sm font-medium text-gray-800">{article.author}</p>
        </div>
        <div className="h-64 md:h-full">
            <img 
                src={article.imageUrl} 
                alt={article.title} 
                className="w-full h-full object-cover" 
            />
        </div>
      </div>
    </div>
  </section>
);

const LatestPostCard = ({ post }) => (
  <article className="flex flex-col md:flex-row items-center gap-6 group">
    <div className="md:w-5/12 flex-shrink-0">
      <img 
        src={post.imageUrl} 
        alt={post.title} 
        className="rounded-xl w-full h-full object-cover aspect-video md:aspect-square" 
      />
    </div>
    <div className="md:w-7/12">
      <p className="text-sm font-semibold text-blue-600">{post.category}</p>
      <h3 className="mt-1 text-xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors">
        <a href="#">{post.title}</a>
      </h3>
      <p className="mt-2 text-gray-500 line-clamp-2">{post.description}</p>
      <p className="mt-4 text-sm text-gray-400">{post.author} · {post.date}</p>
    </div>
  </article>
);

const CategoriesSidebar = ({ categories }) => (
  <aside>
    <h3 className="text-lg font-bold text-gray-800 border-b pb-2 mb-4">Categories</h3>
    <div className="flex flex-wrap gap-2">
      {categories.map((cat, index) => (
        <a href="#" key={index} className="bg-gray-100 text-gray-700 text-sm font-medium px-3 py-1.5 rounded-lg hover:bg-blue-100 hover:text-blue-700 transition-colors">
          {cat}
        </a>
      ))}
    </div>
  </aside>
);

const VerticalArticleCard = ({ article }) => (
  <article className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group">
    <div className="w-full h-48">
      <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover"/>
    </div>
    <div className="p-6">
      <p className="text-sm font-semibold text-blue-600">{article.category}</p>
      <h3 className="mt-2 text-lg font-bold text-gray-800 group-hover:text-blue-700 transition-colors">
        <a href="#">{article.title}</a>
      </h3>
      <p className="mt-2 text-sm text-gray-500 line-clamp-3">{article.description}</p>
      <p className="mt-4 text-xs text-gray-400">{article.author}</p>
    </div>
  </article>
);

export default function BlogPage() {
  return (
    <>
      <Header />
    <div className="bg-gray-50 min-h-screen">
      <Table/>
      <main>
        <FeaturedArticle article={featuredArticleData} />
        
        {/* Latest Articles Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Latest</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-12">
                       {latestArticlesData.map((post, index) => (
                          <LatestPostCard key={index} post={post} />
                       ))}
                    </div>
                    <div className="lg:col-span-1">
                        <CategoriesSidebar categories={categories} />
                    </div>
                </div>
            </div>
        </section>

        {/* More Articles Grid */}
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {moreArticlesData.map((article, index) => (
                        <VerticalArticleCard key={index} article={article} />
                    ))}
                </div>
            </div>
        </section>
      </main>
    </div>
    </>
  )
}