export interface Service {
  id: string;
  title: string;
  description: string;
  icon: any;
}

export const services: Service[] = [
  {
    id: 'website-development',
    title: "Website Development",
    description: "Custom websites built with modern technology",
    icon: null, // Will be set in component
  },
  {
    id: 'regular-maintenance',
    title: "Regular Maintenance", 
    description: "Keep your site updated and running smoothly",
    icon: null,
  },
  {
    id: 'speed-optimization',
    title: "Speed Optimization",
    description: "Fast loading times for better user experience",
    icon: null,
  },
  {
    id: 'website-security',
    title: "Website Security",
    description: "Protect your site from threats and attacks",
    icon: null,
  },
  {
    id: 'automatic-backup',
    title: "Automatic Backup",
    description: "Daily backups to keep your data safe",
    icon: null,
  },
  {
    id: 'plugin-integration',
    title: "Plugin Integration",
    description: "Seamless integration with essential tools",
    icon: null,
  }
];