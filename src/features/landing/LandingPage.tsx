import HeroSection from './sections/HeroSection';
import TrustedBySection from './sections/TrustedBySection';
import IntroductionSection from './sections/IntroductionSection';
import ServicesSection from './sections/ServicesSection';
import PortfolioSection from './sections/PortfolioSection';
import PricingSection from './sections/PricingSection';
import TestimonialsSection from './sections/TestimonialsSection';

export default function LandingPage() {
  return (
    <div className="pt-20">
      <HeroSection />
      <TrustedBySection />
      <IntroductionSection />
      <ServicesSection />
      <PortfolioSection />
      <PricingSection />
      <TestimonialsSection />
    </div>
  );
}