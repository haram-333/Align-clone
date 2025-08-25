"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Contact() {
  const { elementRef, isVisible } = useScrollAnimation({
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
  });
  
  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => setIsContentVisible(true), 300);
    }
  }, [isVisible]);

  const locations = [
    "Texas",
    "New York", 
    "London",
    "New Jersey",
    "Virginia",
    "Arizona",
    "Chicago",
    "San Francisco"
  ];

  const services = [
    "Please Select",
    "Data Center Design, Procure, Build",
    "Data Center Assess & Modernize",
    "Workplace Technology",
    "Managed Services",
    "Align Cybersecurity",
    "Other"
  ];

  return (
         <section ref={elementRef} className={`min-h-screen py-8 lg:py-16 px-4 lg:px-10 relative overflow-hidden transition-all duration-1000 ease-out ${
           isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
         }`}>
      {/* Blue Globe Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
                 <source src="/videos/footer.mp4" type="video/mp4" />
      </video>

      <div className="max-w-7xl mx-auto relative z-10">
                 <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 lg:gap-16 items-start">
                     {/* Left Section - Locations */}
           <div className={`col-span-1 lg:col-span-3 transition-all duration-1000 ease-out ${
             isContentVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
           }`}>
                         {/* Location Arrow */}
             <div className="flex justify-start -mt-20 mb-4">
               <Image
                 src="/images/location-arrow.svg"
                 alt="Location arrow pointing down"
                 width={32}
                 height={64}
                 className="w-10 h-20 filter brightness-0 invert"
               />
             </div>
            
            {/* Locations Title */}
            <h2 className="text-3xl font-bold text-white mb-8">
              Locations
            </h2>
            
                         {/* Location List */}
             <div className="space-y-3">
               {locations.map((location, index) => (
                 <div key={index} className="text-white text-lg font-bold cursor-pointer hover:opacity-80 transition-opacity">
                   {location}
                 </div>
               ))}
             </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className={`col-span-1 lg:col-span-7 transition-all duration-1000 ease-out delay-300 ${
            isContentVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          }`}>
                                                   <div className="bg-white rounded-lg p-6 lg:p-12 shadow-lg w-full max-w-4xl">
              {/* Form Title */}
              <h3 className="text-3xl font-bold text-[#008AD4] mb-8">
                Connect With Us
              </h3>
              
                             {/* Contact Form */}
                               <form className="space-y-6 lg:space-y-8">
                {/* First Name */}
                <div>
                  <label className="block text-black font-bold mb-2">
                    First Name*
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 lg:px-6 py-3 lg:py-4 border border-[#00AEEF] rounded-lg focus:outline-none focus:border-[#008AD4] text-base lg:text-lg"
                    placeholder=""
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label className="block text-black font-bold mb-2">
                    Last Name*
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 lg:px-6 py-3 lg:py-4 border border-[#00AEEF] rounded-lg focus:outline-none focus:border-[#008AD4] text-base lg:text-lg"
                    placeholder=""
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-black font-bold mb-2">
                    Email*
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 lg:px-6 py-3 lg:py-4 border border-[#00AEEF] rounded-lg focus:outline-none focus:border-[#008AD4] text-base lg:text-lg"
                    placeholder=""
                  />
                </div>

                                 {/* Service Dropdown */}
                 <div>
                   <label className="block text-black font-bold mb-2">
                     Service*
                   </label>
                   <select className="w-full px-4 lg:px-6 py-3 lg:py-4 border border-[#00AEEF] rounded-lg focus:outline-none focus:border-[#008AD4] appearance-none bg-white text-base lg:text-lg">
                     {services.map((service, index) => (
                       <option key={index} value={service} disabled={index === 0}>
                         {service}
                       </option>
                     ))}
                   </select>
                 </div>

                                   {/* Additional Information Textarea */}
                  <div>
                    <label className="block text-black font-bold mb-2">
                      Please provide any additional information, comments, or requests:
                    </label>
                    <textarea
                      rows={1}
                      className="w-full px-4 lg:px-6 py-3 lg:py-4 border border-[#00AEEF] rounded-lg focus:outline-none focus:border-[#008AD4] resize-none text-base lg:text-lg"
                      placeholder=""
                    />
                  </div>

                                   {/* Contact Us Button */}
                  <button
                    type="submit"
                    className="w-full lg:w-1/4 bg-gradient-to-r from-[#008AD4] to-[#00D1FF] text-black font-bold py-3 lg:py-4 px-6 rounded-lg hover:from-[#00D1FF] hover:to-[#008AD4] transition-all duration-300 text-base lg:text-lg"
                  >
                    Contact Us
                  </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
