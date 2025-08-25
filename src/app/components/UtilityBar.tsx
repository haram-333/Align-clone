"use client";

import Image from "next/image";

type Props = {
  justify?: "end" | "center";
  compact?: boolean;
  inline?: boolean;
  className?: string;
  onSearchClick?: () => void;
};

export default function UtilityBar({ justify = "end", compact = false, inline = false, className = "", onSearchClick }: Props) {
  const justifyClass = justify === "center" ? "justify-center" : "justify-end";
  const gapClass = compact ? "gap-4" : "gap-10";

  const List = (
      <ul className={`text-white ${inline ? "" : "w-full"} flex ${gapClass} items-center ${justifyClass} font-semibold`}>
        <li className="cursor-pointer relative group">
          <Image src="/images/earth-menu.webp" alt="Home" width={18} height={18} />
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 pointer-events-none">
            <div
              className="bg-white text-black px-4 py-6 rounded shadow-lg min-w-[170px] text-sm font-light"
              style={{
                backgroundImage:
                  "linear-gradient(white, white), linear-gradient(90deg,#1F3467 0%,#008AD4 70%)",
                backgroundOrigin: "border-box",
                backgroundClip: "padding-box, border-box",
                border: "2px solid transparent",
                borderRadius: "10px",
              }}
            >
              <div className="space-y-4">
                <div className="inline-block border-b border-dotted border-gray-400 pb-1">US Services</div>
                <br />
                <div className="inline-block border-b border-dotted border-gray-400 pb-1">UK & EMEA Services</div>
              </div>
            </div>
          </div>
        </li>
        <li className="cursor-pointer">Our Blog</li>
        <li className="cursor-pointer">Contact Us</li>
        <li className="cursor-pointer">Resources</li>
        <li className="flex items-center gap-1 cursor-pointer">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8.337 0A4.168 4.168 0 1012.5 4.168 4.18 4.18 0 008.337 0zm8.857.521a3.387 3.387 0 103.387 3.387A3.4 3.4 0 0017.194.521zM8.337 1.563a2.605 2.605 0 11-2.605 2.605 2.593 2.593 0 012.605-2.605zm8.857.521a1.824 1.824 0 11-1.824 1.824 1.812 1.812 0 011.824-1.824zm0 5.731A7.4 7.4 0 0011.878 9.6a12.8 12.8 0 00-3.541-.48A11.437 11.437 0 002.6 10.526a4.609 4.609 0 00-2.6 3.8V18.5a.812.812 0 00.782.782h15.11a.812.812 0 00.782-.782v-2.609h5.992a.812.812 0 00.782-.782v-3.386A3.484 3.484 0 0021.452 8.8a8.752 8.752 0 00-4.258-.985zm0 1.563a7.329 7.329 0 013.484.79c.837.471 1.2 1.011 1.2 1.555v2.605h-5.21a4.609 4.609 0 00-2.6-3.8c-.159-.094-.328-.183-.5-.269a7.258 7.258 0 013.615-.879zm-8.857 1.3a10.02 10.02 0 014.95 1.189 3.081 3.081 0 011.824 2.459v3.387H1.563v-3.385a3.081 3.081 0 011.824-2.458 10.019 10.019 0 014.95-1.189z"></path>
          </svg>
          <p>Support</p>
        </li>
        <li className="cursor-pointer hidden xl:block" onClick={onSearchClick}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21.71 20.29L18 16.61A9 9 0 1016.61 18l3.68 3.68a1 1 0 001.42-1.42zM11 18a7 7 0 117-7 7 7 0 01-7 7z" />
          </svg>
        </li>
      </ul>
  );

  if (inline) {
    return (
      <div className={className}>{List}</div>
    );
  }

  return (
    <div className={`w-full ${compact ? "py-3" : "p-10"} ${className}`}>{List}</div>
  );
}


