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
              <div className="w-16 h-16 bg-white text-accent border border-border-light flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] rounded-2xl shadow-elegant-sm group-hover:shadow-none">
                <service.icon size={28} strokeWidth={1.5} className="transition-colors duration-300" />
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
