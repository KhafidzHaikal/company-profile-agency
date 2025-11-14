import { FaTwitter, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const footerSections = [
    {
      title: "Services",
      links: [
        "Website Development",
        "Website Maintenance", 
        "Speed Optimization",
        "Website Security",
        "Migration Services"
      ]
    },
    {
      title: "Company",
      links: [
        "About Us",
        "Our Team",
        "Careers",
        "Blog",
        "Contact"
      ]
    },
    {
      title: "Resources",
      links: [
        "Portfolio",
        "Case Studies",
        "Documentation",
        "Support",
        "FAQ"
      ]
    },
    {
      title: "Legal",
      links: [
        "Privacy Policy",
        "Terms of Service",
        "Cookie Policy",
        "GDPR Compliance"
      ]
    }
  ];

  const socialLinks = [
    { icon: FaTwitter, href: "#", label: "Twitter" },
    { icon: FaLinkedin, href: "#", label: "LinkedIn" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaEnvelope, href: "mailto:contact@artatiga.com", label: "Email" }
  ];

  return (
    <footer className="bg-zinc-900 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-white text-black rounded font-bold flex items-center justify-center">
                CA
              </div>
              <div>
                <div className="font-bold text-white text-lg">Creative Agency</div>
                <div className="text-sm text-zinc-400">Design the future</div>
              </div>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6 max-w-sm">
              We provide comprehensive web solutions with cutting-edge technology and expert support for your business growth.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-zinc-800 hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-500 rounded-full flex items-center justify-center transition-all duration-300"
                  >
                    <IconComponent className="w-5 h-5 text-zinc-400 hover:text-white" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-zinc-400 hover:text-white text-sm transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-zinc-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-zinc-400">
              <span>© Artatiga, 2024</span>
              <a href="mailto:contact@artatiga.com" className="hover:text-white transition-colors duration-300">
                contact@artatiga.com
              </a>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-zinc-400 hover:text-white transition-colors duration-300">
                Cookie Policy
              </a>
              <a href="#" className="text-zinc-400 hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}