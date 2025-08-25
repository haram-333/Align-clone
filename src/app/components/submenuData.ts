import type { SubmenuData } from "./submenuTypes";

export const submenuConfigs: Record<string, SubmenuData> = {
  dataCenter: {
    key: "dataCenter",
    label: "Data Center Infrastructure Solutions",
    title: "Data Center Technology Infrastructure Solutions",
    gradient: "linear-gradient(to right, #363A6F 20%, #76198A 80%)",
    widthClass: "w-[75vw]",
    columns: [
      {
        title: "Assess & Modernize",
        links: [
          { label: "Critical Facility Assessments", href: "#" },
          { label: "Current State Assessments", href: "#" },
          { label: "Application & Data Migrations", href: "#" },
        ],
      },
      {
        title: "Design & Plan",
        links: [
          { label: "Infrastructure Design", href: "#" },
          { label: "AI Readiness", href: "#" },
        ],
      },
      {
        title: "Procure & Build",
        links: [
          { label: "Procurement", href: "#" },
          { label: "Vendor Management", href: "#" },
          { label: "Cabinet Installation", href: "#" },
          { label: "Cabling Infrastructure", href: "#" },
          { label: "Installation & Testing", href: "#" },
        ],
      },
      {
        title: "Manage & Optimize",
        links: [
          { label: "Asset Point® - Align's DCIM Platform", href: "#" },
        ],
      },
    ],
  },
  workplace: {
    key: "workplace",
    label: "Workplace Technology",
    title: "Workplace Technology",
    gradient: "linear-gradient(90deg,#007F7B 1%,#C5DE8D 100%)",
    widthClass: "w-[75vw]",
    columns: [
      {
        title: "Solutions",
        links: [
          { label: "HQ & Branch Technology Design", href: "#" },
          { label: "Networking & Wi-Fi", href: "#" },
          { label: "AV Design & Implementation", href: "#" },
          { label: "IT & Structured Cabling", href: "#" },
          { label: "Smart Office & Connected Enterprise", href: "#" },
          { label: "Security & Access Control", href: "#" },
        ],
      },
      {
        title: "News & Resources",
        links: [
          { label: "Blog", href: "#" },
          { label: "Resource Center", href: "#" },
          { label: "Success Stories", href: "#" },
          { label: "Careers", href: "#" },
          { label: "Events", href: "#" },
        ],
      },
    ],
  },
  managed: {
    key: "managed",
    label: "Managed Services",
    title: "Managed Services & Cybersecurity",
    gradient: "linear-gradient(90deg,#1F3467 0%,#008AD4 70%)",
    widthClass: "w-[75vw]",
    columns: [
      {
        title: "Managed Services",
        links: [
          { label: "Align IT Suite", href: "#" },
          { label: "Cloud Services", href: "#" },
          { label: "Microsoft 365 Copilot", href: "#" },
          { label: "Operational Due Diligence", href: "#" },
          { label: "Align Guardian", href: "#" },
          { label: "Compliance & Data Archiving", href: "#" },
          { label: "Managed Data Protection", href: "#" },
          { label: "Managed Collaboration & Voice Services", href: "#" },
        ],
      },
      {
        title: "Cybersecurity",
        links: [
          { label: "Align Cybersecurity", href: "#" },
          { label: "Operational Cybersecurity Risk Assessments", href: "#" },
          { label: "Cybersecurity Program Manuals", href: "#" },
          { label: "Endpoint Protection Solutions", href: "#" },
          { label: "Data Discovery & Mapping", href: "#" },
          { label: "Cybersecurity Education", href: "#" },
          { label: "vCISO & Cybersecurity Reporting", href: "#" },
        ],
      },
      {
        title: "Resources & Press",
        links: [
          { label: "Blog", href: "#" },
          { label: "Resource Center", href: "#" },
          { label: "Success Stories", href: "#" },
          { label: "Upcoming Events", href: "#" },
          { label: "Client Login", href: "#" },
          { label: "Client Alerts", href: "#" },
          { label: "Press", href: "#" },
          { label: "Support", href: "#" },
        ],
      },
      {
        title: "Why Align Managed Services",
        links: [
          { label: "Leadership", href: "#" },
          { label: "Awards", href: "#" },
          { label: "Strategic Partners & Clients", href: "#" },
          { label: "Locations", href: "#" },
          { label: "Operational Security", href: "#" },
          { label: "Careers", href: "#" },
        ],
      },
    ],
  },
  about: {
    key: "about",
    label: "About Align",
    title: "About Align",
    gradient: "linear-gradient(180deg,#76CEFF 0%,#768AFF 50.52%,#66FFE5 99.48%)",
    widthClass: "w-[75vw]",
    columns: [
      {
        title: "About Align",
        links: [
          { label: "About Align", href: "#" },
          { label: "Leadership", href: "#" },
          { label: "Blog", href: "#" },
          { label: "News & Press", href: "#" },
          { label: "Careers", href: "#" },
          { label: "Resource Library", href: "#" },
          { label: "Success Stories", href: "#" },
          { label: "Awards", href: "#" },
          { label: "Locations", href: "#" },
          { label: "Events", href: "#" },
        ],
      },
    ],
  },
};


