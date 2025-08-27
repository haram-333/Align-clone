"use client"

import { useRef, useEffect, useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function SuccessStories() {
  const { elementRef, isVisible } = useScrollAnimation({
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
  });

  const successStories = [
    {
      title: "Align's Workplace Technology Transformation for Financial Giant",
      link: "#"
    },
    {
      title: "Align Partners with Dusty Robotics to Automate Data Center Layouts",
      link: "#"
    },
    {
      title: "Align Leads Major Healthcare Player's Data Center Consolidation",
      link: "#"
    },
    {
      title: "From Legacy to Leading Edge: Regional Bank Transforms into the Cloud",
      link: "#"
    }
  ]

  return (
    <section ref={elementRef} className="py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        {/* Top Section */}
        <div className="mb-12 text-left">
          <div className="text-base font-semibold text-gray-600 tracking-wide uppercase mb-4">
            SUCCESS STORIES
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#008AD4] mb-6 leading-tight w-full"
            style={{
              fontWeight: 600,
              color: '#008AD4',
              lineHeight: '1.1'
            }}>
            Featured Success Stories From Across Align&apos;s Solutions
          </h2>
          <p className="text-base md:text-lg text-gray-600 w-full font-medium leading-relaxed">
            Explore our featured success stories from Workplace Technology, Data Center Solutions to Migration and Cloud, and Managed Services.
          </p>
        </div>

        {/* Success Story Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {successStories.map((story, i) => (
            <SuccessStoryCard key={i} story={story} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

// Separate component for individual cards with their own animations
function SuccessStoryCard({ story, index, isVisible }: { story: any, index: number, isVisible: boolean }) {
  const [isCardVisible, setIsCardVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      // Stagger the card animations
      setTimeout(() => setIsCardVisible(true), index * 200);
    } else {
      setIsCardVisible(false);
    }
  }, [isVisible, index]);

  return (
    <div
      className={`rounded-xl p-[2px] shadow-md transition-all duration-2000 ease-out will-change-transform ${
        isCardVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ 
        background: 'linear-gradient(44.39deg, #008AD4 43.93%, #00D1FF 89.9%)',
        transitionDelay: `${index * 200}ms`
      }}
    >
      <div className="bg-white rounded-xl px-6 py-8 h-full flex flex-col text-left gap-10">
        <h3 className="text-xl font-bold text-gray-900 mb-6 leading-tight flex-grow">
          {story.title}
        </h3>
        <a
          href={story.link}
          className="text-[#008AD4] font-semibold inline-flex items-center gap-1 hover:underline mt-auto text-lg"
        >
          Read more →
        </a>
      </div>
    </div>
  );
}
