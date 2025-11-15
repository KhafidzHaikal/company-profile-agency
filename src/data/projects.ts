export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  results: Record<string, string>;
  client: {
    name: string;
    industry: string;
    location: string;
    projectManager: string;
  };
  timeline: {
    start: string;
    end: string;
    duration: string;
  };
  challenges: string[];
  solutions: string[];
  features: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "TechStart Solutions",
    category: "Web Development",
    description: "Modern corporate website with advanced animations and CMS integration",
    fullDescription: "A comprehensive digital transformation project for TechStart Solutions, featuring a modern corporate website with advanced animations, seamless CMS integration, and optimized performance. The project included complete brand alignment, user experience optimization, and conversion rate improvements.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    technologies: ["React", "Next.js", "Tailwind CSS", "Strapi", "Framer Motion", "TypeScript"],
    liveUrl: "#",
    githubUrl: "#",
    results: {
      traffic: "+150%",
      conversion: "+85%",
      performance: "98/100",
      bounce: "-45%"
    },
    client: {
      name: "TechStart Solutions Inc.",
      industry: "Technology Consulting",
      location: "San Francisco, CA",
      projectManager: "Sarah Johnson"
    },
    timeline: {
      start: "Jan 2024",
      end: "Mar 2024",
      duration: "3 months"
    },
    challenges: [
      "Legacy system integration with modern frontend",
      "Complex animation requirements affecting performance",
      "Multi-language content management needs"
    ],
    solutions: [
      "Implemented headless CMS architecture for flexible content management",
      "Optimized animations using Framer Motion with performance monitoring",
      "Built custom internationalization system with dynamic content loading"
    ],
    features: [
      "Responsive design across all devices",
      "Advanced animation system",
      "SEO optimized structure",
      "Content Management System",
      "Performance monitoring",
      "Multi-language support"
    ]
  },
  {
    id: 2,
    title: "ShopFlow E-commerce",
    category: "E-commerce",
    description: "Complete e-commerce platform with payment integration and inventory management",
    fullDescription: "A full-scale e-commerce solution built for ShopFlow, featuring advanced payment processing, real-time inventory management, and comprehensive analytics. The platform handles high-volume transactions with seamless user experience and robust security measures.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    technologies: ["Next.js", "Stripe", "PostgreSQL", "Prisma", "Redis", "AWS"],
    liveUrl: "#",
    githubUrl: "#",
    results: {
      sales: "+200%",
      users: "10K+",
      revenue: "$500K+",
      retention: "85%"
    },
    client: {
      name: "ShopFlow Commerce Ltd.",
      industry: "E-commerce",
      location: "New York, NY",
      projectManager: "Michael Chen"
    },
    timeline: {
      start: "Feb 2024",
      end: "Jun 2024",
      duration: "4 months"
    },
    challenges: [
      "High-volume transaction processing requirements",
      "Complex inventory synchronization across multiple channels",
      "PCI compliance and security standards"
    ],
    solutions: [
      "Implemented microservices architecture for scalable transaction processing",
      "Built real-time inventory sync system with conflict resolution",
      "Achieved PCI DSS compliance with end-to-end encryption"
    ],
    features: [
      "Multi-vendor marketplace",
      "Real-time inventory tracking",
      "Advanced payment processing",
      "Order management system",
      "Analytics dashboard",
      "Mobile-responsive design"
    ]
  },
  {
    id: 3,
    title: "FitTracker Mobile",
    category: "Mobile App",
    description: "Cross-platform fitness tracking app with real-time analytics",
    fullDescription: "A comprehensive fitness tracking mobile application that provides real-time analytics, personalized workout plans, and social features. Built with React Native for cross-platform compatibility and integrated with wearable devices for seamless health monitoring.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
    technologies: ["React Native", "Firebase", "Redux", "Chart.js", "HealthKit", "Google Fit"],
    liveUrl: "#",
    githubUrl: "#",
    results: {
      downloads: "50K+",
      rating: "4.8/5",
      retention: "75%",
      engagement: "+120%"
    },
    client: {
      name: "FitLife Technologies",
      industry: "Health & Fitness",
      location: "Austin, TX",
      projectManager: "Emily Rodriguez"
    },
    timeline: {
      start: "Mar 2024",
      end: "Jul 2024",
      duration: "5 months"
    },
    challenges: [
      "Cross-platform compatibility with native device features",
      "Real-time data synchronization across devices",
      "Battery optimization for continuous tracking"
    ],
    solutions: [
      "Utilized React Native with native modules for device-specific features",
      "Implemented offline-first architecture with smart sync",
      "Optimized background processes and implemented intelligent tracking modes"
    ],
    features: [
      "Wearable device integration",
      "Real-time fitness tracking",
      "Personalized workout plans",
      "Social sharing features",
      "Progress analytics",
      "Offline mode support"
    ]
  },
  {
    id: 4,
    title: "Creative Studio Brand",
    category: "Branding",
    description: "Complete brand identity design with logo, guidelines, and marketing materials",
    fullDescription: "A comprehensive brand identity project for Creative Studio, including logo design, brand guidelines, marketing materials, and digital assets. The project focused on creating a cohesive visual identity that reflects the studio's creative excellence and professional approach.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
    technologies: ["Adobe Creative Suite", "Figma", "Brand Strategy", "Print Design", "Web Design"],
    liveUrl: "#",
    githubUrl: "#",
    results: {
      recognition: "+300%",
      engagement: "+120%",
      leads: "+180%",
      conversion: "+95%"
    },
    client: {
      name: "Creative Studio Inc.",
      industry: "Design & Marketing",
      location: "Los Angeles, CA",
      projectManager: "David Thompson"
    },
    timeline: {
      start: "Jan 2024",
      end: "Apr 2024",
      duration: "3 months"
    },
    challenges: [
      "Differentiating in a saturated creative market",
      "Balancing creativity with professional credibility",
      "Ensuring brand consistency across multiple touchpoints"
    ],
    solutions: [
      "Developed unique visual language based on geometric precision and creative flow",
      "Created comprehensive brand guidelines with clear usage rules",
      "Implemented brand management system for consistent application"
    ],
    features: [
      "Complete logo system",
      "Brand guidelines document",
      "Marketing collateral design",
      "Digital asset library",
      "Website design system",
      "Social media templates"
    ]
  },
  {
    id: 5,
    title: "DataViz Dashboard",
    category: "Web Development",
    description: "Interactive data visualization dashboard for business analytics",
    fullDescription: "An advanced business intelligence dashboard featuring interactive data visualizations, real-time analytics, and comprehensive reporting tools. Built to handle large datasets with optimized performance and intuitive user interface for data-driven decision making.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    technologies: ["Vue.js", "D3.js", "Node.js", "MongoDB", "WebSocket", "Docker"],
    liveUrl: "#",
    githubUrl: "#",
    results: {
      efficiency: "+90%",
      insights: "Real-time",
      users: "5K+",
      accuracy: "99.5%"
    },
    client: {
      name: "DataInsights Corp.",
      industry: "Business Intelligence",
      location: "Seattle, WA",
      projectManager: "Lisa Wang"
    },
    timeline: {
      start: "Apr 2024",
      end: "Aug 2024",
      duration: "4 months"
    },
    challenges: [
      "Processing and visualizing large datasets in real-time",
      "Creating intuitive interface for complex data relationships",
      "Ensuring data accuracy and system reliability"
    ],
    solutions: [
      "Implemented data streaming architecture with optimized queries",
      "Designed progressive disclosure UI with contextual help system",
      "Built comprehensive testing suite with automated data validation"
    ],
    features: [
      "Real-time data streaming",
      "Interactive visualizations",
      "Custom report builder",
      "Data export capabilities",
      "User role management",
      "Mobile-responsive design"
    ]
  },
  {
    id: 6,
    title: "RestaurantPro POS",
    category: "E-commerce",
    description: "Point of sale system for restaurants with inventory and staff management",
    fullDescription: "A comprehensive point-of-sale system designed specifically for restaurants, featuring order management, inventory tracking, staff scheduling, and customer relationship management. The system integrates with kitchen displays and payment processors for seamless operations.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
    technologies: ["React", "Express.js", "MySQL", "Socket.io", "Stripe", "PWA"],
    liveUrl: "#",
    githubUrl: "#",
    results: {
      orders: "+250%",
      efficiency: "+60%",
      satisfaction: "95%",
      errors: "-80%"
    },
    client: {
      name: "Restaurant Solutions LLC",
      industry: "Restaurant Technology",
      location: "Chicago, IL",
      projectManager: "James Wilson"
    },
    timeline: {
      start: "May 2024",
      end: "Sep 2024",
      duration: "4 months"
    },
    challenges: [
      "High-pressure restaurant environment requiring zero downtime",
      "Integration with existing kitchen equipment and workflows",
      "Training staff on new system during busy operations"
    ],
    solutions: [
      "Built offline-capable PWA with automatic sync when connection restored",
      "Developed gradual migration strategy with parallel system operation",
      "Created intuitive interface with minimal learning curve and comprehensive training materials"
    ],
    features: [
      "Order management system",
      "Inventory tracking",
      "Staff scheduling",
      "Kitchen display integration",
      "Payment processing",
      "Analytics and reporting"
    ]
  }
];

export const projectFilters = ['All', 'Web Development', 'E-commerce', 'Mobile App', 'Branding'];