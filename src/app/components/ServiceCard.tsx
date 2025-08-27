"use client";

import { useState } from "react";
import Image from "next/image";
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function ServiceCard({
  title,
  link,
  iconName,
  delay = 0,
}: {
  title: string
  link: string
  iconName: 'data' | 'workplace' | 'security'
  delay?: number
}) {
  const [isHovered, setIsHovered] = useState(false);
  const { elementRef, isVisible } = useScrollAnimation({
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
  });
  
  const hoverContent = {
    data: {
      title: "Data Center Technology Infrastructure Solutions",
      description: "We assess, design, deploy, and optimize data centers built for today's AI and HPC demands"
    },
    workplace: {
      title: "Workplace Technology & AV Solutions", 
      description: "Right-size your workplace for today's professional with technology built for the connected enterprise"
    },
    security: {
      title: "Managed IT Services & Cybersecurity",
      description: "Align Managed Services delivers the highest level of stability and transparency across your IT operations"
    }
  };

  return (
    <div
      ref={elementRef}
      className={`relative rounded-xl p-[2px] shadow-md transition-all duration-2000 ease-out will-change-transform h-full ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ 
        transitionDelay: `${delay}ms`,
        background: 'linear-gradient(90deg, #008AD4 0%, #00D1FF 100%)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Default Content */}
      <div className={`bg-white rounded-xl px-4 md:px-8 py-6 md:py-8 text-left transition-opacity duration-300 h-full flex flex-col ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
        {/* SVG Icon in Circle */}
        <div className="flex justify-start mb-3 md:mb-4 flex-shrink-0">
          <div className="w-12 h-12 md:w-[65px] md:h-[65px] rounded-full flex items-center justify-center bg-white">
            <Image
              src={`/images/${iconName}.svg`}
              alt={`${iconName} icon`}
              width={48}
              height={48}
              className="w-full h-full"
            />
          </div>
        </div>
        
        <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight flex-grow min-h-[3rem] md:min-h-[4rem] flex items-start">
          {title}
        </h3>
        <a
          href={link}
          className="text-gray-900 font-bold text-base md:text-lg inline-flex items-center gap-2 mt-auto"
        >
          Learn more <span className="text-lg md:text-xl">→</span>
        </a>
      </div>

      {/* Hover Overlay Content */}
      <div 
        className={`absolute top-0 left-0 z-[1] mb-5 flex h-full w-full items-start rounded-none bg-none flex-col flex-nowrap justify-center transition-all duration-300 ease-out ${isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        style={{
          background: 'linear-gradient(135deg, #008AD4 0%, #00D1FF 100%)',
          padding: '24px 20px'
        }}
      >
        <div className="h-full flex flex-col justify-center text-white">
          {/* Hover Content - Slides up from bottom */}
          <div className={`transition-all duration-400 ease-out ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <h3 className="text-lg md:text-2xl font-bold mb-3 md:mb-4 leading-tight text-black">
              {hoverContent[iconName].title}
            </h3>
            <p className="text-sm md:text-base leading-relaxed mb-4 md:mb-6 text-black">
              {hoverContent[iconName].description}
            </p>
            <a
              href={link}
              className="text-white font-bold text-base md:text-lg inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              Learn more <span className="text-lg md:text-xl">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
