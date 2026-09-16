import { getAssetUrl } from '../utils/asset';

export const businessInfo = {
  name: "Ambition Real Estate",
  tagline: "आपका विश्वास, हमारी जिम्मेदारी",
  taglineEn: "Trust, Transparency & Results",
  advisor: "Ujjwal Tiwari",
  phone1: "+91 70008 95068",
  phone2: "+91 90745 90395",
  rawPhone1: "917000895068",
  rawPhone2: "919074590395",
  email: "info@ambitionrealestate.in",
  address: "194, Mahaveer Bagh Colony, Indore - Ujjain Rd, Pawapuri Colony, Ujjain, Madhya Pradesh 456010",
  googleRating: 5.0,
  reviewsCount: 15,
  hours: "Open Daily (Closes at 10:00 PM)",
  experienceYears: "10+",
  bookingFeature: "Flexible 25% Booking Option with 100% Clear Titles",
};

const rawProperties = [

  {
    id: "dmart-duplex-houses",
    title: "Modern Luxury Duplex Houses",
    subtitle: "Ready-to-Move & Custom Built Homes",
    location: "Opposite D-Mart, Indore Road, Ujjain",
    category: "Residential House",
    type: "House / Villa",
    priceRange: "₹45 Lakh - ₹75 Lakh",
    startingPrice: 4500000,
    pricePerSqft: "Competitive Builder Pricing",
    badge: "Hot Deal - Opp. D-Mart",
    featured: true,
    image: "/images/prop-duplex-house.jpg",
    flyerImage: "/images/download.png",
    altImage: "/images/unnamed (4).png",
    configurations: [
      { size: "15 x 40 (600 sq.ft)", price: "₹45 Lakh" },
      { size: "20 x 40 (800 sq.ft)", price: "₹60 Lakh" },
      { size: "20 x 50 (1,000 sq.ft)", price: "₹74 Lakh" },
      { size: "25 x 40 (1,000 sq.ft)", price: "₹75 Lakh" },
    ],
    features: [
      "2 & 3 BHK Layouts",
      "Spacious Living Hall & Modular Kitchen",
      "Dedicated Covered Car Parking",
      "Overhead Water Tank with 24x7 Water Supply",
      "Direct frontage to Indore Road",
      "Walking distance to D-Mart shopping hub",
      "Bank Loan Assistance Available"
    ],
    bookingOption: "25% Booking Available",
    highlights: "Strong RCC construction with premium interior finish, peaceful gated colony feel, and immediate capital growth due to D-Mart commercial hotspot."
  },
  {
    id: "dmart-commercial-plots",
    title: "Premium 4-Lane Touch Commercial Plots",
    subtitle: "High Visibility Commercial & Semi-Commercial Land",
    location: "In Front of D-Mart, Indore Road, Ujjain",
    category: "Commercial Plot",
    type: "Plot / Land",
    priceRange: "Price on Request (High ROI)",
    startingPrice: 5500000,
    pricePerSqft: "Clear Transparent Rate",
    badge: "Prime 4-Lane Frontage",
    featured: true,
    image: "/images/prop-commercial-road.jpg",
    flyerImage: "/images/unnamed (1).png",
    configurations: [
      { size: "26 x 40 (1,040 sq.ft)", price: "Inquire Now" },
      { size: "30 x 50 (1,500 sq.ft)", price: "Inquire Now" },
      { size: "40 x 60 (2,400 sq.ft)", price: "Inquire Now" },
    ],
    features: [
      "Four-Lane Main Road Touch",
      "Directly opposite D-Mart with massive footfall",
      "Ideal for Retail Showrooms, Clinics & Offices",
      "High Rental Yield & Capital Appreciation",
      "Surrounded by fast-expanding residential colonies",
      "100% Clear Title & Registry Ready"
    ],
    bookingOption: "Easy 25% Token Booking",
    highlights: "The most sought-after commercial stretch on Indore-Ujjain corridor with guaranteed customer traffic from morning till night."
  },
  {
    id: "highway-mega-commercial-plot",
    title: "15,000 Sq.Ft Mega Commercial Highway Plot",
    subtitle: "100' x 150' Prime Highway Land near Toll Plaza",
    location: "6-Lane Indore-Ujjain Highway (Near Toll Tax)",
    category: "Commercial Plot",
    type: "Highway Commercial",
    priceRange: "High Yield Investment",
    startingPrice: 15000000,
    pricePerSqft: "Negotiable Per Sq.Ft",
    badge: "Mega Land Parcel",
    featured: true,
    image: "/images/prop-highway-land.jpg",
    flyerImage: "/images/unnamed (10).png",
    configurations: [
      { size: "100' x 150' (15,000 sq.ft)", price: "Direct Owner Pricing" }
    ],
    features: [
      "Massive 100 Ft Frontage on 6-Lane Highway",
      "Ideal for Petrol Pump, Hotel / Resort, Showroom",
      "Perfect for Logistics Warehouse or Godown",
      "Nearby Landmarks: Chintaman Ganesh, Mansa Resort, VITS Hotel",
      "Near RKDF University and Industrial Corridor",
      "Seamless heavy vehicle transit & accessibility"
    ],
    bookingOption: "Flexible Terms for Institutional Investors",
    highlights: "Unbeatable strategic frontage on the busy 6-lane national artery connecting Indore's IT hub to Mahakal Nagari Ujjain."
  },
  {
    id: "shivansh-valley-corner-plot",
    title: "3,100 Sq.Ft Corner Plot - Shivansh Valley",
    subtitle: "Double Side Open Prime Residential/Commercial Plot",
    location: "Shivansh Valley, Dewas Road 4-Lane Colony, Ujjain",
    category: "Residential Plot",
    type: "Corner Plot",
    priceRange: "Best Rate Guarantee",
    startingPrice: 3800000,
    pricePerSqft: "Clear Title Rate",
    badge: "Corner Plot - 2 Side Open",
    featured: true,
    image: "/images/prop-corner-plot.jpg",
    flyerImage: "/images/unnamed (13).png",
    configurations: [
      { size: "3,100 Sq.Ft (Corner Unit)", price: "Ready Registry" }
    ],
    features: [
      "Dual Side Open Corner Location",
      "Located inside developed 4-lane touch colony",
      "Wide paved roads with direct streetlights",
      "Suitable for Luxury Bungalow or Commercial Facility",
      "Fastest developing residential sector of Dewas Road",
      "High demand area with guaranteed future resale value"
    ],
    bookingOption: "25% Booking Available",
    highlights: "Enjoy extraordinary natural ventilation, extra parking space, and prominent architectural elevation with this dual-side open plot."
  },
  {
    id: "triveni-vihar-commercial-plots",
    title: "Triveni Vihar Commercial Plots (A-Sector)",
    subtitle: "Strategic Commercial Spaces for Showroom & Offices",
    location: "Triveni Vihar, A Sector, Ujjain",
    category: "Commercial Plot",
    type: "Plot / Land",
    priceRange: "Prime Commercial Rates",
    startingPrice: 4200000,
    pricePerSqft: "A-Sector Valuation",
    badge: "A-Sector Prime",
    featured: false,
    image: "/images/prop-triveni-commercial.jpg",
    flyerImage: "/images/unnamed (8).png",
    configurations: [
      { size: "26 x 40 (1,040 sq.ft)", price: "Available" },
      { size: "30 x 50 (1,500 sq.ft)", price: "Available" },
      { size: "40 x 60 (2,400 sq.ft)", price: "Available" }
    ],
    features: [
      "Located in Established A-Sector Triveni Vihar",
      "High visibility area with wide main road access",
      "Surrounded by affluent residential townships",
      "Ideal for Shopping Complex, Hospital, Hotel or Office",
      "All municipal sanctions & clear documentation in place"
    ],
    bookingOption: "Immediate Registry & Possession",
    highlights: "A prestigious location for thriving business operations or high-return passive rental lease income."
  },
  {
    id: "shree-nath-ji-colony-plots",
    title: "Residential Plots - Shree Nath Ji Colony",
    subtitle: "Peaceful Family Neighborhood with Complete Amenities",
    location: "Shree Nath Ji Colony, Ujjain",
    category: "Residential Plot",
    type: "Township Plot",
    priceRange: "Affordable Family Plots",
    startingPrice: 2200000,
    pricePerSqft: "Economical Rates",
    badge: "Family Preferred",
    featured: false,
    image: "/images/prop-shreenath-colony.jpg",
    flyerImage: "/images/unnamed (5).png",
    configurations: [
      { size: "800 sq.ft / 1,000 sq.ft / 1,500 sq.ft", price: "Flexible Sizes" }
    ],
    features: [
      "Peaceful & Secure Residential Environment",
      "Full Electricity & Water Infrastructure ready",
      "Wide Paved Concrete Colony Roads",
      "Close proximity to Top Schools, Markets & Temples",
      "Instant construction permitted"
    ],
    bookingOption: "Low Down Payment Option",
    highlights: "Build your dream independent home in a friendly, secure colony with all basic civic infrastructure already installed."
  },
  {
    id: "tapobhoomi-dewas-bypass-land",
    title: "25 Bigha Land Parcel on 4-Lane Bypass",
    subtitle: "Golden Opportunity for Colony / Township Development",
    location: "Tapobhoomi towards Dewas 4-Lane Bypass, Ujjain",
    category: "Development Land",
    type: "Township Land",
    priceRange: "Direct Investor Terms",
    startingPrice: 35000000,
    pricePerSqft: "Per Bigha Rate",
    badge: "Mega Township Land",
    featured: true,
    image: "/images/prop-township-bypass.jpg",
    flyerImage: "/images/unnamed (2).png",
    configurations: [
      { size: "25 Bigha (Contiguous Block)", price: "Investor Pricing" }
    ],
    features: [
      "Direct 4-Lane Bypass Road Connectivity",
      "Level land ideal for plotted colony development",
      "Rapidly developing corridor towards Dewas & Indore",
      "High appreciation zone under master development plan",
      "Clear title ownership with single-source documentation"
    ],
    bookingOption: "Structured Payment Schedule",
    highlights: "A landmark parcel for visionary real estate colonizers looking to launch an integrated township with massive return on capital."
  },
  {
    id: "nagda-agricultural-farm-land",
    title: "77.6 Bigha Prime Agricultural Land & Farmhouse",
    subtitle: "Equipped Farm with Borewells, Transformer & Boundary",
    location: "1.5 km from Nagda City, near Nagda Dam & Ashram",
    category: "Agricultural Land",
    type: "Farm Land",
    priceRange: "Comprehensive Agro Asset",
    startingPrice: 48000000,
    pricePerSqft: "Per Bigha Agro Rate",
    badge: "Fully Equipped Agro Asset",
    featured: false,
    image: "/images/prop-agro-orchard.jpg",
    flyerImage: "/images/unnamed.png",
    configurations: [
      { size: "77.6 Bigha Farm Estate", price: "Direct Negotiation" }
    ],
    features: [
      "5 Working Borewells, 4 Submersibles & 2 Wells",
      "3 Dedicated High-Voltage Transformers",
      "RCC Double Storey Farmhouse (20x60)",
      "Large Storage Godown (3000+ sq.ft) with Net House",
      "Fully Fenced Boundary for total security",
      "Planted with Guava (58 Bigha), Grapes (3 Bigha) & Bananas (2 Bigha)"
    ],
    bookingOption: "Clear Title Registry",
    highlights: "An extraordinary turn-key agricultural and farmhouse investment with mature fruit orchards, independent power & abundant water."
  }
];

