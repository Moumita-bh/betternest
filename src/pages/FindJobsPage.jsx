import React from 'react';
import data from "./data/jobs.json";

const FindJobsPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div
        className="w-full h-[300px] bg-cover bg-center flex flex-col justify-center items-center text-center px-4 mr-300"
        style={{
          backgroundImage:
            'url("https://ici.net.au/blog/wp-content/uploads/2018/04/ICI-Jobs-for-People-with-Creative-Minds.jpg")',
        }}
      >
        <h1 className="text-4xl font-bold text-black mb-2">Creative Jobs</h1>
        <p className="text-lg text-black">Browse and discover your next opportunity</p>
      </div>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* LEFT FILTER PANEL */}
        <div className="md:col-span-1 border-r border-gray-200 pr-4">
          <button className="w-full bg-blue-600 text-white py-2 rounded-full mb-6 flex items-center justify-center gap-2">
            <span>➕</span> New Job
          </button>

          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold text-gray-900">Categories</h3>
              <span>⌄</span>
            </div>

            <form className="flex flex-col gap-2 text-sm">
              <label className="flex items-center gap-2">
                <input type="radio" name="category" defaultChecked />
                All
              </label>

              <p className="text-xs font-bold text-gray-500 mt-2">POPULAR</p>

              {[
                "Logo Design",
                "Branding Services",
                "Social Media Design",
                "Website Design",
                "Illustrations",
                "Packaging Design",
                "Landing Page Design",
                "UI/UX Design",
                "Architecture & Interior Design",
              ].map((cat) => (
                <label key={cat} className="flex items-center gap-2">
                  <input type="radio" name="category" />
                  {cat}
                </label>
              ))}

              <a href="#" className="text-blue-600 font-medium mt-2">
                View All Categories
              </a>
            </form>
          </div>

          <hr />

          <div className="mt-6">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold text-gray-900">Location</h3>
              <span>⌄</span>
            </div>
            {/* Location filter goes here */}
          </div>
        </div>

        {/* RIGHT JOBS DISPLAY PANEL */}
        <div className="md:col-span-3">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Full-Time Jobs ({data.length})</h2>
            <input
              type="text"
              placeholder="Search Full-Time Jobs..."
              className="border px-4 py-2 rounded-full w-64"
            />
          </div>

          <div className="grid grid-cols-3 grid-rows-3 gap-6 mr-[-10px]">
            {data.map((job) => (
              <div
                key={job.id}
                className="border rounded-lg p-4 hover:shadow transition col-span-1"
              >
                <div className="flex items-center gap-3 mb-2">
                  <img
                    src={job.logo}
                    alt="Company Logo"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h4 className="font-medium">{job.company}</h4>
                    <p className="text-sm text-gray-500 flex items-center gap-1">
                      <span>📍</span> {job.location}
                    </p>
                  </div>
                </div>
                <h3 className="font-semibold">{job.title}</h3>
                <p className="text-sm text-gray-600">{job.description}</p>
                <p className="text-xs text-gray-400 mt-2">{job.time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindJobsPage;



