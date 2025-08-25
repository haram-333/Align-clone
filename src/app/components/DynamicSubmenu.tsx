"use client";

import React from "react";

export type SubmenuCategory = {
  title: string;
  links: string[];
};

export type DynamicSubmenuProps = {
  gradient: { left: string; right: string; leftStop?: number; rightStop?: number };
  left: { title: string; fontSizeRem?: number };
  right: { categories: SubmenuCategory[] };
  width?: string; // e.g., "75vw"
  // Hover control from parent
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

/**
 * Reusable, data-driven submenu.
 * - Centers itself under the trigger.
 * - Keeps current visual style (gradient container, white right panel, dotted underlines that disappear on hover without layout shift).
 */
export default function DynamicSubmenu({
  gradient,
  left,
  right,
  width = "75vw",
  onMouseEnter,
  onMouseLeave,
}: DynamicSubmenuProps) {
  const leftStop = gradient.leftStop ?? 20;
  const rightStop = gradient.rightStop ?? 80;

  return (
    <div
      className="absolute top-full left-1/2 -translate-x-1/2 z-10"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Spacer to avoid flicker bridging the trigger and submenu */}
      <div className="h-2" />

      <div
        className="flex flex-col md:flex-row rounded-xl shadow-lg overflow-hidden"
        style={{
          width,
          background: `linear-gradient(to right, ${gradient.left} ${leftStop}%, ${gradient.right} ${rightStop}%)`,
        }}
      >
        {/* Left Section */}
        <div className="text-white md:w-1/3 flex items-center justify-center max-w-[800px]" style={{ padding: "1.5rem" }}>
          <h2
            className="font-bold leading-snug"
            style={{ fontSize: `${left.fontSizeRem ?? 2.46}rem`, marginBottom: "1rem" }}
          >
            {left.title}
          </h2>
        </div>

        {/* Right Section */}
        <div className="bg-white text-black p-8 md:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 rounded-xl m-1">
          {right.categories.map((cat, idx) => (
            <div key={idx}>
              <h3 className="font-bold text-lg mb-3 inline-block border-b border-dotted border-black pb-1 hover:border-transparent">
                {cat.title}
              </h3>
              <ul className="space-y-2 text-sm">
                {cat.links.map((text, linkIdx) => (
                  <li key={linkIdx}>
                    <a
                      href="#"
                      className="inline-block border-b border-dotted border-black pb-1 hover:border-transparent"
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


