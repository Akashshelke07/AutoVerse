import React from 'react';
import { motion } from 'framer-motion';
import { useScrollShadow } from '../hooks/useScrollShadow';
import { cn } from '../utils/cn';

const NAV_LINKS = ['HOME', 'CARS', 'SERVICES', 'ABOUT US'];

const Navbar: React.FC = () => {
  const isScrolled = useScrollShadow();
  const [hoveredLink, setHoveredLink] = React.useState<string | null>(null);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white border-b border-primary",
        isScrolled ? "shadow-elegant py-4" : "py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between relative">
        {/* Logo/Wordmark */}
        <div className="text-[24px] font-bold font-serif uppercase tracking-tighter text-primary">
          AutoVerse
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-x-8 xl:gap-x-12 relative">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(' ', '-')}`}
              className="relative text-[12px] xl:text-[14px] font-medium font-sans tracking-widest text-primary hover:text-accent transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] whitespace-nowrap"
              onMouseEnter={() => setHoveredLink(link)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              {link}
              {hoveredLink === link && (
                <>
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 w-full h-[2px] bg-accent"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                  />
                  {/* Micro-dot follow */}
                  <motion.div
                    layoutId="dot"
                    className="absolute -top-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                </>
              )}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex items-center">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-primary px-6 py-3 font-sans text-[11px] xl:text-[13px] uppercase tracking-widest bg-primary text-white whitespace-nowrap transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] shadow-elegant hover:bg-neutral-800"
          >
            Book a Test Drive
          </motion.button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
