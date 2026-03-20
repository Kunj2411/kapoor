export const SITE = {
  name: "Kapoor Transport Company",
  tagline: "Driving Trust Across India",
  phone: "+91-9925195293",
  phone2: "+91-8238885522",
  whatsapp: "919925195293",
  email: "ashwani@kapoortransportcompany.in",
  address: "Near G-4, Baleshwar Silverline, Opposite Baleshwar City, Hathijan Circle, Ahmedabad, Gujarat 382445, India",
  founded: "1994",
  stats: [
    { value: "500+", label: "Active Industrial Fleet" },
    { value: "30+", label: "Years of Excellence" },
    { value: "12K+", label: "Project Completions" },
    { value: "28", label: "States Covered" },
  ],
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Fleet", href: "/fleet" },
  { label: "Clients", href: "/clients" },
  { label: "Contact", href: "/contact" },
];

export const SERVICES = [
  {
    id: "industrial-haulage",
    icon: "Truck",
    number: "01",
    title: "Industrial Haulage",
    description:
      "End-to-end heavy-duty transportation for manufacturing and large-scale infrastructure projects nationwide.",
    features: ["Multi-axle fleet", "GPS tracking", "24/7 support"],
  },
  {
    id: "odc-management",
    icon: "Settings",
    number: "02",
    title: "ODC Management",
    description:
      "Specialized route engineering and movement for over-dimensional cargo across complex national terrains.",
    features: ["Route surveys", "Permit handling", "Escort services"],
  },
  {
    id: "smart-hubs",
    icon: "Warehouse",
    number: "03",
    title: "Smart Warehousing",
    description:
      "Next-generation warehousing powered by real-time tracking and strategic distribution networks across India.",
    features: ["IoT-enabled", "Climate control", "Real-time inventory"],
  },
  {
    id: "project-cargo",
    icon: "Package",
    number: "04",
    title: "Project Cargo",
    description:
      "Turnkey logistics solutions for critical infrastructure projects including power plants and refineries.",
    features: ["Feasibility studies", "Risk management", "On-site coordination"],
  },
  {
    id: "ftl",
    icon: "Container",
    number: "05",
    title: "Full Truck Load",
    description:
      "Dedicated FTL services ensuring your cargo moves without intermediate stops for maximum efficiency.",
    features: ["Direct delivery", "Sealed containers", "Priority routing"],
  },
  {
    id: "cold-chain",
    icon: "Thermometer",
    number: "06",
    title: "Cold Chain Logistics",
    description:
      "Temperature-controlled transport for pharmaceuticals, food, and sensitive industrial materials.",
    features: ["Temp monitoring", "Compliance certified", "Unbroken chain"],
  },
];

export const FLEET = [
  {
    title: "Industrial Semi-Trailers",
    badge: "Heavy Duty",
    description:
      "High-performance trailers for structural steel, industrial machinery, and heavy coils across multi-state corridors.",
    specs: { capacity: "25–40 Tons", dimensions: "40' × 8' × 4'", axle: "Multi-Axle" },
  },
  {
    title: "Open Body Trucks",
    badge: "Rapid Transit",
    description:
      "Reliable open-deck trucks for raw materials and industrial components requiring ease of loading.",
    specs: { capacity: "9–21 Tons", length: "17' to 24'", config: "6/10 Wheeler" },
  },
  {
    title: "Weatherproof Containers",
    badge: "Secure Cargo",
    description:
      "High-security, moisture-proof containers for FMCG, electronics, and sensitive industrial cargo.",
    specs: { capacity: "7–15 Tons", dimensions: "20' × 8' × 8.5'", protection: "IP67" },
  },
  {
    title: "ODC Hydraulic Modules",
    badge: "Mega Logistics",
    description:
      "Specialized modular transport for over-dimensional cargo including boilers and transformers.",
    specs: { capacity: "100+ Tons", dimensions: "Customizable", control: "Hydraulic" },
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "A partnership spanning two decades. Their ability to manage high-risk industrial cargo across volatile terrains remains unmatched in the Indian market.",
    name: "Rajesh Varma",
    title: "VP Logistics, JSW Steel",
    initials: "RV",
  },
  {
    quote:
      "Kapoor Transport isn't just a carrier; they are a strategic extension of our supply chain. Their transparency and tech-stack are truly world-class.",
    name: "Ananya Sharma",
    title: "Supply Chain Director, Tata Motors",
    initials: "AS",
  },
  {
    quote:
      "When project timelines are non-negotiable, we turn to Kapoor. Their 99%+ on-time delivery record for heavy machinery is flawless.",
    name: "Vikram Singh",
    title: "Ops Director, Adani Ports",
    initials: "VS",
  },
];

export const CLIENTS = ["TATA", "RELIANCE", "ADANI", "L&T", "JSW", "NTPC", "BHEL", "ONGC"];

