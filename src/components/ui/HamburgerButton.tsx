'use client';

interface HamburgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export default function HamburgerButton({ isOpen, onClick }: HamburgerButtonProps) {
  return (
    <button
      onClick={onClick}
      className="md:hidden w-10 h-10 flex flex-col items-center justify-center space-y-1 hover:bg-zinc-800/50 rounded-lg transition-colors"
      aria-label="Toggle menu"
    >
      <span 
        className={`w-6 h-0.5 bg-white transition-all duration-300 ${
          isOpen ? 'rotate-45 translate-y-2' : ''
        }`}
      />
      <span 
        className={`w-6 h-0.5 bg-white transition-all duration-300 ${
          isOpen ? 'opacity-0' : ''
        }`}
      />
      <span 
        className={`w-6 h-0.5 bg-white transition-all duration-300 ${
          isOpen ? '-rotate-45 -translate-y-2' : ''
        }`}
      />
    </button>
  );
}