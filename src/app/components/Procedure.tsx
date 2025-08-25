"use client";

import { useEffect, useRef, useState } from "react";

export default function Procedure({
    title,
    description,
    link,
    delay = 0,
  }: {
    title: string
    description: string
    link: string
    delay?: number
  }) {
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
      <div
        ref={rootRef}
        className={`rounded-xl p-[3px] bg-gradient-to-r from-[#1F3467] to-[#008AD4] shadow-md transition-all duration-700 ease-out will-change-transform ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        <div className="bg-white rounded-xl px-8 h-full py-12">
          <h3 className="text-2xl font-bold text-[#008AD4] mb-3 inline-block border-b border-dotted border-[#008AD4] pb-1">{title}</h3>
          <p className="text-gray-700 mb-4 text-lg">{description}</p>
          <a
            href={link}
            className="text-[#00AEEF] font-semibold inline-flex items-center gap-1 hover:underline"
          >
            Learn More →
          </a>
        </div>
      </div>
    )
  }
  