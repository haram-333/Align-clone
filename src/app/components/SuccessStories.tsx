"use client"

import { useRef, useEffect, useState } from 'react'

export default function SuccessStories() {
  const rootRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    if (rootRef.current) {
      observer.observe(rootRef.current)
    }

    return () => observer.disconnect()
  }, [])

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
    <section ref={rootRef} className="py-16 bg-white">
      <div className="text-center">
        {/* Top Section */}
        <div className="mb-12">
          <div className="text-base font-semibold text-gray-600 tracking-wide uppercase mb-4">
            SUCCESS STORIES
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#008AD4] mb-6 leading-tight max-w-[57.5%] mx-auto"
            style={{
              fontWeight: 600,
              color: '#008AD4',
              lineHeight: '1.1'
            }}>
            Featured Success Stories From Across Align&apos;s Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-[62%] font-medium mx-auto leading-relaxed">
            Explore our featured success stories from Workplace Technology, Data Center Solutions to Migration and Cloud, and Managed Services.
          </p>
        </div>

        {/* Success Story Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto">
          {successStories.map((story, i) => (
                         <div
               key={i}
               className={`rounded-xl p-[2px] shadow-md transition-all duration-700 ease-out will-change-transform ${
                 isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
               }`}
               style={{ 
                 background: 'linear-gradient(44.39deg, #008AD4 43.93%, #00D1FF 89.9%)',
                 transitionDelay: `${i * 120}ms`
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
          ))}
        </div>
      </div>
    </section>
  )
}
