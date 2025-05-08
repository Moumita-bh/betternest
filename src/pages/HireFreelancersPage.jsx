import React from 'react';
import { Clipboard, Search, Plus } from "lucide-react";

const HireFreelancersPage = () => {
  const categories = [
    {
      title: "Graphic Design",
      image:
        "https://a5.behance.net/2cfb351d1a0a565c869db0777ded947d3e675572/img/hire/hire-landing-graphic-design.webp"
    },
    {
      title: "Logo Design",
      image:
        "https://images.unsplash.com/photo-1618220179428-22790a19d515?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Branding Services",
      image:
        "https://images.unsplash.com/photo-1605733517503-5e4a0b0a53e1?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Website Design",
      image:
        "https://images.unsplash.com/photo-1581276879432-15a4f84f4008?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Social Media Design",
      image:
        "https://images.unsplash.com/photo-1611162617213-7efc23f8d3c0?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Illustrations",
      image:
        "https://images.unsplash.com/photo-1623252198107-9c53a5b173a5?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Architecture & Interior Design",
      image:
        "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "UI/UX Design",
      image:
        "https://images.unsplash.com/photo-1620744650627-fd1a0910d173?auto=format&fit=crop&w=800&q=80"
    }
  ]; 
  
  
  
  
  
  return (
    <div className="min-h-screen bg-white text-center p-6 mr-100 ml-100">
      {/* Top Navigation */}
      <nav className="flex justify-between items-center px-8 py-4 text-sm font-medium">
        <div className="flex gap-8 items-center">
          <div className="flex items-center gap-2 text-gray-900 hover:underline cursor-pointer">
            <Clipboard size={16} />
            <span>My Freelance Projects</span>
          </div>
          <div className="flex items-center gap-2 text-gray-900 hover:underline cursor-pointer">
            <Search size={16} />
            <span>Find Creatives</span>
          </div>
          <div className="flex items-center gap-2 text-blue-600 bg-blue-50 px-3 py-1 rounded-full cursor-pointer font-semibold">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            <span>Hiring on Betternest</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-gray-900 hover:underline cursor-pointer">
          <Plus size={16} />
          <span>New Freelance Project</span>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="text-center mt-24 px-4">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 mt-[-45px] mr-[-90px] ml-[-80px]">
          Hire The World’s Best <br /> Freelancers on Betternest
        </h1>
        <p className="text-lg text-gray-800 mb-8">
          Create a project to get matched with freelancers or start browsing
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button className="bg-[var(--color-blue-600)] text-white font-semibold px-6 py-2 rounded-full text-sm">
            Get Started
          </button>
          <button className="bg-white hover:bg-gray-100 border border-gray-300 text-black font-semibold px-6 py-2 rounded-full text-sm shadow">
            Browse Freelancers
          </button>
        </div>
      </main>
      <div className="min-h-screen bg-[#f1f5f9] py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden shadow group cursor-pointer focus-within:ring-2 focus-within:ring-blue-500 object-cover"
            tabIndex={0}
          >
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-48 object-cover transition duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition duration-300 flex items-center justify-center">
              <h2 className="text-white text-lg font-semibold text-center px-2">
                {category.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default HireFreelancersPage;

