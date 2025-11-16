export interface Service {
  id: string;
  title: string;
  description: string;
  icon: any;
}

export const services: Service[] = [
  {
    id: 'website-development',
    title: "Website & App Development",
    description: "Build websites and applications from scratch using modern tools",
    icon: null, // Will be set in component
  },
  {
    id: 'regular-maintenance',
    title: "Maintenance & Updates", 
    description: "Regular updates, backups, and system maintenance",
    icon: null,
  },
  {
    id: 'speed-optimization',
    title: "SEO Optimization",
    description: "Improve search engine visibility and performance",
    icon: null,
  },
  {
    id: 'website-security',
    title: "Platform Migration",
    description: "Migrate websites to newer, better systems",
    icon: null,
  },
  {
    id: 'automatic-backup',
    title: "UI/UX Design",
    description: "User-friendly application design and prototyping",
    icon: null,
  },
  {
    id: 'plugin-integration',
    title: "Modern Methodology",
    description: "Agile, Scrum, and Design Thinking approaches",
    icon: null,
  }
];