import React, { useEffect, useState } from "react";
import { SlidersHorizontal, Search, Image } from "lucide-react";
import data from "./data/products.json";


const ExplorePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      await new Promise(res => setTimeout(res, 500)); // mimic API delay
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      

      {/* Search & Filter Bar */}
      <div className="bg-white px-8 py-4 pl-30 mr-26">
        <div className="flex items-center gap-4">
          {/* Filter Button */}
          <button className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-300 hover:bg-gray-100">
            <SlidersHorizontal size={16} />
            <span className="font-semibold text-sm">Filter</span>
          </button>

          {/* Search Input */}
          <div className="flex items-center flex-grow px-3 py-1.5 bg-gray-100 rounded-full border border-gray-300 h-10">
            <Search className="text-gray-500 mr-2" size={16} />
            <input
              type="text"
              placeholder="Search the creative world at work"
              className="bg-transparent outline-none w-full text-sm font-medium placeholder:text-sm"
            />
            <button className="flex items-center gap-2 px-2 py-1 rounded-full border border-gray-300 hover:bg-gray-100 h-8 ml-2">
              <Image size={16} />
              <span className="text-sm font-medium">Search by Image</span>
            </button>
          </div>

          {/* Sort Dropdown */}
          <button className="px-4 py-1.5 rounded-full border border-gray-300 hover:bg-gray-100 text-sm font-medium">
            Recommended ▾
          </button>
        </div>
      </div>

      
      {/* Product Grid */}
      <main className="flex-grow p-4 overflow-y-auto" style={{ maxHeight: 'calc(4 * 300px)' }}>
        <div className=" grid grid-rows-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6  gap-6 mr-30 ml-30 ">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-sm rounded-md overflow-hidden border border-gray-200"
            >
              <img
                src={product.imageUrl}
                alt={product.title}
                className="h-40 w-full object-cover"
              />
              <div className="p-3">
                <h2 className="font-semibold text-sm truncate">{product.title}</h2>
                <p className="text-xs text-gray-500 truncate">{product.author}</p>
                <div className="text-xs mt-2 flex gap-4 text-gray-600">
                  <span>👍 {product.likes}</span>
                  <span>👁️ {product.views}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer className="bg-gray-100 text-black px-8 py-12 text-sm mt-10">
  <div className="max-w-screen-xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 mr-[-32px]">
    {/* Logo */}
    <div>
      <h1 className="text-2xl font-bold ml-[-100px]">Betternest</h1>
    </div>

    {/* Built For Creatives */}
    <div>
      <h3 className="font-bold mb-2 ml-5">Built For Creatives</h3>
      <ul className="space-y-1 ml-5">
        <li>Try Behance Pro</li>
        <li>Find Inspiration</li>
        <li>Get Hired</li>
        <li>Sell Creative Assets</li>
        <li>Sell Freelance Services</li>
      </ul>
    </div>

    {/* Find Talent */}
    <div>
      <h3 className="font-bold mb-2">Find Talent</h3>
      <ul className="space-y-1">
        <li>Post a Job</li>
        <li>Graphic Designers</li>
        <li>Photographers</li>
        <li>Video Editors</li>
        <li>Web Designers</li>
        <li>Illustrators</li>
      </ul>
    </div>

    {/* Behance */}
    <div>
      <h3 className="font-bold mb-2">Behance</h3>
      <ul className="space-y-1">
        <li>About Behance</li>
        <li>Adobe Portfolio</li>
        <li>Download the App</li>
        <li>Blog</li>
        <li>Careers</li>
        <li><a href="#" className="underline">Help Center</a></li>
        <li>Contact Us</li>
      </ul>
    </div>

    {/* Social */}
    <div>
      <h3 className="font-bold mb-2">Social</h3>
      <ul className="space-y-1">
        <li>📸 Instagram</li>
        <li>🐦 Twitter</li>
        <li>📌 Pinterest</li>
        <li>📘 Facebook</li>
        <li>💼 LinkedIn</li>
      </ul>
    </div>
  </div>

  {/* Divider */}
  <hr className="border-gray border-gray-300 mt-12 mb-6" />


  {/* Bottom Row */}
  <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-2 px-2">
    <div className="flex items-center gap-2">
      <span className="font-bold text-white">Adobe</span>
      <span>© 2025 Adobe Inc. All rights reserved.</span>
    </div>
    <div className="flex gap-4 flex-wrap justify-center">
      <span>English ▾</span>
      <span>TOU</span>
      <span>Privacy</span>
      <span>Community</span>
      <span>Cookie preferences</span>
      <span>Do not sell or share my personal information</span>
    </div>
  </div>
</footer>

    </div>
  );
};

export default ExplorePage;

