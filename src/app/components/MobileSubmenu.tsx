"use client"

import type { SubmenuData, SubmenuColumn, SubmenuLink } from "@/app/components/submenuTypes";

type Props = {
  label: string;
  data: SubmenuData;
  isOpen: boolean;
  onToggle: () => void;
};

export default function MobileSubmenu({ label, data, isOpen, onToggle }: Props) {
  return (
    <div className="border-b border-white/20 py-2">
      <button
        aria-expanded={isOpen}
        onClick={onToggle}
        className="w-full flex items-center justify-between text-white py-3"
      >
        <span className="text-base font-medium">{label}</span>
        <svg
          width="16"
          height="10"
          viewBox="0 0 16 10"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        >
          <path d="M3 3L8 8L13 3" />
        </svg>
      </button>
      {isOpen && (
        <div className="pb-4">
          <div className="rounded-xl shadow-lg overflow-hidden" style={{ background: data.gradient }}>
            <div className="text-white px-4 py-5">
              <h2 className="font-bold leading-snug text-2xl">{data.title}</h2>
            </div>
            <div className="bg-white text-black px-4 py-6 grid grid-cols-1 sm:grid-cols-2 gap-6 rounded-xl m-1">
              {data.columns.map((col: SubmenuColumn, idx: number) => (
                <div key={idx}>
                  <h3 className="font-bold text-lg mb-3 inline-block border-b border-dotted border-black pb-1 hover:border-transparent">{col.title}</h3>
                  <ul className="space-y-2 text-sm">
                    {col.links.map((link: SubmenuLink, i: number) => (
                      <li key={i}>
                        <a href={link.href} className="inline-block border-b border-dotted border-black pb-1 hover:border-transparent">
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


