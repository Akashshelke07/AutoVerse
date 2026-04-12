import { ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white pt-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Column 1 - Brand */}
          <div className="space-y-8">
            <h2 className="text-32px font-serif font-bold tracking-tighter text-primary uppercase">
              AutoVerse
            </h2>
            <p className="text-15px font-sans text-secondary leading-relaxed max-w-xs">
              Redefining the automotive experience in India through precision, technology, and transparency.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-12 h-12 border border-border-light flex items-center justify-center rounded-2xl hover:bg-primary hover:text-white transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] shadow-elegant-sm" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="w-12 h-12 border border-border-light flex items-center justify-center rounded-2xl hover:bg-primary hover:text-white transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] shadow-elegant-sm" aria-label="X (formerly Twitter)">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg>
              </a>
              <a href="#" className="w-12 h-12 border border-border-light flex items-center justify-center rounded-2xl hover:bg-primary hover:text-white transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] shadow-elegant-sm" aria-label="YouTube">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 2-2h15a2 2 0 0 1 2 2 24.12 24.12 0 0 1 0 10 2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2z"/><path d="m10 15 5-3-5-3z"/></svg>
              </a>
              <a href="#" className="w-12 h-12 border border-border-light flex items-center justify-center rounded-2xl hover:bg-primary hover:text-white transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] shadow-elegant-sm" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2 - Links */}
          <div className="space-y-8">
            <h4 className="text-[11px] font-sans font-bold tracking-widest uppercase text-accent">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'Cars', 'Services', 'About Us'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-[14px] font-sans font-medium text-primary hover:text-accent transition-all duration-300 uppercase tracking-wider">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div className="space-y-8">
            <h4 className="text-[11px] font-sans font-bold tracking-widest uppercase text-accent">Connect</h4>
            <ul className="space-y-4 text-[14px] font-sans font-medium text-primary uppercase tracking-wider">
              <li>122, Nariman Point</li>
              <li>Mumbai, MH 400021</li>
              <li className="pt-4 text-secondary">+91 22 4567 8900</li>
              <li className="text-secondary lowercase">info@autoverse.com</li>
            </ul>
          </div>

          {/* Column 4 - Newsletter */}
          <div className="space-y-8">
            <h4 className="text-[11px] font-sans font-bold tracking-widest uppercase text-accent">Stay Ahead</h4>
            <div className="relative flex flex-col space-y-4">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS"
                className="w-full border border-border-light rounded-2xl py-4 px-6 bg-transparent text-[11px] font-sans tracking-widest focus:outline-none focus:border-primary transition-all duration-300 placeholder:text-neutral-400"
              />
              <button 
                className="w-full btn btn-primary py-4 rounded-2xl shadow-elegant hover:bg-neutral-800 transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
              >
                JOIN THE CLUB
              </button>
            </div>
            <p className="text-[11px] font-sans text-secondary italic">
              Receive updates on new collections and exclusive previews.
            </p>
          </div>
        </div>

        {/* Scroll Back to Top */}
        <div className="flex justify-center mb-12">
          <motion.button 
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="group flex flex-col items-center space-y-3"
          >
            <div className="w-14 h-14 border border-border-light flex items-center justify-center rounded-2xl group-hover:bg-primary group-hover:text-white transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] shadow-elegant hover:shadow-elegant-lg">
              <ArrowUp size={20} />
            </div>
            <span className="text-[10px] font-sans font-bold tracking-widest uppercase text-primary">SCROLL TO TOP</span>
          </motion.button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-primary py-8 overflow-hidden">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[11px] font-sans font-medium text-neutral-400 tracking-widest">
            &copy; 2026 AUTOVERSE INDIA. ALL RIGHTS RESERVED.
          </p>
          <div className="flex space-x-8 text-[11px] font-sans font-medium text-neutral-400 tracking-widest uppercase">
            <a href="#" className="hover:text-white transition-colors duration-300 underline underline-offset-4 decoration-border-light decoration-1">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-300 underline underline-offset-4 decoration-border-light decoration-1">Terms of Service</a>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
