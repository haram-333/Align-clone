"use client";

import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Footer() {
  const { elementRef, isVisible } = useScrollAnimation({
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
  });
  return (
         <footer ref={elementRef} className={`bg-white transition-all duration-1000 ease-out ${
           isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
         }`}>
      {/* Upper Footer Section */}
      <div className="w-full max-w-[1200px] px-8 mx-auto py-8 lg:py-16">
                                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-48">
          
          {/* Left Side - Logo and Subscription */}
          <div className="lg:col-span-1">
                         {/* Logo */}
             <div className="mb-6 lg:mb-8">
               <svg width="136" height="46" viewBox="0 0 136 46" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-28 lg:w-36">
                <g clipPath="url(#clip0_5_1177)">
                  <path d="M129.912 18.9767L118.51 21.6121L122.641 23.2928L136 20.2188L129.934 17.7383L129.912 18.9767Z" fill="#5675AC"/>
                  <path d="M122.641 23.2932L130.001 26.2971V26.9938L135.9 25.6411L136 20.2192L122.641 23.2932Z" fill="#A4B1D6"/>
                  <path d="M101.206 23.127V23.8604L115.525 29.6398L110.701 30.7529L95.2991 24.5202L101.206 23.127Z" fill="#004B8D"/>
                  <path d="M115.525 29.6396L116.615 30.0819L130.001 26.9932L129.908 31.7184L110.601 36.1745L110.701 30.7527L115.525 29.6396Z" fill="#00539B"/>
                  <path d="M110.701 30.7527L110.601 36.1745L95.2434 29.9603L95.299 24.52L110.701 30.7527Z" fill="#002B5C"/>
                  <path d="M114.602 7.31885L130.012 13.5552L110.705 18.0114L95.2953 11.775L114.602 7.31885Z" fill="#004B8D"/>
                  <path d="M130.012 13.5552L129.912 18.977L110.605 23.4331L110.705 18.015L130.012 13.5552Z" fill="#00539B"/>
                  <path d="M110.705 18.0113L110.605 23.4331L95.1952 17.1967L95.2953 11.7749L110.705 18.0113Z" fill="#002B5C"/>
                  <path d="M13.478 29.6769C13.478 32.1575 11.4609 32.9389 10.2077 32.9389C7.03007 32.9389 5.1502 31.6046 5.1502 28.4901C5.1502 27.8008 5.23177 27.1927 5.38379 26.6509H0.244718C0.0889883 27.2664 0 27.9372 0 28.667C0 33.2964 3.27032 35.9686 9.85174 35.9686C13.6115 35.9686 18.5837 34.509 18.5837 30.6315V26.6546H13.478V29.6843V29.6769Z" fill="#7D93C4"/>
                  <path d="M13.478 22.3898V24.6603H18.5837V19.3638C18.5837 13.1753 14.6459 11.0854 9.67372 11.0854C5.86576 11.0854 2.9551 12.1543 1.39039 12.9099L2.64364 16.0244C4.11937 15.3094 6.3589 14.5538 8.68743 14.5538C11.5091 14.5538 13.478 15.3978 13.478 18.516V19.8098C8.00148 20.3405 3.20353 21.4905 1.1123 24.6603H6.57767C7.98294 23.3223 10.3708 22.7658 13.478 22.3898Z" fill="#00539B"/>
                  <path d="M29.0843 0.581055H23.6227V24.6604H29.0843V0.581055Z" fill="#00539B"/>
                  <path d="M29.0843 26.6509H23.6227V35.5226H29.0843V26.6509Z" fill="#7D93C4"/>
                  <path d="M37.8496 7.38887C39.5515 7.38887 40.8493 6.1873 40.8493 4.72035C40.8493 3.25339 39.5515 2.00391 37.8496 2.00391C36.1477 2.00391 34.85 3.20548 34.85 4.72035C34.85 6.23521 36.1922 7.38887 37.8496 7.38887Z" fill="#00539B"/>
                  <path d="M40.3006 11.5317H34.8352V24.6606H40.3006V11.5317Z" fill="#00539B"/>
                  <path d="M40.3006 26.6509H34.8352V35.5226H40.3006V26.6509Z" fill="#7D93C4"/>
                  <path d="M50.0039 23.772C50.0039 17.7604 51.7503 14.2884 56.0032 14.2884C57.1675 14.2884 58.8212 15.0624 58.8212 17.4471V24.6603H64.1048V16.7984C64.1048 13.5549 60.4786 11.0854 56.2665 11.0854C48.4763 11.0854 44.5793 16.2456 44.5793 24.0374C44.5793 24.2475 44.5831 24.4539 44.5905 24.6603H50.0113C50.0002 24.3691 49.9965 24.0742 49.9965 23.772" fill="#00539B"/>
                  <path d="M58.8249 29.7581C58.8249 32.4303 56.9896 32.5814 55.7363 32.5814C52.4326 32.5814 50.6936 30.5837 50.1745 26.6509H44.7722C45.6139 32.3492 49.255 35.7438 54.3051 35.7438C56.3629 35.7438 57.8869 35.39 58.8249 34.8518V36.363C58.8249 39.5697 57.301 41.7517 53.2706 41.7517C51.0311 41.7517 48.8842 41.0809 47.4938 40.3253L45.9736 43.8858C47.72 44.9104 50.7641 45.5775 54.2124 45.5775C60.2117 45.5775 64.1086 42.2824 64.1086 35.8728V26.6436H58.8249V29.7507V29.7581Z" fill="#7D93C4"/>
                  <path d="M87.9093 26.6509H82.4476V35.5226H87.9093V26.6509Z" fill="#7D93C4"/>
                  <path d="M78.3282 11.0854C71.0534 11.0854 68.9771 14.5575 68.9771 18.4276V24.6603H74.4387V18.516C74.4387 16.5589 75.6438 14.5096 78.5136 14.5096C81.3835 14.5096 82.4476 16.5589 82.4476 18.516V24.6603H87.9093V18.4276C87.9093 14.5575 85.603 11.0854 78.3282 11.0854Z" fill="#00539B"/>
                  <path d="M74.4387 26.6509H68.9771V35.5226H74.4387V26.6509Z" fill="#7D93C4"/>
                  <path d="M101.257 19.6514L101.206 23.1271L106.767 21.8702L101.257 19.6514Z" fill="#5A719A"/>
                  <path d="M101.206 23.127L106.767 21.8701L110.605 23.4329L112.555 22.9869L116.704 24.6787L116.615 30.0821L101.206 23.8605V23.127Z" fill="#003161"/>
                  <path d="M112.555 22.9871L118.51 21.6123L122.641 23.293L116.715 24.6789L112.555 22.9871Z" fill="#005091"/>
                  <path d="M116.708 24.6752L116.623 30.0896L130.001 26.9936V26.2969L122.648 23.2856L116.708 24.6752Z" fill="#6A85BB"/>
                  <path d="M129.908 31.7148L129.812 37.1367L110.505 41.5928L110.605 36.1747L129.908 31.7148Z" fill="#7D93C4"/>
                  <path d="M110.605 36.1747L110.505 41.5929L95.1915 35.3896L95.2434 29.9604L110.605 36.1747Z" fill="#31517F"/>
                </g>
                <defs>
                  <clipPath id="clip0_5_1177">
                    <rect width="136" height="45" fill="white" transform="translate(0 0.581055)"/>
                  </clipPath>
                </defs>
              </svg>
            </div>
            
                         {/* Subscription Prompt */}
             <h3 className="text-base lg:text-lg font-bold text-gray-800 mb-3 lg:mb-4">
               Subscribe to our blog!
             </h3>
             
             {/* Subscription Form */}
             <div className="flex flex-col sm:flex-row gap-3">
               <input
                 type="email"
                 placeholder="Email*"
                 className="flex-1 px-3 lg:px-4 py-2 lg:py-3 border border-[#00AEEF] rounded-lg focus:outline-none focus:border-[#008AD4] text-gray-600 placeholder-gray-400 text-sm lg:text-base"
               />
               <button className="bg-gradient-to-r from-[#008AD4] to-[#00D1FF] text-white font-semibold px-4 lg:px-6 py-2 lg:py-3 rounded-lg hover:from-[#00D1FF] hover:to-[#008AD4] transition-all duration-300 whitespace-nowrap text-sm lg:text-base">
                 Subscribe
               </button>
             </div>
          </div>
          
                     {/* Right Side - Navigation Links */}
                                               <div className="lg:col-span-2">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                
                                {/* Column 1 */}
                 <div>
                   <ul className="space-y-2 lg:space-y-3">
                                         <li>
                       <a href="#" className="text-gray-700 hover:text-[#008AD4] transition-colors duration-200 text-base lg:text-lg font-bold">
                         Data Center Infrastructure Solutions
                       </a>
                     </li>
                     <li>
                       <a href="#" className="text-gray-700 hover:text-[#008AD4] transition-colors duration-200 text-base lg:text-lg font-bold">
                         Workplace Technology
                       </a>
                     </li>
                     <li>
                       <a href="#" className="text-gray-700 hover:text-[#008AD4] transition-colors duration-200 text-base lg:text-lg font-bold">
                         Managed Services
                       </a>
                     </li>
                     <li>
                       <a href="#" className="text-gray-700 hover:text-[#008AD4] transition-colors duration-200 text-base lg:text-lg font-bold">
                         About Align
                       </a>
                     </li>
                     <li>
                       <a href="#" className="text-gray-700 hover:text-[#008AD4] transition-colors duration-200 text-base lg:text-lg font-bold">
                         Locations
                       </a>
                     </li>
                     <li>
                       <a href="#" className="text-gray-700 hover:text-[#008AD4] transition-colors duration-200 text-base lg:text-lg font-bold">
                         Press
                       </a>
                     </li>
                  </ul>
                </div>
                
                                 {/* Column 2 */}
                 <div>
                   <ul className="space-y-2 lg:space-y-3">
                                         <li>
                       <a href="#" className="text-gray-700 hover:text-[#008AD4] transition-colors duration-200 text-base lg:text-lg font-bold">
                         Resource Center
                       </a>
                     </li>
                     <li>
                       <a href="#" className="text-gray-700 hover:text-[#008AD4] transition-colors duration-200 text-base lg:text-lg font-bold">
                         Blog
                       </a>
                     </li>
                     <li>
                       <a href="#" className="text-gray-700 hover:text-[#008AD4] transition-colors duration-200 text-base lg:text-lg font-bold">
                         Success Stories
                       </a>
                     </li>
                     <li>
                       <a href="#" className="text-gray-700 hover:text-[#008AD4] transition-colors duration-200 text-base lg:text-lg font-bold">
                         Clients and Partners
                       </a>
                     </li>
                     <li>
                       <a href="#" className="text-gray-700 hover:text-[#008AD4] transition-colors duration-200 text-base lg:text-lg font-bold">
                         Leadership
                       </a>
                     </li>
                     <li>
                       <a href="#" className="text-gray-700 hover:text-[#008AD4] transition-colors duration-200 text-base lg:text-lg font-bold">
                         Careers
                       </a>
                     </li>
                     <li>
                       <a href="#" className="text-gray-700 hover:text-[#008AD4] transition-colors duration-200 text-base lg:text-lg font-bold">
                         Awards
                       </a>
                     </li>
                  </ul>
                </div>
             </div>
           </div>
        </div>
      </div>
      
             {/* Bottom Footer Section */}
      <div className="bg-gray-100 border-t border-gray-200 w-full">
        <div className="max-w-[1200px] mx-auto px-8 py-4 lg:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 lg:gap-4 text-xs lg:text-sm text-gray-600">
            <div className="text-center md:text-left">
              Privacy | Terms and Conditions
            </div>
            <div className="text-center md:text-right">
              ©2025 | All Rights Reserved | Align Communications, Inc.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
