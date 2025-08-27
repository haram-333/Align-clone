"use client";

import SecondaryNav from "./components/Navbar";
import Procedure from "./components/Procedure";
import ServiceCard from "./components/ServiceCard";
import AboutAlign from "./components/AboutAlign";
import TrustSection from "./components/TrustSection";
import Expertise from "./components/Expertise";
import TestimonialCarousel from "./components/Testimonial-Carousal";
import Blog from "./components/Blog";
import Results from "./components/Results";
import Communication from "./components/Communication";
import Contact from "./components/Contact";
import Stats from "./components/Stats";
import SuccessStories from "./components/SuccessStories";
import Footer from "./components/Footer";
import { useScrollAnimation } from "./hooks/useScrollAnimation";

const cards = [
  {
    title: "Assess & Modernize",
    description:
      "A comprehensive approach to IT environment assessments, enterprise AI readiness and facility upgrades.",
    link: "#",
  },
  {
    title: "Design & Plan",
    description:
      "Conceptual design & drawings, full project planning & management, including trade orchestration & vendor management.",
    link: "#",
  },
  {
    title: "Procure & Build",
    description:
      "Procurement, budgets, & lead time considerations resulting in project buildout that bridges the gap between IT assets & facilities.",
    link: "#",
  },
  {
    title: "Manage & Optimize",
    description:
      "Manage your IT with Asset Point & optimize your environment with physical and logical migrations and decommissioning services.",
    link: "#",
  },
]

const serviceCards = [
  {
    title: "Data Center Technology Infrastructure Solutions",
    link: "#",
    iconName: "data" as const,
  },
  {
    title: "Workplace Technology & AV Solutions",
    link: "#",
    iconName: "workplace" as const,
  },
  {
    title: "Managed IT Services & Cybersecurity",
    link: "#",
    iconName: "security" as const,
  },
]

export default function Home() {
  const heroRef = useScrollAnimation({ threshold: 0.3, rootMargin: '0px 0px -100px 0px' });
  const procedureRef = useScrollAnimation({ threshold: 0.2, rootMargin: '0px 0px -50px 0px' });
  const serviceRef = useScrollAnimation({ threshold: 0.2, rootMargin: '0px 0px -50px 0px' });

  return (
    <div className="relative">
      {/* Main Container with Background Image */}
      <div ref={heroRef.elementRef} className="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/hero.jpeg')" }}>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        
        <div className="relative z-50">
          <SecondaryNav />
        </div>
        
        {/* Hero Section */}
        <div className={`w-full py-16 relative z-10 transition-all duration-2000 ease-out ${heroRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white text-center px-4 max-w-5xl mx-auto">
            Turnkey Technology Infrastructure Solutions
          </h1>
        </div>
      </div>
      
      {/* Container wrapper for main content */}
      <div className="w-full max-w-[1500px] px-8 mx-auto">
        <section ref={procedureRef.elementRef} className={`py-4 transition-all duration-2000 ease-out ${procedureRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-2xl font-[650] text-center mb-10">
            Proven Success with Align&apos;s World-Class People, Process & Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {cards.map((card, i) => (
              <Procedure key={i} {...card} delay={i * 120} />
            ))}
          </div>
        </section>

        {/* Professional & Managed Services Section */}
        <section className="bg-white">
          <div className="w-full max-w-[1500px] px-4 md:px-8 mx-auto pt-8 md:pt-12">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl lg:text-[46px] font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
                Explore our<br />
                Professional & Managed Services
              </h2>
              <p className="text-base md:text-lg lg:text-[18px] font-normal text-[#141414] mb-8 md:mb-12 max-w-4xl mx-auto leading-[1.6] tracking-[0] antialiased px-4" style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}>
                From strategy to delivery, our winning combination of comprehensive IT solutions and experienced professionals 
                unite to accelerate change from the data center to the workplace and into the cloud.
              </p>
            </div>
          </div>
          
          <div className="pt-8 md:pt-16 pb-8 md:pb-12">
            <div className="w-full max-w-[1200px] px-4 md:px-8 mx-auto">
              <div className="max-w-[1200px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                  {serviceCards.map((service, i) => (
                    <ServiceCard key={i} {...service} delay={i * 200} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* About Align Section */}
      <div className="pt-16 pb-12">
        <div className="w-full max-w-[1200px] px-8 mx-auto">
          <AboutAlign />
        </div>
      </div>
      
      {/* Trust Section */}
      <TrustSection />
      
      {/* Testimonials Section */}
      <TestimonialCarousel />
      
      {/* Expertise Section */}
      <Expertise />
      
      {/* Blog Section */}
      <Blog />
      
      {/* Results Section */}
      <Results />
      
      {/* Stats Section */}
      <Stats />
      
      {/* Success Stories Section */}
      <div className="pt-16 pb-12">
        <div className="w-full max-w-[1200px] px-8 mx-auto">
          <SuccessStories />
        </div>
      </div>
      
      {/* Communication Section */}
      <Communication />
      
      {/* Contact Section */}
      <Contact />
      
      {/* Footer */}
      <div className="pt-16">
        <Footer />
      </div>
    </div>
  );
}
