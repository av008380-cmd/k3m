import { Project, Product } from './types';

export const COMPLETED_PROJECTS: Project[] = [
  { id: 1, name: "Indore Smart City Development Ltd.", client: "Indore Smart City", concessionaire: "Indore Smart City", status: "Completed", value: "23.38 Cr" },
  { id: 2, name: "Aligarh Kanpur Road Project", client: "NHAI", concessionaire: "APCO Infratech Pvt. Ltd.", status: "Completed", value: "33.75 Cr" },
  { id: 3, name: "Narsannapeta-Ranastalam", client: "NHAI", concessionaire: "APCO Infratech Pvt. Ltd.", status: "Completed", value: "49.49 Cr" },
  { id: 4, name: "Bundelkhand Expressway Pkg-1", client: "UPEIDA", concessionaire: "APCO Infratech Pvt. Ltd.", status: "Completed", value: "57.76 Cr" },
  { id: 5, name: "Dwarka Expressway Pkg-3", client: "NHAI", concessionaire: "Larsen & Toubro Limited", status: "Completed", value: "23.38 Cr" },
  { id: 6, name: "Comprehensive Upgradation of PVNR Expressway", client: "HMDA", concessionaire: "HMDA", status: "Completed", value: "37.66 Cr" },
  { id: 7, name: "Delhi Vadodara Pkg-2", client: "NHAI", concessionaire: "APCO Infratech Pvt. Ltd.", status: "Completed", value: "82.25 Cr" },
  { id: 8, name: "Upgradation of Karnal to Shahbad (SH-07)", client: "Haryana PWD", concessionaire: "Haryana PWD", status: "Completed", value: "46.98 Cr" },
  { id: 9, name: "MIEP Delhi Vadodara Pkg-11", client: "NHAI", concessionaire: "Larsen & Toubro Limited", status: "Completed", value: "15.14 Cr" },
  { id: 10, name: "Comprehensive Upgradation of Hyderabad ORR", client: "HGCL", concessionaire: "HGCL", status: "Completed", value: "84.66 Cr" },
];

export const ONGOING_PROJECTS: Project[] = [
  { id: 101, name: "Delhi Amritsar Katra Expressway Pkg-1", client: "NHAI", concessionaire: "KCC Buildcon Pvt. Ltd.", status: "Ongoing", value: "6.98 Cr" },
  { id: 102, name: "Delhi Amritsar Katra Expressway Pkg-2", client: "NHAI", concessionaire: "CDS Infra Projects Ltd.", status: "Ongoing", value: "42.65 Cr" },
  { id: 103, name: "Upgradation of Kala Amb to Shahbad", client: "Haryana PWD", concessionaire: "Haryana PWD", status: "Ongoing", value: "38.14 Cr" },
  { id: 104, name: "MCPRP - Sonipat Project", client: "NHAI", concessionaire: "Welspun Enterprises", status: "Ongoing", value: "18.85 Cr" },
  { id: 105, name: "Palsit - Dankuni Project", client: "NHAI", concessionaire: "Modern Road Markers", status: "Ongoing", value: "29.11 Cr" },
];

// Using placehold.co ensures images are always visible.
// Format: https://placehold.co/{width}x{height}/{background_color}/{text_color}?text={label}
export const PRODUCTS: Product[] = [
  {
    id: "sign-gantry",
    title: "Overhead Gantry Signs",
    category: "Signage",
    description: "High-durability overhead gantry structures with retro-reflective sheeting for maximum highway visibility.",
    image: "https://placehold.co/800x600/1e3a8a/FFF?text=Overhead+Gantry+Sign" 
  },
  {
    id: "sign-cantilever",
    title: "Cantilever Signboards",
    category: "Signage",
    description: "Robust cantilever structures designed for directional assistance on multi-lane expressways.",
    image: "https://placehold.co/800x600/1e3a8a/FFF?text=Cantilever+Signboard"
  },
  {
    id: "rpm",
    title: "Raised Pavement Markers (RPM)",
    category: "Furniture",
    description: "High-quality studs and markers for lane delineation and night-time driving safety.",
    image: "https://placehold.co/800x600/facc15/000?text=Road+Studs+(RPM)"
  },
  {
    id: "solar-rpm",
    title: "Solar RPM & Blinkers",
    category: "Furniture",
    description: "Active road safety devices powered by solar energy for 360-degree illumination.",
    image: "https://placehold.co/800x600/facc15/000?text=Solar+Blinkers"
  },
  {
    id: "vms",
    title: "Smart Variable Messaging Signs (VMS)",
    category: "Technology",
    description: "Digital signage for real-time traffic updates, weather alerts, and safety messages.",
    image: "https://placehold.co/800x600/dc2626/FFF?text=Smart+VMS+Display"
  },
  {
    id: "solar-lights",
    title: "Solar Luminaires",
    category: "Lighting",
    description: "SunStay and UrbanSpark series solar street lights for sustainable infrastructure.",
    image: "https://placehold.co/800x600/555555/FFF?text=Solar+Street+Lights"
  }
];

export const CLIENTS = [
  "NHAI", "PWD Haryana", "Larsen & Toubro", "Tata Projects", "Adani", 
  "Indore Smart City", "HMDA", "HGCL", "APCO Infratech", "KCC Buildcon",
  "PNC Infratech", "Gawar Construction", "Oriental Structural Engineers", "Cube Highways"
];