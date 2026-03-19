export interface ProcessStep {
  step: string;
  title: string;
  desc: string;
  icon: string;
}

export interface Benefit {
  title: string;
  desc: string;
  stat?: string;
  statLabel?: string;
}

export interface FAQ {
  q: string;
  a: string;
}

export interface ServicePage {
  slug: string;
  category: string; // groups services on the index
  title: string;
  headline: string;
  subheadline: string;
  heroTag: string;
  description: string;
  image: string;
  accentColor?: string;
  stats: { value: string; label: string }[];
  features: string[];
  process: ProcessStep[];
  benefits: Benefit[];
  faqs: FAQ[];
  relatedSlugs: string[];
  ctaTitle: string;
  ctaSubtitle: string;
  metaTitle: string;
  metaDesc: string;
}

export const SERVICE_PAGES: ServicePage[] = [
  // ─── TRANSPORT SERVICES ────────────────────────────────────────────────────
  {
    slug: "transport-services",
    category: "Core Services",
    title: "Transport Services",
    headline: "India's Most Trusted Heavy Transport Network",
    subheadline: "End-to-end road freight solutions",
    heroTag: "Core Logistics",
    description:
      "Kapoor Transport operates one of India's largest specialized heavy-transport fleets. From single-truck FTL runs to coordinated multi-vehicle convoys, we deliver industrial cargo safely, on time, and with full visibility across 28 states.",
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=2000&q=80",
    stats: [
      { value: "500+", label: "Fleet Vehicles" },
      { value: "28", label: "States Covered" },
      { value: "99.8%", label: "On-Time Rate" },
      { value: "24/7", label: "Operations" },
    ],
    features: [
      "Full Truck Load (FTL) & Part Truck Load (PTL)",
      "Multi-axle heavy haulage up to 40 tons",
      "Real-time GPS tracking on every vehicle",
      "Dedicated account manager per client",
      "Door-to-door delivery with proof of delivery",
      "Hazmat-certified drivers and vehicles",
      "Cross-state permit management",
      "Insurance coverage on all shipments",
    ],
    process: [
      { step: "01", title: "Booking & Assessment", desc: "Submit your cargo details. Our team assesses weight, dimensions, route, and timeline within 2 hours.", icon: "ClipboardList" },
      { step: "02", title: "Fleet Assignment", desc: "We match your cargo to the optimal vehicle from our 500+ fleet — FTL, multi-axle, or specialized trailer.", icon: "Truck" },
      { step: "03", title: "Route Planning", desc: "Proprietary route intelligence maps the fastest, safest path accounting for road conditions and restrictions.", icon: "Map" },
      { step: "04", title: "Live Transit", desc: "Real-time GPS tracking with proactive exception alerts. Your team has full visibility from pickup to delivery.", icon: "Navigation" },
      { step: "05", title: "Delivery & POD", desc: "Confirmed delivery with digital proof-of-delivery, condition report, and invoice — all in one dashboard.", icon: "CheckCircle" },
    ],
    benefits: [
      { title: "Cost Efficiency", desc: "Optimized routing and consolidated loads reduce per-unit transport costs by up to 22%.", stat: "22%", statLabel: "Cost Reduction" },
      { title: "Zero Downtime", desc: "Backup fleet allocation ensures your supply chain never stops, even during peak demand.", stat: "Zero", statLabel: "Supply Halts" },
      { title: "Full Compliance", desc: "All vehicles are AEO certified, GST compliant, and carry valid interstate permits.", stat: "100%", statLabel: "Compliant" },
      { title: "Dedicated Support", desc: "24/7 command center with a dedicated operations manager for every enterprise account.", stat: "24/7", statLabel: "Support" },
    ],
    faqs: [
      { q: "What is the minimum load size you handle?", a: "We handle loads from 1 ton (PTL) to 500+ tons (ODC). There is no minimum for FTL bookings." },
      { q: "Do you provide real-time tracking?", a: "Yes. Every vehicle is GPS-equipped. Enterprise clients get a live dashboard; all clients receive SMS/email updates at key milestones." },
      { q: "How quickly can you mobilize a fleet?", a: "Standard FTL: 24–48 hours. Emergency mobilization: 6–12 hours for most corridors." },
      { q: "Are shipments insured?", a: "Yes. All shipments carry transit insurance. We also offer enhanced coverage for high-value or fragile cargo." },
    ],
    relatedSlugs: ["heavy-cargo", "logistics-solutions", "fleet-services"],
    ctaTitle: "Ready to move your cargo?",
    ctaSubtitle: "Get a tailored transport quote within 2 hours. No commitment required.",
    metaTitle: "Transport Services | Kapoor Transport – Pan-India Heavy Freight",
    metaDesc: "India's most trusted heavy transport network. FTL, PTL, multi-axle haulage across 28 states with real-time GPS tracking.",
  },

  // ─── LOGISTICS SOLUTIONS ───────────────────────────────────────────────────
  {
    slug: "logistics-solutions",
    category: "Core Services",
    title: "Logistics Solutions",
    headline: "End-to-End Supply Chain Engineering",
    subheadline: "Integrated logistics from origin to destination",
    heroTag: "Supply Chain",
    description:
      "We don't just move cargo — we architect supply chains. Kapoor Transport's integrated logistics solutions combine transport, warehousing, route intelligence, and technology to create seamless, scalable supply chain ecosystems for India's largest industrial enterprises.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=80",
    stats: [
      { value: "12K+", label: "Projects Delivered" },
      { value: "30+", label: "Years Experience" },
      { value: "2000+", label: "Delivery Locations" },
      { value: "ISO", label: "9001:2015 Certified" },
    ],
    features: [
      "Integrated transport + warehousing solutions",
      "Just-in-Time (JIT) delivery systems",
      "IoT-enabled smart warehouse management",
      "Multi-modal logistics coordination",
      "Customs clearance and documentation",
      "Reverse logistics and returns management",
      "Supply chain analytics and reporting",
      "Dedicated logistics control tower",
    ],
    process: [
      { step: "01", title: "Supply Chain Audit", desc: "We map your existing supply chain, identify bottlenecks, and quantify improvement opportunities.", icon: "Search" },
      { step: "02", title: "Solution Design", desc: "Our engineers design a bespoke logistics architecture — transport lanes, hub locations, inventory strategy.", icon: "Layout" },
      { step: "03", title: "Technology Integration", desc: "Connect your ERP/WMS to our platform for real-time visibility, automated dispatch, and analytics.", icon: "Cpu" },
      { step: "04", title: "Pilot & Optimize", desc: "Run a controlled pilot on one corridor. Measure KPIs, refine the model, then scale nationally.", icon: "BarChart" },
      { step: "05", title: "Full Deployment", desc: "National rollout with dedicated account team, SLA monitoring, and continuous improvement cycles.", icon: "Globe" },
    ],
    benefits: [
      { title: "Reduced Lead Times", desc: "Optimized routing and pre-positioned inventory cut average lead times by 35%.", stat: "35%", statLabel: "Faster Delivery" },
      { title: "Inventory Optimization", desc: "Smart hub placement reduces safety stock requirements and working capital tied up in inventory.", stat: "28%", statLabel: "Inventory Reduction" },
      { title: "Single-Window Visibility", desc: "One dashboard for all shipments, warehouses, and KPIs — no more chasing multiple vendors.", stat: "1", statLabel: "Unified Platform" },
      { title: "Scalable Architecture", desc: "Built to scale from 100 to 10,000 shipments/month without re-engineering the solution.", stat: "100x", statLabel: "Scalability" },
    ],
    faqs: [
      { q: "Can you integrate with our existing ERP?", a: "Yes. We have pre-built connectors for SAP, Oracle, and Microsoft Dynamics. Custom API integration is also available." },
      { q: "Do you handle customs and documentation?", a: "Yes. Our compliance team manages all interstate permits, e-way bills, and customs documentation." },
      { q: "What industries do you specialize in?", a: "Steel, automotive, power, infrastructure, chemicals, FMCG, and defence. See our Industries page for details." },
      { q: "What is the minimum contract duration?", a: "We offer project-based, quarterly, and annual contracts. Most enterprise clients start with a 6-month pilot." },
    ],
    relatedSlugs: ["transport-services", "heavy-cargo", "fleet-services"],
    ctaTitle: "Engineer your supply chain.",
    ctaSubtitle: "Schedule a free supply chain audit with our logistics architects.",
    metaTitle: "Logistics Solutions | Kapoor Transport – Integrated Supply Chain",
    metaDesc: "End-to-end supply chain engineering. JIT delivery, smart warehousing, IoT tracking, and multi-modal logistics across India.",
  },

  // ─── HEAVY CARGO ───────────────────────────────────────────────────────────
  {
    slug: "heavy-cargo",
    category: "Specialized",
    title: "Heavy Cargo",
    headline: "Over-Dimensional Cargo. Mastered.",
    subheadline: "Specialized ODC & project cargo logistics",
    heroTag: "ODC Specialists",
    description:
      "When cargo exceeds standard dimensions, conventional logistics fails. Kapoor Transport's ODC division is India's most experienced specialist in over-dimensional cargo movement — from power plant transformers to wind turbine blades, bridge girders to industrial reactors.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=2000&q=80",
    stats: [
      { value: "500T+", label: "Max Payload" },
      { value: "25+", label: "Years ODC Experience" },
      { value: "100%", label: "Permit Success Rate" },
      { value: "Zero", label: "Major Incidents" },
    ],
    features: [
      "Modular hydraulic axle trailers (up to 500+ tons)",
      "Specialized low-bed and extendable trailers",
      "Structural route surveys and bridge load analysis",
      "Interstate ODC permit procurement",
      "Police and traffic escort coordination",
      "Utility line lifting and road modification",
      "Night convoy operations",
      "On-site rigging and positioning support",
    ],
    process: [
      { step: "01", title: "Cargo Analysis", desc: "Precise measurement of weight, center of gravity, and dimensional envelope. Structural integrity assessment.", icon: "Ruler" },
      { step: "02", title: "Route Survey", desc: "Physical and digital survey of the entire route — bridge ratings, overhead clearances, turning radii, road geometry.", icon: "Map" },
      { step: "03", title: "Permit Engineering", desc: "Simultaneous permit applications across all states on the route. We manage all authority liaisons.", icon: "FileText" },
      { step: "04", title: "Equipment Configuration", desc: "Bespoke trailer assembly — axle count, ballast distribution, and steering configuration for the specific load.", icon: "Settings" },
      { step: "05", title: "Escorted Execution", desc: "Convoy with police escort, pilot vehicles, and our operations team on-site. Satellite tracking throughout.", icon: "Shield" },
    ],
    benefits: [
      { title: "No Load Too Large", desc: "Our modular hydraulic fleet can configure for any payload — from 50 tons to 500+ tons.", stat: "500T+", statLabel: "Max Capacity" },
      { title: "Permit Guaranteed", desc: "25+ years of authority relationships. We have never failed to secure required ODC permits.", stat: "100%", statLabel: "Permit Rate" },
      { title: "Zero Damage Record", desc: "Proprietary load-securing protocols and real-time structural monitoring ensure cargo integrity.", stat: "Zero", statLabel: "Cargo Damage" },
      { title: "Project Timeline Adherence", desc: "Our ODC moves are planned to the hour. We integrate with your project schedule to avoid delays.", stat: "98%", statLabel: "Schedule Adherence" },
    ],
    faqs: [
      { q: "What is the maximum weight you can transport?", a: "Our modular hydraulic fleet can handle payloads exceeding 500 metric tons with the right configuration." },
      { q: "How long does ODC permit procurement take?", a: "Typically 7–21 days depending on the number of states. We begin permit applications immediately upon engagement." },
      { q: "Do you handle international ODC shipments?", a: "We specialize in domestic ODC. For port-to-site moves, we coordinate with our freight forwarding partners." },
      { q: "Can you move cargo in monsoon season?", a: "Yes, with appropriate planning. We assess route conditions and schedule moves during safe weather windows." },
    ],
    relatedSlugs: ["transport-services", "fleet-services", "logistics-solutions"],
    ctaTitle: "No load is too heavy.",
    ctaSubtitle: "Consult our ODC engineers for a technical feasibility assessment — free of charge.",
    metaTitle: "Heavy Cargo & ODC Logistics | Kapoor Transport",
    metaDesc: "India's ODC specialists. Over-dimensional cargo movement up to 500+ tons with 100% permit success rate across 28 states.",
  },

  // ─── FLEET SERVICES ────────────────────────────────────────────────────────
  {
    slug: "fleet-services",
    category: "Specialized",
    title: "Fleet Services",
    headline: "500+ Vehicles. One Unified Fleet.",
    subheadline: "Premium asset management and dedicated fleet solutions",
    heroTag: "Fleet Management",
    description:
      "Our 500+ vehicle fleet is the backbone of Kapoor Transport's operational excellence. From dedicated fleet leasing to contract logistics, we provide the right asset for every cargo type — maintained to the highest standards, tracked in real time, and operated by certified professionals.",
    image:
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=2000&q=80",
    stats: [
      { value: "500+", label: "Active Vehicles" },
      { value: "99.2%", label: "Fleet Uptime" },
      { value: "4", label: "Vehicle Categories" },
      { value: "Bi-Weekly", label: "Maintenance Cycle" },
    ],
    features: [
      "Industrial semi-trailers (25–40 tons)",
      "Open body trucks (9–21 tons, 6/10 wheeler)",
      "Weatherproof closed containers (7–15 tons)",
      "ODC hydraulic modular trailers (100+ tons)",
      "GPS + telematics on every vehicle",
      "Speed governors and dashcams",
      "Dedicated fleet leasing contracts",
      "Driver training and certification program",
    ],
    process: [
      { step: "01", title: "Requirement Analysis", desc: "We assess your cargo type, frequency, routes, and volume to recommend the optimal fleet mix.", icon: "BarChart" },
      { step: "02", title: "Fleet Allocation", desc: "Dedicated vehicles are assigned to your account — no sharing, no delays, guaranteed availability.", icon: "Truck" },
      { step: "03", title: "Driver Assignment", desc: "Certified, background-verified drivers trained on your specific cargo type and safety protocols.", icon: "User" },
      { step: "04", title: "Telematics Setup", desc: "Your team gets access to our fleet management dashboard — live location, speed, fuel, and alerts.", icon: "Monitor" },
      { step: "05", title: "Ongoing Maintenance", desc: "Bi-weekly preventive maintenance, 24/7 breakdown support, and instant replacement vehicles.", icon: "Wrench" },
    ],
    benefits: [
      { title: "Guaranteed Availability", desc: "Dedicated fleet means your vehicles are always ready. No waiting for allocation during peak periods.", stat: "100%", statLabel: "Availability" },
      { title: "Reduced Capex", desc: "Fleet leasing eliminates vehicle ownership costs — no depreciation, insurance, or maintenance burden.", stat: "40%", statLabel: "Capex Savings" },
      { title: "Maximum Uptime", desc: "Bi-weekly maintenance cycles and instant replacement vehicles ensure 99.2% fleet uptime.", stat: "99.2%", statLabel: "Uptime" },
      { title: "Full Telematics", desc: "Real-time GPS, speed monitoring, fuel tracking, and driver behavior analytics on every vehicle.", stat: "Live", statLabel: "Tracking" },
    ],
    faqs: [
      { q: "Can we get dedicated vehicles for our account?", a: "Yes. We offer dedicated fleet contracts where specific vehicles are assigned exclusively to your operations." },
      { q: "What vehicle categories are available?", a: "Semi-trailers, open body trucks, closed containers, and ODC hydraulic modules. Custom configurations available." },
      { q: "Do you provide drivers?", a: "Yes. All our drivers are certified, background-verified, and trained on cargo-specific safety protocols." },
      { q: "What happens if a vehicle breaks down?", a: "Our 24/7 breakdown support deploys a replacement vehicle within 4 hours on major corridors." },
    ],
    relatedSlugs: ["transport-services", "heavy-cargo", "logistics-solutions"],
    ctaTitle: "Build your dedicated fleet.",
    ctaSubtitle: "Talk to our fleet specialists about a dedicated vehicle contract tailored to your operations.",
    metaTitle: "Fleet Services | Kapoor Transport – 500+ Vehicle Fleet",
    metaDesc: "Dedicated fleet leasing and contract logistics. 500+ vehicles, 99.2% uptime, real-time telematics across India.",
  },

  // ─── INDIVIDUAL SERVICE DETAIL PAGES ───────────────────────────────────────
  {
    slug: "industrial-haulage",
    category: "Individual Services",
    title: "Industrial Haulage",
    headline: "Heavy-Duty Haulage for India's Industrial Backbone",
    subheadline: "Multi-axle transport for manufacturing & infrastructure",
    heroTag: "Industrial Transport",
    description:
      "Industrial haulage is the core of what we do. Our multi-axle fleet handles the heaviest, most complex cargo movements for steel plants, power projects, and infrastructure developers across India.",
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=2000&q=80",
    stats: [
      { value: "40T", label: "Max Payload" },
      { value: "500+", label: "Fleet Size" },
      { value: "28", label: "States" },
      { value: "24/7", label: "Operations" },
    ],
    features: [
      "Multi-axle trailers up to 40 tons",
      "GPS tracking on every vehicle",
      "24/7 operations support",
      "Cross-state permit management",
      "Hazmat certified fleet",
      "Door-to-door delivery",
    ],
    process: [
      { step: "01", title: "Cargo Assessment", desc: "Weight, dimensions, and special handling requirements evaluated within 2 hours.", icon: "ClipboardList" },
      { step: "02", title: "Vehicle Selection", desc: "Optimal trailer type selected from our 500+ fleet based on cargo profile.", icon: "Truck" },
      { step: "03", title: "Route Planning", desc: "Fastest, safest route mapped with real-time traffic and restriction data.", icon: "Map" },
      { step: "04", title: "Execution & Delivery", desc: "Live GPS tracking with delivery confirmation and digital POD.", icon: "CheckCircle" },
    ],
    benefits: [
      { title: "Reliable Delivery", desc: "99.8% on-time delivery rate backed by our proprietary route intelligence system.", stat: "99.8%", statLabel: "On-Time" },
      { title: "Cost Optimized", desc: "Consolidated loads and optimized routing reduce your per-unit transport cost.", stat: "22%", statLabel: "Cost Savings" },
      { title: "Full Compliance", desc: "All permits, e-way bills, and documentation handled end-to-end.", stat: "100%", statLabel: "Compliant" },
      { title: "Scalable", desc: "From a single truck to a 50-vehicle convoy — we scale to your project needs.", stat: "50+", statLabel: "Max Convoy" },
    ],
    faqs: [
      { q: "What is the maximum payload for industrial haulage?", a: "Our standard multi-axle trailers handle up to 40 tons. For heavier loads, see our Heavy Cargo / ODC service." },
      { q: "Do you handle hazardous materials?", a: "Yes. We have hazmat-certified vehicles and drivers for Class 1–9 dangerous goods." },
    ],
    relatedSlugs: ["heavy-cargo", "transport-services", "fleet-services"],
    ctaTitle: "Move your industrial cargo.",
    ctaSubtitle: "Get a quote for your next haulage project within 2 hours.",
    metaTitle: "Industrial Haulage | Kapoor Transport",
    metaDesc: "Multi-axle industrial haulage up to 40 tons across 28 states. GPS tracking, 24/7 support, 99.8% on-time delivery.",
  },

  {
    slug: "odc-management",
    category: "Individual Services",
    title: "ODC Management",
    headline: "Over-Dimensional Cargo. No Limits.",
    subheadline: "Route engineering for the impossible",
    heroTag: "ODC Specialists",
    description:
      "Over-dimensional cargo requires a different breed of logistics. Our ODC team combines structural engineering, regulatory expertise, and specialized equipment to move what others can't.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=2000&q=80",
    stats: [
      { value: "500T+", label: "Max Payload" },
      { value: "100%", label: "Permit Rate" },
      { value: "25+", label: "Years ODC" },
      { value: "Zero", label: "Incidents" },
    ],
    features: [
      "Modular hydraulic axle trailers",
      "Bridge load analysis",
      "Interstate permit procurement",
      "Police escort coordination",
      "Night convoy operations",
      "On-site rigging support",
    ],
    process: [
      { step: "01", title: "Technical Survey", desc: "Cargo dimensions, weight, and center of gravity precisely measured.", icon: "Ruler" },
      { step: "02", title: "Route Engineering", desc: "Physical route survey covering bridges, clearances, and road geometry.", icon: "Map" },
      { step: "03", title: "Permit Procurement", desc: "All interstate ODC permits secured before movement begins.", icon: "FileText" },
      { step: "04", title: "Escorted Move", desc: "Police-escorted convoy with our operations team on-site throughout.", icon: "Shield" },
    ],
    benefits: [
      { title: "Any Size", desc: "Modular hydraulic fleet configures for any payload up to 500+ metric tons.", stat: "500T+", statLabel: "Capacity" },
      { title: "Permit Guaranteed", desc: "25 years of authority relationships. 100% permit success rate.", stat: "100%", statLabel: "Success" },
      { title: "Zero Damage", desc: "Proprietary load-securing and real-time structural monitoring.", stat: "Zero", statLabel: "Damage" },
      { title: "On Schedule", desc: "ODC moves planned to the hour, integrated with your project timeline.", stat: "98%", statLabel: "On Schedule" },
    ],
    faqs: [
      { q: "How long does ODC permit procurement take?", a: "7–21 days depending on the number of states. We begin immediately upon engagement." },
      { q: "What is the largest load you have moved?", a: "We have successfully moved industrial reactors and power transformers exceeding 400 metric tons." },
    ],
    relatedSlugs: ["heavy-cargo", "transport-services", "fleet-services"],
    ctaTitle: "No load is too large.",
    ctaSubtitle: "Get a free ODC feasibility assessment from our engineering team.",
    metaTitle: "ODC Management | Kapoor Transport – Over-Dimensional Cargo",
    metaDesc: "India's ODC specialists. Over-dimensional cargo up to 500+ tons with 100% permit success rate.",
  },
];

// Helper lookups
export const SERVICE_MAP = Object.fromEntries(SERVICE_PAGES.map((s) => [s.slug, s]));
export const ALL_SLUGS = SERVICE_PAGES.map((s) => s.slug);
