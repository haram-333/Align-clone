"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Expertise() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const isMobile = typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches;

    if (!isMobile) {
      // On tablet/desktop: show immediately (no scroll trigger), still animate in
      requestAnimationFrame(() => setIsVisible(true));
      // Delay content animation
      setTimeout(() => setIsContentVisible(true), 300);
      return;
    }

    // On mobile: reveal when scrolled into view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Delay content animation
          setTimeout(() => setIsContentVisible(true), 300);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
         <section 
       ref={rootRef}
       className={`py-32 px-10 overflow-hidden transition-all duration-700 ease-out will-change-transform relative ${
         isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
       }`}
     >
      {/* Animated Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/images/expertise.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          backgroundRepeat: 'no-repeat',
                           transform: isVisible ? 'scale(1.1)' : 'scale(1)',
          transition: 'transform 1.5s ease-out',
        }}
      />
      
      {/* Custom Light Tint Overlay */}
      <div 
        className="absolute inset-0 z-5"
        style={{
          background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))'
        }}
      ></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className={`space-y-6 lg:w-11/12 transition-all duration-1000 ease-out ${
            isContentVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
          }`}>

            
            {/* Expertise Label */}
            <div className="text-base font-semibold text-white tracking-wide uppercase text-left">
              EXPERTISE
            </div>
            
            {/* Main Heading */}
            <h2 className="text-4xl lg:text-5xl font-semibold text-white leading-tight text-left">
              Seasoned professionals for every project.
            </h2>
            
                         {/* Bullet Points */}
             <div className="space-y-2 text-lg text-white leading-relaxed">
               <div className="flex items-start gap-3">
                 <span className="text-white text-xl">✓</span>
                 <p className="font-normal">
                   Solving your internal IT challenges has never been easier.
                 </p>
               </div>
               
               <div className="flex items-start gap-3">
                 <span className="text-xl">✓</span>
                 <p className="font-normal">
                   Our professionals are certified on everything that we implement—from the physical to the application layer.
                 </p>
               </div>
               
               <div className="flex items-start gap-3">
                 <span className="text-xl">✓</span>
                 <p className="font-normal">
                   Award-winning and industry-recognized subject matter experts.
                 </p>
               </div>
             </div>
            
            {/* Button */}
            <div className="pt-2 flex justify-start">
              <button 
                className="text-black font-bold px-8 py-3 rounded-lg transition-all duration-500 cursor-pointer w-full lg:w-auto"
                style={{
                  background: 'linear-gradient(270deg, var(--gradient-start, #00D1FF) 10.61%, var(--gradient-end, #008AD4) 64.08%)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.setProperty('--gradient-start', '#008AD4');
                  e.currentTarget.style.setProperty('--gradient-end', '#00D1FF');
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.setProperty('--gradient-start', '#00D1FF');
                  e.currentTarget.style.setProperty('--gradient-end', '#008AD4');
                }}
              >
                Access the Resource Center
              </button>
            </div>
          </div>

          {/* Right side - empty for spacing */}
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
}
