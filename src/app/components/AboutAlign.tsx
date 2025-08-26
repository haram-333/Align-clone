"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function AboutAlign() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const isMobile = typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches;

    if (!isMobile) {
      // On tablet/desktop: show immediately (no scroll trigger), still animate in
      requestAnimationFrame(() => setIsVisible(true));
      return;
    }

    // On mobile: reveal when scrolled into view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
      className={`py-20 bg-white overflow-hidden transition-all duration-700 ease-out will-change-transform ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
      }`}
    >
      <div className="grid grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-4">
            <div className="text-base font-normal leading-[26px] flex items-center tracking-[1px] uppercase mb-[10px]">
              ABOUT ALIGN
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-semibold text-[#008AD4] leading-tight">
              Turnkey Technology Infrastructure Solutions
            </h2>
            
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p className="font-medium">
                The rise of AI has had a massive impact on the IT industry - from increasing demands on data center infrastructure, to creating increasing risk from a cybersecurity standpoint, and even enabling more advanced workplace technology solutions. Align is uniquely equipped to address all of these facets of the AI revolution with our team of experts.
              </p>
              
              <p className="font-medium">
                From strategy to delivery, our winning combination of comprehensive IT solutions and experienced professionals unite to accelerate change from the data center to the workplace and into the cloud.
              </p>
            </div>
            
            <div className="pt-4">
              <button 
                className="text-center border-none rounded-[5px] px-[23px] py-[15px] text-[#141414] font-bold transition-all duration-500 cursor-pointer"
                style={{
                  background: 'linear-gradient(88.89deg, #008AD4 10.61%, #00D1FF 64.08%)',
                  boxShadow: '0px 3px 9px rgba(20, 20, 20, 0.25)'
                }}
              >
                About Align
              </button>
            </div>
          </div>

          {/* Right Static Section */}
          <div className="relative h-[600px] flex items-center justify-center">
            {/* Background Lines */}
            <div className="absolute inset-0">
              {['first-layer', 'second-layer', 'below-second-layer', 'third-layer-first-half', 'third-layer-second-half', 'bottom-layer'].map((layer) => (
                <Image
                  key={layer}
                  src={`/images/${layer}.webp`}
                  alt={`${layer} path`}
                  fill
                  className="object-contain opacity-30"
                />
              ))}
            </div>

            {/* Main Geometric Image */}
            <div className="relative z-10">
              <Image
                src="/images/about.webp"
                alt="Geometric technology visualization"
                width={400}
                height={400}
                className="w-80 h-80 lg:w-96 lg:h-96 object-contain"
              />
            </div>


          </div>
        </div>
    </section>
  );
}
