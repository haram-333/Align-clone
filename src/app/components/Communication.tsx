"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

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
      className={`py-6 px-10 overflow-hidden transition-all duration-700 ease-out will-change-transform relative ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
      }`}
    >
      {/* Animated Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/images/communication.jpeg)',
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
          <div className={`space-y-3 lg:w-11/12 transition-all duration-1000 ease-out ${
            isContentVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
          }`}>
            {/* Communication Arrow */}
            <div className="flex justify-start -mt-6">
              <Image
                src="/images/communication-arrow.svg"
                alt="Communication arrow pointing down"
                width={32}
                height={64}
                className="w-8 h-16 filter brightness-0 invert"
              />
            </div>
            
            {/* Communication Label */}
            <div className="text-base font-semibold text-white tracking-wide uppercase text-left">
              COMMUNICATION
            </div>
            
            {/* Main Heading */}
            <h2 className="text-4xl lg:text-5xl font-semibold text-white leading-tight text-left">
              Keeping you connected every<br />step of the way.
            </h2>
            
            {/* Bullet Points */}
            <div className="space-y-2 text-lg text-white leading-relaxed">
              <div className="flex items-start gap-3">
                <span className="text-white text-xl">✓</span>
                <p className="font-normal">
                  From continual project updates to successful implementation, we help keep your team on track to get the job done.
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-xl">✓</span>
                <p className="font-normal">
                  Our team is responsive, transparent, and builds trust from the start—so there are never any surprises.
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-xl">✓</span>
                <p className="font-normal">
                  With offices coast to coast and abroad, we act as an extension of your team no matter where you are.
                </p>
              </div>
            </div>
          </div>

          {/* Right side - empty for spacing */}
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
}
