"use client"

import type { SubmenuData } from "@/app/components/submenuTypes";

type Props = {
  data: SubmenuData;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

export default function Submenu({ data, onMouseEnter, onMouseLeave }: Props) {
  return (
    <div
      className="relative z-50"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Hover bridge to avoid flicker when moving from trigger to submenu */}
      <div className="h-2" />
      <div
        className={`flex flex-col md:flex-row rounded-xl shadow-lg ${data.widthClass || 'w-[75vw]'} overflow-hidden transform transition-all duration-300 ease-out`}
        style={{ background: data.gradient }}
      >
        {/* Left Section */}
        <div className="text-white md:w-1/3 flex items-center justify-center max-w-[800px]" style={{ padding: '1.5rem' }}>
          <h2 className="font-bold leading-snug" style={{ fontSize: '2.46rem', marginBottom: '1rem' }}>
            {data.title}
          </h2>
        </div>

        {/* Right Section */}
        <div className="bg-white text-black p-8 md:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 rounded-xl m-1">
          {data.columns.map((col, colIdx) => (
            <div key={colIdx}>
              <h3 className="font-bold text-xl mb-3 inline-block border-b border-dotted border-black pb-1 hover:border-transparent transition-colors duration-200">{col.title}</h3>
              <ul className="space-y-2 text-sm">
                {col.links.map((link, linkIdx) => (
                  <li key={linkIdx}><a href={link.href} className="inline-block border-b border-dotted border-black pb-1 hover:border-transparent transition-colors duration-200">{link.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
  