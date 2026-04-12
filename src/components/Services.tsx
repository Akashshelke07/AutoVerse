import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../data/services';
import { fadeInUp, staggerContainer } from '../utils/animationVariants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
           initial="initial"
           whileInView="animate"
           viewport={{ once: true, margin: "-100px" }}
           variants={staggerContainer}
           className="mb-12 md:mb-20"
         >
           <motion.span 
             variants={fadeInUp}
             className="text-[10px] md:text-[11px] font-sans font-bold tracking-widest-max text-accent uppercase block mb-4"
           >
             OUR EXPERTISE
           </motion.span>
           <motion.h2 
             variants={fadeInUp}
             className="text-[36px] md:text-[64px] font-serif font-bold text-primary leading-tight"
           >
             Redefining Ownership. <br /> One Service At A Time.
           </motion.h2>
         </motion.div>
 
         <motion.div
           initial="initial"
           whileInView="animate"
           viewport={{ once: true, margin: "-100px" }}
           variants={staggerContainer}
           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12"
         >
           {services.map((service) => (
             <motion.div
               key={service.id}
               variants={fadeInUp}
               whileHover={{ y: -8, scale: 1.01 }}
               className="p-6 md:p-10 bg-white border border-border-light hover:border-primary transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] relative group rounded-2xl hover:shadow-elegant overflow-hidden"
             >
              <div className="w-16 h-16 bg-white border border-border-light flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] rounded-2xl shadow-elegant-sm group-hover:shadow-none">
                {/* Custom Inline SVG for each service */}
                {service.id === '1' && (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transition-colors duration-300"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
                )}
                {service.id === '2' && (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transition-colors duration-300"><path d="m11 17 2 2 5-5"/><path d="M11 9H2"/><path d="M11 13H2"/><path d="M11 5H2"/><path d="M22 17a3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3 3 3 0 0 1 3 3z"/></svg>
                )}
                {service.id === '3' && (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transition-colors duration-300"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.24a1 1 0 0 0-.44-.83L19 11V8"/><circle cx="17" cy="18" r="2"/><path d="M7 18h4"/></svg>
                )}
                {service.id === '4' && (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transition-colors duration-300"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                )}
                {service.id === '5' && (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transition-colors duration-300"><path d="M5 21v-7"/><path d="M19 21v-7"/><path d="M3 7h18a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/></svg>
                )}
                {service.id === '6' && (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transition-colors duration-300"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                )}
              </div>
              
              <h3 className="text-[24px] font-serif font-bold text-primary mb-4 group-hover:text-accent transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-[15px] font-sans text-secondary leading-relaxed group-hover:text-primary transition-colors duration-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
