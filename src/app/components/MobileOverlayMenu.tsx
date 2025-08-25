"use client";

import { useMemo, useState } from "react";
import { submenuConfigs } from "./submenuData";
import type { SubmenuColumn, SubmenuLink } from "@/app/components/submenuTypes";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const NAV_ITEMS = [
  { key: "dataCenter", label: "Data Center Infrastructure Solutions" },
  { key: "workplace", label: "Workplace Technology" },
  { key: "managed", label: "Managed Services" },
  { key: "about", label: "About Align" },
] as const;

type Level = { type: "root" } | { type: "menu"; key: string } | { type: "column"; key: string; columnIndex: number };

export default function MobileOverlayMenu({ isOpen, onClose }: Props) {
  const [stack, setStack] = useState<Level[]>([{ type: "root" }]);

  const current = stack[stack.length - 1];
  const title = useMemo(() => {
    if (current.type === "root") return null;
    if (current.type === "menu") return NAV_ITEMS.find((n) => n.key === current.key)?.label ?? null;
    if (current.type === "column") {
      const col = (submenuConfigs as any)[current.key].columns[current.columnIndex] as SubmenuColumn;
      return col?.title ?? null;
    }
    return null;
  }, [current]);

  if (!isOpen) return null;

  const goBack = () => {
    if (stack.length > 1) setStack((s) => s.slice(0, -1));
    else onClose();
  };

  const openMenu = (key: string) => setStack((s) => [...s, { type: "menu", key }]);
  const openColumn = (key: string, columnIndex: number) => setStack((s) => [...s, { type: "column", key, columnIndex }]);

  return (
    <div className="fixed inset-0 z-50">
      {/* Overlay below the drawer */}
      <div className="absolute inset-0 bg-blue-900/60" onClick={onClose} />

      {/* Left drawer */}
      <div className="absolute left-0 top-0 h-full w-[86%] max-w-[420px] bg-white text-black shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-black/10">
          <div className="flex items-center gap-3">
            <button onClick={goBack} aria-label="Back" className="p-2 -ml-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-black">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            {title ? (
              <span className="text-base font-semibold text-black">{title}</span>
            ) : (
              <svg className="cursor-pointer" width="90" height="28" viewBox="0 0 136 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M135.954 18.044C135.955 18.041 135.956 18.0376 135.955 18.0343C135.954 18.031 135.953 18.028 135.95 18.0257C135.948 18.0069 135.943 17.9884 135.936 17.9708C135.932 17.9513 135.924 17.9327 135.914 17.9158C135.9 17.8869 135.883 17.8598 135.862 17.8352C135.857 17.8209 135.848 17.8082 135.837 17.7986C135.816 17.7727 135.793 17.7493 135.767 17.729L135.763 17.7253C135.76 17.7216 135.756 17.7216 135.752 17.718C135.732 17.7 135.708 17.6851 135.683 17.674C135.656 17.6584 135.628 17.6449 135.599 17.6337L129.978 15.3219L130.047 11.5776V11.519C130.047 11.4881 130.044 11.4573 130.036 11.4274C130.034 11.4135 130.031 11.4 130.025 11.3871C130.012 11.3288 129.987 11.2739 129.952 11.2259C129.938 11.2036 129.922 11.1827 129.904 11.1636C129.885 11.141 129.865 11.1202 129.842 11.1013C129.838 11.0976 129.835 11.0976 129.831 11.094L129.827 11.0903L129.794 11.0683C129.784 11.0614 129.773 11.0553 129.761 11.05C129.734 11.0344 129.706 11.0209 129.677 11.0097L114.482 4.82166C114.376 4.77869 114.259 4.76973 114.148 4.79602L95.0649 9.22546C95.0612 9.22546 95.0576 9.22912 95.0539 9.22912C95.0362 9.23181 95.019 9.23673 95.0026 9.24378C94.9873 9.24831 94.9726 9.25445 94.9586 9.2621C94.9366 9.27309 94.922 9.28042 94.9037 9.29141C94.879 9.30641 94.8557 9.32357 94.834 9.3427C94.8148 9.35881 94.7965 9.37593 94.7791 9.39399C94.7649 9.40824 94.7526 9.42424 94.7424 9.44162C94.7351 9.45261 94.7314 9.45994 94.7241 9.47093C94.7092 9.4958 94.6958 9.52149 94.6838 9.54787L94.6801 9.55153V9.5552C94.6772 9.55949 94.6759 9.56469 94.6765 9.56985C94.6666 9.58799 94.6603 9.60791 94.6581 9.62847C94.651 9.64845 94.6472 9.66952 94.6472 9.69075V9.70541C94.6458 9.70686 94.6447 9.70859 94.6441 9.71049C94.6435 9.71239 94.6433 9.71441 94.6435 9.7164C94.6405 9.72712 94.6392 9.73826 94.6398 9.74937V9.76403L94.5409 15.135C94.5393 15.2459 94.5708 15.3546 94.6316 15.4474C94.6923 15.5401 94.7794 15.6125 94.8817 15.6553L110.011 39.9091C110.019 39.9133 110.028 39.9158 110.037 39.9165C110.063 39.9267 110.09 39.9341 110.118 39.9385C110.151 39.9455 110.186 39.9492 110.22 39.9494C110.275 39.9496 110.329 39.9422 110.381 39.9275L129.424 35.5054C129.544 35.4772 129.65 35.4101 129.727 35.3145C129.804 35.219 129.847 35.1005 129.849 34.9778L129.948 29.5921C129.949 29.5834 129.948 29.5747 129.945 29.5665L130.029 25.3275V25.3239L135.441 24.0782C135.56 24.0514 135.667 23.9851 135.745 23.8901C135.822 23.795 135.865 23.6767 135.866 23.5543L135.969 18.1649V18.1503C135.969 18.1143 135.965 18.0785 135.954 18.044Z" fill="black"/>
                <path d="M13.3207 28.9225C13.3207 31.3882 11.3288 32.1635 10.0907 32.1635C6.94931 32.1635 5.09081 30.8379 5.09081 27.741C5.08324 27.1239 5.16092 26.5087 5.32166 25.9128H0.240838C0.0776454 26.5685 -0.00322384 27.2419 9.83332e-05 27.9176C9.83332e-05 32.5185 3.23122 35.1717 9.73705 35.1717C13.4533 35.1717 18.3648 33.7216 18.3648 29.8648V25.9128H13.3207V28.9225ZM13.3207 21.6775V23.9347H18.3648V18.6692C18.3648 12.5193 14.4716 10.4405 9.55971 10.4405C6.72963 10.4259 3.93229 11.0459 1.37345 12.2548L2.61306 15.351C4.47401 14.4355 6.51228 13.9369 8.58575 13.8899C11.3735 13.8899 13.3192 14.7304 13.3192 17.8277V19.1118C7.91044 19.6405 3.16599 20.7836 1.09937 23.9347H6.50044C7.89028 22.6052 10.25 22.0523 13.3196 21.6775M23.3442 0H28.7427V23.9347H23.3442V0ZM23.3442 25.9128H28.7427V34.7299H23.3442V25.9128ZM37.4064 6.76763C39.0868 6.76763 40.3707 5.57326 40.3707 4.11326C40.3707 2.61114 39.0883 1.41383 37.4064 1.41383C35.7685 1.41383 34.4409 2.60967 34.4409 4.11326C34.4409 5.57362 35.7685 6.76763 37.4064 6.76763ZM34.4237 10.8835H39.8248V23.9347H34.4237V10.8835ZM34.4237 25.9128H39.8248V34.7299H34.4237V25.9128ZM49.4177 23.0514C49.4177 17.0777 51.1436 13.6254 55.3472 13.6254C56.497 13.6254 58.132 14.3948 58.132 16.7659V23.9351H63.3546V16.1186C63.3546 12.8945 59.7699 10.4398 55.6099 10.4398C47.9103 10.4398 44.0606 15.5708 44.0606 23.3137C44.0606 23.5233 44.0661 23.7292 44.072 23.934H49.4305C49.4205 23.6397 49.4159 23.3452 49.4166 23.0507M58.1327 29.002C58.1327 31.6597 56.3189 31.8073 55.0815 31.8073C51.8167 31.8073 50.0982 29.8198 49.5852 25.9117H44.246C45.0771 31.5751 48.6768 34.9519 53.6657 34.9519C55.7004 34.9519 57.2053 34.5984 58.1338 34.0668V35.5689C58.1338 38.7563 56.6289 40.9249 52.6466 40.9249C50.6584 40.9144 48.7014 40.4289 46.9389 39.5089L45.4365 43.0488C47.1613 44.0658 50.17 44.7304 53.5774 44.7304C59.5061 44.7304 63.3579 41.4569 63.3579 35.0856V25.9128H58.1338L58.1327 29.002ZM81.4764 25.9121H86.8735V34.7299H81.4775L81.4764 25.9121ZM77.4062 10.4416C70.2181 10.4416 68.1643 13.8921 68.1643 17.7408V23.9351H73.561V17.8284C73.561 15.8826 74.7526 13.8459 77.5891 13.8459C80.4255 13.8459 81.4775 15.8826 81.4775 17.8284V23.9344H86.8746V17.7397C86.8746 13.891 84.594 10.4405 77.4062 10.4405V10.4416ZM68.1643 25.9128H73.5606V34.7299H68.1643V25.9128Z" fill="black"/>
              </svg>
            )}
          </div>
          <button onClick={onClose} aria-label="Close menu" className="p-2 text-black">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M6 18L18 6" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="px-4 overflow-y-auto h-[calc(100%-56px)]">
          {current.type === "root" && (
            <div className="divide-y divide-black/10">
              {NAV_ITEMS.map((item) => (
                <button key={item.key} onClick={() => openMenu(item.key)} className="w-full flex items-center justify-between py-4">
                  <span className="text-black">{item.label}</span>
                  <svg width="16" height="10" viewBox="0 0 16 10" fill="none" stroke="currentColor" strokeWidth="2" className="text-black">
                    <path d="M3 3L8 8L13 3" />
                  </svg>
                </button>
              ))}
            </div>
          )}

          {current.type === "menu" && (
            <div className="divide-y divide-black/10">
              {(submenuConfigs as any)[current.key].columns.map((col: SubmenuColumn, idx: number) => (
                <button key={idx} onClick={() => openColumn(current.key, idx)} className="w-full flex items-center justify-between py-4">
                  <span className="text-gray-800">{col.title}</span>
                  <svg width="16" height="10" viewBox="0 0 16 10" fill="none" stroke="currentColor" strokeWidth="2" className="text-black">
                    <path d="M3 3L8 8L13 3" />
                  </svg>
                </button>
              ))}
            </div>
          )}

          {current.type === "column" && (
            <div className="divide-y divide-black/10">
              {(() => {
                const col = (submenuConfigs as any)[current.key].columns[current.columnIndex] as SubmenuColumn;
                return col.links.map((link: SubmenuLink, i: number) => (
                  <a key={i} href={link.href} className="flex items-center justify-between py-3">
                    <span className="text-black text-base">{link.label}</span>
                    <svg width="16" height="10" viewBox="0 0 16 10" fill="none" stroke="currentColor" strokeWidth="2" className="text-black/80">
                      <path d="M3 3L8 8L13 3" />
                    </svg>
                  </a>
                ));
              })()}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


