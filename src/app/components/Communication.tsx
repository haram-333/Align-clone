"use client";

import { useEffect, useRef, useState } from "react";

export default function Communication() {
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
      className={`py-32 overflow-hidden transition-all duration-700 ease-out will-change-transform relative ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
      }`}
    >
      {/* Animated Background Image */}
      <div 
        className="absolute top-0 left-0 h-full w-full z-0 overflow-hidden"
        style={{
          backgroundImage: 'url(/images/communication.jpeg)',
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
      
      <div className="w-full max-w-[1200px] px-8 mx-auto relative z-10">
        {/* Left Content */}
        <div className={`w-3/4 space-y-3 transition-all duration-1000 ease-out ${
          isContentVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
        }`}>
          {/* Communication Label */}
          <div className="text-base font-semibold text-white tracking-wide uppercase text-left">
            COMMUNICATION
          </div>
          
          {/* Main Heading */}
          <h2 className="w-full text-4xl lg:text-5xl font-semibold text-white leading-tight text-left">
            Keeping you connected every<br />step of the way.
          </h2>
          
          {/* Bullet Points */}
          <div className="w-4/5 space-y-2 text-lg text-white leading-relaxed">
            <div className="flex items-center gap-3">
              <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-4 flex-shrink-0 mt-1">
                <path d="M6.38298 15.4209L0 9.03792L2.23404 6.80388L6.38298 10.9528L16.9149 0.420898L19.1489 2.65494L6.38298 15.4209Z" fill="white"/>
              </svg>
              <p className="font-normal">
                From continual project updates to successful implementation, we help keep your team on track to get the job done.
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-4 flex-shrink-0 mt-1">
                <path d="M6.38298 15.4209L0 9.03792L2.23404 6.80388L6.38298 10.9528L16.9149 0.420898L19.1489 2.65494L6.38298 15.4209Z" fill="white"/>
              </svg>
              <p className="font-normal">
                Our team is responsive, transparent, and builds trust from the start—so there are never any surprises.
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-4 flex-shrink-0 mt-1">
                <path d="M6.38298 15.4209L0 9.03792L2.23404 6.80388L6.38298 10.9528L16.9149 0.420898L19.1489 2.65494L6.38298 15.4209Z" fill="white"/>
              </svg>
              <p className="font-normal">
                With offices coast to coast and abroad, we act as an extension of your team no matter where you are.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
