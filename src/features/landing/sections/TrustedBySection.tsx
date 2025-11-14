/* eslint-disable @next/next/no-img-element */
'use client';

import { SiGoogle, SiApple, SiNetflix, SiSpotify, SiAdobe, SiAirbnb, SiUber, SiAmazon } from 'react-icons/si';
import { FaMicrosoft } from 'react-icons/fa';

export default function TrustedBySection() {
  const companies = [
    { name: "Apple", icon: SiApple },
    { name: "Microsoft", icon: FaMicrosoft },
    { name: "Google", icon: SiGoogle },
    { name: "Netflix", icon: SiNetflix },
    { name: "Spotify", icon: SiSpotify },
    { name: "Adobe", icon: SiAdobe },
    { name: "Airbnb", icon: SiAirbnb },
    { name: "Amazon", icon: SiAmazon },
  ];

  return (
    <section className="py-16 bg-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-zinc-400 mb-12">
          More than 500+ companies trust Creative Agency
        </p>
        
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-infinite">
            {Array(20).fill(companies).flat().map((company, index) => {
              const IconComponent = company.icon;
              return (
                <div key={index} className="flex flex-col items-center mx-12 flex-shrink-0">
                  <IconComponent className="h-8 w-8 text-white opacity-60" />
                  <span className="text-xs text-zinc-400 mt-2 whitespace-nowrap">{company.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll-infinite {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100px * 8)); }
        }
        .animate-scroll-infinite {
          animation: scroll-infinite 10s linear infinite;
        }
      `}</style>
    </section>
  );
}