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
  return (
    <div className="relative">
      {/* Main Container with Background Image */}
      <div className="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/hero.jpeg')" }}>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        
        <div className="relative z-50">
          <SecondaryNav />
        </div>
        
        {/* Hero Section */}
        <div className="w-full py-16 relative z-10">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white text-center px-4 max-w-5xl mx-auto">
            Turnkey Technology Infrastructure Solutions
          </h1>
        </div>
      </div>
      <section className="max-w-full px-10 py-16">
        <h2 className="text-2xl font-bold text-center mb-10">
          Proven Success with Align&apos;s World-Class People, Process & Tools
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {cards.map((card, i) => (
            <Procedure key={i} {...card} delay={i * 120} />
          ))}
        </div>
      </section>

      {/* Professional & Managed Services Section */}
      <section className="max-w-full px-10 py-16 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Explore our<br />
            Professional & Managed Services
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            From strategy to delivery, our winning combination of comprehensive IT solutions and experienced professionals 
            unite to accelerate change from the data center to the workplace and into the cloud.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {serviceCards.map((service, i) => (
            <ServiceCard key={i} {...service} delay={i * 150} />
          ))}
        </div>
      </section>

      {/* About Align Section */}
      <AboutAlign />
      
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
      <SuccessStories />
      
      {/* Communication Section */}
      <Communication />
      
      {/* Contact Section */}
      <Contact />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