export const propertiesData = rawProperties.map(p => ({
  ...p,
  image: getAssetUrl(p.image),
  flyerImage: getAssetUrl(p.flyerImage),
  altImage: p.altImage ? getAssetUrl(p.altImage) : undefined
}));

export const servicesData = [
  {
    id: "luxury-property-buying-sales",
    title: "Luxury Property Buying and Sales",
    category: "Residential & Luxury",
    badge: "Signature Collection",
    icon: "Sparkles",
    isHomeFeatured: true,
    shortDesc: "Bespoke brokerage for premier bungalows, designer duplexes, and luxury farm estates along the Indore-Ujjain corridor.",
    fullDesc: "We curate the finest residential luxury homes in Ujjain's most sought-after nodes. From custom-built duplex villas opposite D-Mart to expansive rural farmhouses, our advisory ensures prestigious living with verified clear titles.",
    items: [
      "Signature 25% Token Booking arrangement",
      "Ready-to-move & custom architectural duplexes",
      "Confidential high-net-worth deal handling",
      "Complete Vastu compliance & luxury interior reviews"
    ]
  },
  {
    id: "commercial-property-buying-sales",
    title: "Commercial Property Buying and Sales",
    category: "Commercial & Land",
    badge: "High ROI Frontage",
    icon: "Building2",
    isHomeFeatured: true,
    shortDesc: "Acquisition and sale of prime 4-lane & 6-lane touch commercial plots, retail showrooms, and highway development assets.",
    fullDesc: "Accelerate your enterprise or rental yield portfolio with high-traffic commercial land on the bustling Indore-Ujjain Highway. We broker verified frontage plots opposite D-Mart and near Toll Plaza designed for showrooms, bank branches, and retail hubs.",
    items: [
      "4-lane & 6-lane highway touch commercial plots",
      "Plots from 1,040 sq.ft to 15,000+ sq.ft frontage",
      "Comprehensive zoning & masterplan verification",
      "Direct owner negotiations without middleman markups"
    ]
  },
  {
    id: "land-buying-sales",
    title: "Land Buying and Sales",
    category: "Commercial & Land",
    badge: "100% Registry Ready",
    icon: "Map",
    isHomeFeatured: true,
    shortDesc: "End-to-end facilitation for colony residential plots, corner parcels, agro-farm estates, and strategic highway land.",
    fullDesc: "Whether securing a 600–2,400 sq.ft residential plot in Shivansh Valley, Dewas Road, or a vast 77-bigha agricultural orchard, Ambition Real Estate delivers spotless registry diligence, demarcation, and spot possession.",
    items: [
      "Approved gated colony plots & corner parcels",
      "Large-scale agricultural land with independent tubewells",
      "Spot physical demarcation and boundary fencing assistance",
      "Mutation, diversion, and sub-registrar paperwork support"
    ]
  },
  {
    id: "comparative-property-market-analysis",
    title: "Comparative Property Market Analysis",
    category: "Advisory & Consulting",
    badge: "Data-Backed Precision",
    icon: "BarChart3",
    isHomeFeatured: true,
    shortDesc: "Scientific valuation reports comparing historical sales, circle rates, and infrastructure roadmaps across Ujjain.",
    fullDesc: "Make informed buying or selling decisions backed by concrete data. Our Comparative Market Analysis (CMA) models recent registry rates, four-lane expansion impacts, and future Simhastha appreciation benchmarks so you never overpay or undersell.",
    items: [
      "Government guideline (circle rate) vs real market analysis",
      "Infrastructure corridor appreciation forecasting",
      "Fair market value appraisal for buyers and sellers",
      "Investment payback and capitalization rate estimates"
    ]
  },
  {
    id: "buying-agent-services",
    title: "Buying Agent Services",
    category: "Client Representation",
    badge: "Buyer's Fiduciary",
    icon: "UserCheck",
    isHomeFeatured: false,
    shortDesc: "Dedicated buyer representation focused on locating properties matching your exact budget and location criteria.",
    fullDesc: "As your dedicated buying agent, we represent only your best interests. We filter through off-market listings, conduct rigorous price counter-negotiations, verify title chains, and protect your capital from fraudulent deals.",
    items: [
      "Targeted property search tailored to your specific budget",
      "Rigorous price counter-negotiation on your behalf",
      "Zero hidden fees and transparent brokerage terms",
      "Accompanied site visits with Senior Advisor Ujjwal Tiwari"
    ]
  },
  {
    id: "sellers-agent-services",
    title: "Seller's Agent Services",
    category: "Client Representation",
    badge: "Maximum Valuation",
    icon: "ShieldCheck",
    isHomeFeatured: false,
    shortDesc: "Professional property marketing, flyer distribution, qualified buyer vetting, and seamless closing for property owners.",
    fullDesc: "Sell your land, home, or commercial space faster and at maximum market value. We leverage verified investor networks, digital marketing, local flyer distribution, and pre-screen serious buyers with verified purchasing power.",
    items: [
      "Professional promotional flyers and marketing campaigns",
      "Direct exposure to 1,000+ active Ujjain & Indore investors",
      "Screening of qualified buyers to eliminate time-wasters",
      "Complete closing facilitation and legal transfer assistance"
    ]
  },
  {
    id: "home-buying-and-sales",
    title: "Home Buying and Sales",
    category: "Residential & Luxury",
    badge: "Ready-to-Move",
    icon: "Home",
    isHomeFeatured: false,
    shortDesc: "Connecting families with ready-to-move and under-construction independent houses, duplexes, and family villas.",
    fullDesc: "From 15x40 starter duplexes to expansive 25x50 family residences, we streamline your journey to homeownership. We coordinate bank loan approvals, structure flexible token down payments, and inspect construction quality.",
    items: [
      "Pre-screened independent houses and duplexes",
      "Tie-ups with leading national banks for home loans",
      "Assistance with water, electricity, and municipal sanctions",
      "Move-in ready handovers with clear occupancy"
    ]
  },
  {
    id: "commercial-property-consulting",
    title: "Commercial Property Consulting",
    category: "Commercial & Land",
    badge: "Yield Optimization",
    icon: "Briefcase",
    isHomeFeatured: false,
    shortDesc: "Strategic consulting for commercial development, tenant positioning, rental yield modeling, and asset repositioning.",
    fullDesc: "Unlock the maximum commercial potential of your highway property. We evaluate foot traffic demographics, optimal commercial zoning, frontage utilization, and lease terms for corporate tenants, showrooms, and retail franchises.",
    items: [
      "Footfall & vehicular traffic density assessment",
      "Corporate franchise & banking tenant suitability analysis",
      "Commercial lease structuring & rental yield maximization",
      "Highway access and municipal commercial clearance guidance"
    ]
  },
  {
    id: "new-construction-services",
    title: "New Construction Services",
    category: "Residential & Luxury",
    badge: "Turnkey Quality",
    icon: "Hammer",
    isHomeFeatured: false,
    shortDesc: "Supervision, contractor coordination, and turnkey construction management for custom-built homes and commercial units.",
    fullDesc: "Own a plot and want to build your dream home or commercial showroom? We connect you with vetted architects, RCC engineers, and material suppliers, supervising build phases to ensure structural durability and timely completion.",
    items: [
      "Architectural planning & 2D/3D elevation coordination",
      "RCC structural supervision & material quality audits",
      "Cost budgeting and milestone-based contractor payments",
      "Municipal building permission and completion approvals"
    ]
  },
  {
    id: "property-development-consulting",
    title: "Property Development Consulting",
    category: "Advisory & Consulting",
    badge: "Township Masterplans",
    icon: "Compass",
    isHomeFeatured: false,
    shortDesc: "Holistic advisory for colonization projects, private townships, plotted layouts, and diversion approvals.",
    fullDesc: "We assist land aggregators and builders in conceptualizing high-demand colonies and commercial strips. From layout designing with optimal road widths to TNCP / RERA documentation and marketing launch strategies.",
    items: [
      "Colony plotted layout planning (roads, drainage, gardens)",
      "Agricultural-to-Non-Agricultural (Diversion) advisory",
      "TNCP, RERA, and local municipality compliance roadmap",
      "Pre-launch marketing, flyer design, and sales strategy"
    ]
  },
  {
    id: "property-investment-consulting",
    title: "Property Investment Consulting",
    category: "Advisory & Consulting",
    badge: "Wealth Creation",
    icon: "TrendingUp",
    isHomeFeatured: false,
    shortDesc: "Portfolio advisory targeting high-growth corridors primed for Simhastha 2028 infrastructure capital appreciation.",
    fullDesc: "Identify high-velocity growth corridors before prices skyrocket. We advise individual and institutional investors on phased land banking, rental yield properties, and commercial opportunities along the Indore-Ujjain economic corridor.",
    items: [
      "Simhastha 2028 infrastructure impact projections",
      "Corridor analysis: Indore Rd vs Dewas Rd vs Sanwer Bypass",
      "Calculated entry & exit strategy for maximum ROI",
      "Risk assessment and portfolio diversification"
    ]
  },
  {
    id: "property-sales",
    title: "Property Sales",
    category: "Client Representation",
    badge: "Swift Liquidation",
    icon: "Coins",
    isHomeFeatured: false,
    shortDesc: "Direct liquidation services for residential plots, commercial units, and agricultural parcels at competitive market values.",
    fullDesc: "Need to liquidate an existing real estate asset? Our network ensures quick buyer matching, prompt token collection, verified escrow coordination, and seamless execution of sub-registrar deeds without legal delays.",
    items: [
      "Immediate matching with pre-vetted buyer waitlists",
      "Clear token booking contracts to prevent defaults",
      "Assistance clearing encumbrances and municipal taxes",
      "Full settlement and legal registry handoff"
    ]
  },
  {
    id: "residential-property-consulting",
    title: "Residential Property Consulting",
    category: "Residential & Luxury",
    badge: "Family Focus",
    icon: "FileSearch",
    isHomeFeatured: false,
    shortDesc: "Personalized guidance on neighbourhood safety, water tables, connectivity, and long-term livability for families.",
    fullDesc: "Choosing a family home requires looking beyond just square footage. We provide unvarnished advice on water quality, electricity stability, school bus routes, safety, and colony maintenance so you make the best choice for your family.",
    items: [
      "Water source & groundwater feasibility checks",
      "Connectivity to major schools, hospitals, and transit hubs",
      "Gated community security and resident association reviews",
      "Resale liquidity and long-term capital preservation"
    ]
  }
];


export const testimonials = [
  {
    name: "Rajendra Sharma",
    role: "Homeowner, Indore Road Duplex",
    rating: 5,
    comment: "Ambition Real Estate made our dream home opposite D-Mart a reality. The 25% booking option was smooth, and Ujjwal ji handled all registry paperwork with complete transparency."
  },
  {
    name: "Vikram Patel",
    role: "Commercial Investor",
    rating: 5,
    comment: "Secured a 4-lane touch commercial plot near D-Mart through Ambition Real Estate. Excellent market knowledge of Ujjain corridor and zero hidden charges. Highly recommended!"
  },
  {
    name: "Dr. Aniruddh Joshi",
    role: "Plot Buyer, Shree Nath Ji Colony",
    rating: 5,
    comment: "Honest advice, prompt site visits, and clear title verification. Rated them 5 stars on Google without hesitation."
  }
];
