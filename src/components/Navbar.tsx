import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useScrollShadow } from '../hooks/useScrollShadow';
import { cn } from '../utils/cn';

const NAV_LINKS = ['HOME', 'CARS', 'SERVICES', 'ABOUT US'];

const Navbar: React.FC = () => {
  const isScrolled = useScrollShadow();
  const [hoveredLink, setHoveredLink] = React.useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // Lock scroll when menu is open
  React.useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav
      className={cn(
        "absolute top-0 left-0 w-full z-50 transition-all duration-300 pointer-events-none",
        isScrolled ? "pt-4" : "pt-8"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between relative pointer-events-auto">
        {/* Logo */}
        <div className="z-50 flex items-center bg-white rounded-full shadow-elegant px-5 py-2 border border-border-light/50">
          <img src="/images/autoverse-logo.png" alt="AutoVerse Logo" className="h-12 md:h-16 w-auto object-contain mix-blend-multiply" />
        </div>

        {/* Desktop Navigation & CTA wrapped in pill */}
        <div className="hidden lg:flex items-center gap-x-8 xl:gap-x-12 bg-white px-8 py-3 rounded-[3rem] shadow-elegant border border-border-light/50 relative">
          <div className="flex items-center gap-x-8 xl:gap-x-12">
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

          <div className="w-[1px] h-6 bg-border-light hidden lg:block"></div>

          <motion.a 
            href="#/test-drive"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-primary px-6 py-2.5 md:px-8 md:py-3 font-sans text-[11px] xl:text-[13px] uppercase tracking-widest bg-primary text-white whitespace-nowrap transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] shadow-elegant hover:bg-neutral-800 rounded-full inline-block text-center"
          >
            Book a Test Drive
          </motion.a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center z-50 bg-white rounded-full shadow-elegant p-3 border border-border-light/50">
          <button 
            onClick={toggleMenu}
            className="text-primary hover:text-accent transition-colors duration-300"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Overlay Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-0 bg-white z-40 lg:hidden flex flex-col items-center justify-center pt-20"
            >
              <div className="flex flex-col items-center space-y-10">
                {NAV_LINKS.map((link, index) => (
                  <motion.a
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    key={link}
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    onClick={closeMenu}
                    className="text-[24px] font-serif font-bold tracking-widest text-primary hover:text-accent transition-all duration-300"
                  >
                    {link}
                  </motion.a>
                ))}
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: NAV_LINKS.length * 0.1 + 0.3 }}
                  className="pt-10"
                >
                  <a 
                    href="#/test-drive"
                    className="btn btn-primary px-8 py-4 font-sans text-[13px] uppercase tracking-widest inline-block text-center"
                    onClick={closeMenu}
                  >
                    Book a Test Drive
                  </a>
                </motion.div>
              </div>

              {/* Decorative elements for mobile menu */}
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20 text-[11px] font-sans tracking-widest uppercase">
                &copy; AutoVerse 2026
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
