"use client";

import { useState } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function SearchModal({ isOpen, onClose }: Props) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic here
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className={`fixed inset-0 z-50 transition-opacity duration-500 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
      {/* Blue overlay background */}
      <div 
        className="absolute inset-0 backdrop-blur-[0.5px]" 
        style={{
          background: "linear-gradient(90deg,rgba(31,52,103,.8),rgba(0,138,212,.8) 70%)"
        }}
        onClick={onClose} 
      />
      
      {/* Search Modal - Positioned at top */}
      <div className="h-full flex items-start justify-center pt-5 px-4 sm:px-8 md:px-12 lg:px-20">
        <div className={`relative bg-white rounded-lg shadow-2xl w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl relative p-6 sm:p-8 md:p-12 lg:p-16 transition-all duration-300 ease-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Close Button - Top Right Corner */}
          <button
            onClick={onClose}
            className="absolute top-0 right-0 w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-black text-white rounded-tr-lg rounded-bl-lg flex items-center justify-center hover:bg-gray-800 transition-colors z-10"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          {/* Header */}
          <div className="pb-3 sm:pb-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black">Search The Site</h2>
          </div>
          
          {/* Content */}
          <div>
            <p className="text-blue-500 text-xs sm:text-sm mb-3 sm:mb-4">
              Search the website pages, blog, podcasts and resources.
            </p>
            
            <form onSubmit={handleSearch} className="space-y-3 sm:space-y-4">
              {/* Search Input with Gradient Border */}
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search The Site"
                  className="w-full px-3 sm:px-4 py-2 text-base sm:text-lg border-4 rounded-lg focus:outline-none focus:ring-0"
                  style={{
                    borderImageSource: "linear-gradient(180deg,#76CEFF 0%,#768AFF 50.52%,#66FFE5 99.48%)",
                    borderImageSlice: "1",
                    borderImageWidth: "4px",
                  }}
                />
              </div>
              
              {/* Search Button - Right Aligned */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="w-1/3 sm:w-1/4 lg:w-1/5 bg-black text-white py-2 sm:py-3 px-2 sm:px-1 rounded-lg text-base sm:text-lg font-semibold hover:bg-gray-800 transition-colors"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
