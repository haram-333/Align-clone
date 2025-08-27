"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function AboutAlign() {
  const { elementRef, isVisible } = useScrollAnimation({
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
  });

  return (
    <section 
      ref={elementRef}
      className={`py-20 bg-white overflow-hidden transition-all duration-1000 ease-out will-change-transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-4">
            <div className="text-base font-normal leading-[26px] flex items-center tracking-[1px] uppercase mb-[10px]">
              ABOUT ALIGN
            </div>
            
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-[#008AD4] leading-tight">
              Turnkey Technology Infrastructure Solutions
            </h2>
            
            <div className="space-y-3 md:space-y-4 text-base md:text-lg text-gray-700 leading-relaxed">
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
          <div className="relative h-[300px] md:h-[400px] lg:h-[600px] flex items-center justify-center">
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
                className="w-48 h-48 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain"
              />
            </div>


          </div>
        </div>
    </section>
  );
}
