// src/components/Navbar.jsx
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="w-full bg-white  ">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Left Section */}
        <div className="flex items-center space-x-6">
          <h1 className="text-2xl !text-2xl font-bold leading-none">Betternest</h1>

          <Link to="/explore">
            <div className="flex items-center space-x-1 cursor-pointer border-b-2 border-black p-2 text-black">
              <span className="text-sm font-medium">Explore</span>
              <ChevronDown size={14} />
            </div>
          </Link>
          
          <Link to="/find jobs">
          <div className="text-sm font-medium cursor-pointer hover:underline">
            Find Jobs
          </div>
          </Link>
          
          <Link to="/hire freelancers">
          <div className="flex items-center space-x-1 cursor-pointer">
            <span className="text-sm font-medium">Hire Freelancers</span>
            <ChevronDown size={14} />
          </div>
          </Link>
        </div>
        
        {/* Right Section */}
        <div className="flex items-center space-x-3">
          <button className="bg-gradient-to-r from-blue-500 to-blue-800 text-white px-4 py-1.5 rounded-full text-sm font-semibold">
            Upgrade to <span className="bg-white text-blue-800 text-[10px] font-bold ml-1 px-1.5 py-0.5 rounded">PRO</span>
          </button>
          <button className="border border-blue-100 text-blue-600 px-4 py-1.5 rounded-full text-sm font-medium hover:bg-blue-50">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

