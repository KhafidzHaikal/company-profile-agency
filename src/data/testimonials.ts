export interface Testimonial {
  name: string;
  position: string;
  company: string;
  review: string;
  rating: number;
  avatar: string;
  projectValue?: string;
  results?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    position: "CEO at TechStart",
    company: "TechStart Solutions",
    review: "Artatiga transformed our digital presence completely. Their team delivered a stunning website that perfectly captures our brand identity and drives real business results.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Michael Chen",
    position: "Project Manager",
    company: "Digital Innovations",
    review: "Working with Artatiga was seamless. They understood our requirements perfectly and delivered beyond expectations. The ongoing maintenance service is exceptional.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Emily Rodriguez",
    position: "Marketing Director",
    company: "Creative Agency Co",
    review: "The migration process was flawless and the new website performance is incredible. Artatiga's expertise in web development is truly outstanding.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "David Thompson",
    position: "Founder",
    company: "StartupHub",
    review: "From concept to launch, Artatiga provided exceptional service. Their attention to detail and technical expertise made our project a huge success.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Lisa Wang",
    position: "CTO",
    company: "InnovateTech",
    review: "The API integration and automation solutions provided by Artatiga have streamlined our operations significantly. Highly recommended for any tech project.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face"
  }
];

export const portfolioTestimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    position: "CEO",
    company: "TechStart Solutions",
    review: "Working with Creative Agency was a game-changer for our business. They delivered a website that not only looks stunning but also increased our conversion rate by 150%. The team's attention to detail and technical expertise is unmatched.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    projectValue: "$50K",
    results: "150% increase in conversions"
  },
  {
    name: "Michael Chen",
    position: "Founder",
    company: "ShopFlow E-commerce",
    review: "The e-commerce platform they built for us generated over $500K in revenue within the first 6 months. Their understanding of user experience and business needs is exceptional. Highly recommended!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    projectValue: "$75K",
    results: "$500K+ revenue generated"
  },
  {
    name: "Emily Rodriguez",
    position: "Product Manager",
    company: "FitTracker Mobile",
    review: "Our mobile app reached 50K downloads in just 3 months thanks to their incredible development skills. The app performance is flawless and user feedback has been overwhelmingly positive.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    projectValue: "$40K",
    results: "50K+ app downloads"
  },
  {
    name: "David Thompson",
    position: "Marketing Director",
    company: "Creative Studio",
    review: "The complete brand identity they created for us increased our brand recognition by 300%. Every piece of the branding package was perfectly crafted and aligned with our vision.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    projectValue: "$25K",
    results: "300% brand recognition increase"
  }
];