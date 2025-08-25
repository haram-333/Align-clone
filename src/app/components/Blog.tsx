"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Blog() {
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
       className={`py-16 px-10 overflow-hidden transition-all duration-700 ease-out will-change-transform relative ${
         isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
       }`}
       style={{ backgroundColor: '#F5F5F5' }}
     >
      <div className="max-w-7xl mx-auto relative z-10">
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                     {/* Left side - Blog Image */}
           <div className={`transition-all duration-1000 ease-out ${
             isContentVisible ? "opacity-100" : "opacity-0"
           }`}>
            <div className="relative">
                             <Image
                 src="/images/blog.jpg"
                 alt="Data center technology and infrastructure"
                 width={500}
                 height={350}
                 className="w-full h-auto rounded-lg shadow-lg"
               />
            </div>
          </div>

          {/* Right side - Blog Content */}
          <div className={`space-y-4 transition-all duration-1000 ease-out lg:w-4/5 ${
            isContentVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          }`}>
            {/* Date */}
            <div className="text-base text-gray-600 font-medium">
              January 15, 2025
            </div>
            
            {/* Title */}
            <h2 className="text-4xl lg:text-5xl font-bold text-[#008AD4] leading-tight">
              5 Critical Data Center Trends Reshaping the Industry in 2025
            </h2>
            
            {/* Description */}
            <p className="text-lg text-gray-700 leading-relaxed">
              The data center industry is experiencing unprecedented transformation driven by multiple factors—from AI workloads and power constraints to economic pressures. Through their work with clients across various sectors, Align&apos;s experts have observed five key trends that are reshaping infrastructure requirements and operational strategies.
            </p>
            
            {/* Read More Link */}
            <div className={`pt-4 transition-all duration-1000 ease-out delay-500 ${
              isContentVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}>
              <a 
                href="#" 
                className="inline-flex items-center text-[#008AD4] font-semibold text-lg hover:text-[#0066CC] transition-colors duration-300"
              >
                Read our Blog
                <span className="ml-2 text-xl">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
