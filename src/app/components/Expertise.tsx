"use client";

import { useEffect, useRef, useState } from "react";
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Expertise() {
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

  return (
    <section 
      ref={elementRef}
              className={`py-32 overflow-hidden transition-all duration-2000 ease-out will-change-transform relative ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
        }`}
    >
      {/* Animated Background Image */}
      <div 
        className="absolute top-0 left-0 h-full w-full z-0 overflow-hidden"
        style={{
          backgroundImage: 'url(/images/expertise.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Custom Light Tint Overlay */}
      <div 
        className="absolute inset-0 z-5"
        style={{
          background: 'linear-gradient(rgba(0, 0, 0, 0.5))'
        }}
      ></div>
      
      <div className="w-full max-w-[1200px] px-4 md:px-8 mx-auto relative z-10">
        {/* Left Content */}
        <div className={`w-full lg:w-3/4 space-y-3 md:space-y-4 transition-all duration-1000 ease-out ${
          isContentVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
        }`}>
          {/* Expertise Label */}
          <div className="text-base font-semibold text-white tracking-wide uppercase text-left">
            EXPERTISE
          </div>
          
          {/* Main Heading */}
          <h2 className="w-full lg:w-3/4 text-2xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight text-left">
            Seasoned professionals for every project.
          </h2>
          
          {/* Bullet Points */}
          <div className="w-full lg:w-4/5 space-y-2 md:space-y-3 text-base md:text-lg text-white leading-relaxed">
            <div className="flex items-center gap-3">
              <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-4 flex-shrink-0 mt-1">
                <path d="M6.38298 15.4209L0 9.03792L2.23404 6.80388L6.38298 10.9528L16.9149 0.420898L19.1489 2.65494L6.38298 15.4209Z" fill="white"/>
              </svg>
              <p className="font-normal">
                Solving your internal IT challenges has never been easier.
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-4 flex-shrink-0 mt-1">
                <path d="M6.38298 15.4209L0 9.03792L2.23404 6.80388L6.38298 10.9528L16.9149 0.420898L19.1489 2.65494L6.38298 15.4209Z" fill="white"/>
              </svg>
              <p className="font-normal">
                Our professionals are certified on everything that we implement—from the physical to the application layer.
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-4 flex-shrink-0 mt-1">
                <path d="M6.38298 15.4209L0 9.03792L2.23404 6.80388L6.38298 10.9528L16.9149 0.420898L19.1489 2.65494L6.38298 15.4209Z" fill="white"/>
              </svg>
              <p className="font-normal">
                Award-winning and industry-recognized subject matter experts.
              </p>
            </div>
          </div>
          
          {/* Button */}
          <div className="pt-2 flex justify-start">
            <button 
              className="text-center border-none rounded-[5px] px-[23px] py-[15px] text-[#141414] font-bold transition-all duration-500 cursor-pointer"
              style={{
                background: 'linear-gradient(88.89deg, #008AD4 10.61%, #00D1FF 64.08%)',
                boxShadow: '0px 3px 9px rgba(20, 20, 20, 0.25)'
              }}
            >
              Access the Resource Center
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