// ─── FLEET (extended) ──────────────────────────────────────────────────────────
export const FLEET_EXTENDED = [
  {
    id: "semi-trailer",
    category: "Heavy Haulage",
    title: "Industrial Semi-Trailers",
    badge: "Heavy Duty",
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1800&q=80&auto=format&fit=crop",
    description: "High-performance trailers for structural steel, industrial machinery, and heavy coils across multi-state corridors.",
    specs: { Capacity: "25–40 Tons", Dimensions: "40′ × 8′ × 4′", Axle: "Multi-Axle", Count: "180+" },
    features: ["GPS + telematics", "Speed governor", "Hazmat certified", "24/7 support"],
  },
  {
    id: "open-body",
    category: "General Freight",
    title: "Open Body Trucks",
    badge: "Rapid Transit",
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1800&q=80&auto=format&fit=crop",
    description: "Reliable open-deck trucks for raw materials and industrial components requiring ease of loading.",
    specs: { Capacity: "9–21 Tons", Length: "17′ to 24′", Config: "6/10 Wheeler", Count: "200+" },
    features: ["Rapid loading", "Tarpaulin cover", "GPS tracking", "Flexible routing"],
  },
  {
    id: "container",
    category: "Secure Cargo",
    title: "Weatherproof Containers",
    badge: "Secure Cargo",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80",
    description: "High-security, moisture-proof containers for FMCG, electronics, and sensitive industrial cargo.",
    specs: { Capacity: "7–15 Tons", Dimensions: "20′ × 8′ × 8.5′", Protection: "IP67", Count: "80+" },
    features: ["Moisture-proof seal", "Tamper-evident locks", "IoT sensors", "Climate monitoring"],
  },
  {
    id: "odc-module",
    category: "ODC / Heavy Lift",
    title: "ODC Hydraulic Modules",
    badge: "Mega Logistics",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80",
    description: "Specialized modular transport for over-dimensional cargo including boilers, transformers, and reactors.",
    specs: { Capacity: "100–500+ Tons", Dimensions: "Customizable", Control: "Hydraulic", Count: "40+" },
    features: ["Modular axle config", "Hydraulic steering", "Structural monitoring", "Police escort"],
  },
  {
    id: "low-bed",
    category: "Heavy Haulage",
    title: "Low-Bed Trailers",
    badge: "Low Profile",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=900&q=80",
    description: "Low-profile trailers for tall machinery and equipment that cannot be transported on standard trailers.",
    specs: { Capacity: "30–60 Tons", Deck: "Low-bed", Clearance: "High", Count: "30+" },
    features: ["Low deck height", "Extendable length", "Ramp loading", "Wide load certified"],
  },
  {
    id: "flatbed",
    category: "General Freight",
    title: "Flatbed Trailers",
    badge: "Versatile",
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=900&q=80",
    description: "Versatile flatbed trailers for construction materials, pipes, and oversized palletized cargo.",
    specs: { Capacity: "15–30 Tons", Length: "40′ to 53′", Type: "Flatbed", Count: "60+" },
    features: ["Side loading", "Tie-down rails", "Extendable deck", "All-terrain capable"],
  },
];

export const FLEET_CATEGORIES = ["All", "Heavy Haulage", "General Freight", "Secure Cargo", "ODC / Heavy Lift"];

// ─── CASE STUDIES ──────────────────────────────────────────────────────────────
export const CASE_STUDIES = [
  {
    tag: "Power Infrastructure",
    client: "NTPC",
    title: "500-Ton Transformer Delivery to Vindhyachal",
    desc: "Engineered a 1,400 km ODC corridor for a 500-ton power transformer from the port of Mundra to NTPC's Vindhyachal Super Thermal Power Station. Required 22-axle hydraulic configuration, 3-state permit coordination, and 11-day escorted convoy.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80",
    stats: [
      { value: "500T", label: "Payload" },
      { value: "1,400km", label: "Distance" },
      { value: "100%", label: "On Schedule" },
      { value: "Zero", label: "Incidents" },
    ],
    industry: "Power & Energy",
  },
  {
    tag: "Steel Manufacturing",
    client: "JSW Steel",
    title: "JIT Supply Chain for Vijayanagar Plant",
    desc: "Designed and deployed a Just-in-Time raw material delivery system for JSW Steel's 12 MTPA Vijayanagar plant. Integrated our TMS with JSW's SAP ERP, enabling automated dispatch and real-time inventory visibility across 6 sourcing corridors.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80",
    stats: [
      { value: "22%", label: "Cost Reduction" },
      { value: "Zero", label: "Production Halts" },
      { value: "6", label: "Corridors" },
      { value: "12 MTPA", label: "Plant Capacity" },
    ],
    industry: "Steel & Manufacturing",
  },
  {
    tag: "Infrastructure",
    client: "L&T Construction",
    title: "Bridge Girder Logistics — Mumbai Coastal Road",
    desc: "Managed the transport of 847 precast bridge girders (each 30–45m long) for the Mumbai Coastal Road project. Coordinated night-only movements through dense urban corridors with police escort and traffic management.",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=900&q=80",
    stats: [
      { value: "847", label: "Girders Moved" },
      { value: "45m", label: "Max Length" },
      { value: "18mo", label: "Duration" },
      { value: "Zero", label: "Damage Claims" },
    ],
    industry: "Infrastructure",
  },
  {
    tag: "Renewable Energy",
    client: "Adani Green",
    title: "Wind Turbine Blade Logistics — Rajasthan",
    desc: "Transported 240 wind turbine blades (each 65m) across 800 km of Rajasthan desert terrain to Adani's 1,000 MW wind farm. Custom blade carriers with active steering and real-time GPS ensured zero damage across challenging desert roads.",
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=900&q=80",
    stats: [
      { value: "240", label: "Blades Delivered" },
      { value: "65m", label: "Blade Length" },
      { value: "800km", label: "Route" },
      { value: "1,000MW", label: "Farm Capacity" },
    ],
    industry: "Renewable Energy",
  },
];

