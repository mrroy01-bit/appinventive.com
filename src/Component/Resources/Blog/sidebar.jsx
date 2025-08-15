import React from "react";

const Sidebar = () => {
  return (
    <div className="space-y-10">
      {/* Search */}
      <div className="bg-white shadow-md p-5 rounded-lg">
        <h3 className="text-lg font-bold mb-3">Search</h3>
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Categories */}
      <div className="bg-white shadow-md p-5 rounded-lg">
        <h3 className="text-lg font-bold mb-3">Categories</h3>
        <ul className="space-y-2 text-gray-700">
          <li className="hover:text-blue-600 cursor-pointer">AI & Technology</li>
          <li className="hover:text-blue-600 cursor-pointer">SEO</li>
          <li className="hover:text-blue-600 cursor-pointer">Web Development</li>
          <li className="hover:text-blue-600 cursor-pointer">Marketing</li>
        </ul>
      </div>

      {/* Recent Posts */}
      <div className="bg-white shadow-md p-5 rounded-lg">
        <h3 className="text-lg font-bold mb-3">Recent Posts</h3>
        <ul className="space-y-3">
          <li className="flex items-center space-x-3">
            <img src="/images/blog1.jpg" alt="post" className="w-14 h-14 object-cover rounded" />
            <span className="hover:text-blue-600 cursor-pointer">AI in 2025: Trends You Should Know</span>
          </li>
          <li className="flex items-center space-x-3">
            <img src="/images/blog2.jpg" alt="post" className="w-14 h-14 object-cover rounded" />
            <span className="hover:text-blue-600 cursor-pointer">Why SEO Still Matters in 2025</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