export const CASE_STUDY_INDUSTRIES = ["All", "Power & Energy", "Steel & Manufacturing", "Infrastructure", "Renewable Energy"];

// ─── CLIENT LOGOS (extended) ───────────────────────────────────────────────────
export const CLIENT_LOGOS = [
  { name: "TATA Group", sector: "Conglomerate" },
  { name: "Reliance Industries", sector: "Energy & Retail" },
  { name: "Adani Group", sector: "Infrastructure" },
  { name: "L&T", sector: "Engineering" },
  { name: "JSW Steel", sector: "Steel" },
  { name: "NTPC", sector: "Power" },
  { name: "BHEL", sector: "Heavy Engineering" },
  { name: "ONGC", sector: "Oil & Gas" },
  { name: "Steel Authority", sector: "Steel" },
  { name: "Vedanta", sector: "Mining" },
  { name: "Hindalco", sector: "Aluminium" },
  { name: "Ultratech Cement", sector: "Cement" },
];

// ─── TIMELINE ──────────────────────────────────────────────────────────────────
export const TIMELINE = [
  {
    year: "1994",
    title: "Founded in Ahmedabad",
    desc: "Kapoor Transport established with 12 trucks and a single corridor — Ahmedabad to Surat. First client: a Gujarat industrial manufacturing unit.",
  },
  {
    year: "1999",
    title: "First ODC Movement",
    desc: "Successfully completed our first over-dimensional cargo move — a 120-ton industrial boiler for a Rajasthan power plant. Marked our entry into specialized logistics.",
  },
  {
    year: "2004",
    title: "Pan-India Expansion",
    desc: "Fleet crossed 100 vehicles. Established operations in Mumbai, Chennai, and Kolkata. Signed first Fortune 500 contract with a major steel conglomerate.",
  },
  {
    year: "2008",
    title: "Quality Milestone",
    desc: "Achieved quality management certification. Launched proprietary route intelligence system, reducing average transit times by 18%.",
  },
  {
    year: "2012",
    title: "Technology Integration",
    desc: "Deployed GPS telematics across entire fleet. Launched client portal for real-time shipment tracking — first in the Indian heavy logistics sector.",
  },
  {
    year: "2016",
    title: "500+ Fleet Milestone",
    desc: "Fleet surpassed 500 vehicles. Completed India's largest single ODC move — a 480-ton reactor for an ONGC refinery expansion.",
  },
  {
    year: "2020",
    title: "Digital Transformation",
    desc: "Launched integrated TMS platform with ERP connectors for SAP and Oracle. Enabled JIT delivery for 3 major steel manufacturers during the pandemic.",
  },
  {
    year: "2024",
    title: "30 Years of Excellence",
    desc: "Celebrated 30 years. 12,000+ projects completed. Serving 100+ enterprise clients across 28 states. Expanding into green logistics with EV fleet pilot.",
  },
];

// ─── INFRASTRUCTURE ────────────────────────────────────────────────────────────
export const INFRASTRUCTURE = [
  {
    title: "Command Center",
    stat: "24/7",
    desc: "Ahmedabad operations hub with real-time fleet visibility, route monitoring, and emergency response coordination.",
    icon: "Monitor",
  },
  {
    title: "Maintenance Depots",
    stat: "8",
    desc: "Strategically located across India for bi-weekly preventive maintenance and 24/7 breakdown support.",
    icon: "Wrench",
  },
  {
    title: "Warehousing Hubs",
    stat: "12",
    desc: "IoT-enabled distribution centers across major industrial corridors with climate-controlled bays.",
    icon: "Warehouse",
  },
  {
    title: "Driver Training Centers",
    stat: "3",
    desc: "Dedicated facilities for hazmat certification, ODC operations, and defensive driving programs.",
    icon: "GraduationCap",
  },
  {
    title: "Technology Platform",
    stat: "1 TMS",
    desc: "Proprietary Transport Management System with ERP integration, live tracking, and analytics dashboard.",
    icon: "Cpu",
  },
  {
    title: "States Covered",
    stat: "28",
    desc: "Pan-India network with active operations, permit relationships, and local logistics partners in every state.",
    icon: "Map",
  },
];
