import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animationVariants';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Header */}
        <motion.div 
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="text-center mb-20 md:mb-32"
        >
          <motion.span 
            variants={fadeInUp}
            className="text-[11px] md:text-[13px] font-sans font-bold tracking-widest-max text-accent uppercase block mb-6"
          >
            Our Legacy
          </motion.span>
          <motion.h1 
            variants={fadeInUp}
            className="text-[48px] md:text-[80px] font-serif font-bold text-primary leading-none tracking-tight mb-8"
          >
            Redefining Luxury <br className="hidden md:block" /> Automotives in India.
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="text-[16px] md:text-[20px] font-sans text-secondary leading-relaxed max-w-2xl mx-auto"
          >
            AutoVerse was born out of a singular vision: to create a space where the finest automobiles meet absolute transparency and unparalleled service.
          </motion.p>
        </motion.div>

        {/* Feature Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-full aspect-[21/9] bg-neutral-100 rounded-3xl overflow-hidden shadow-elegant mb-20 md:mb-32 relative"
        >
          <img 
            src="https://images.unsplash.com/photo-1503376713241-11933df7164b?auto=format&fit=crop&q=80&w=2000" 
            alt="AutoVerse Showroom" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 border border-white/20 rounded-3xl pointer-events-none" />
        </motion.div>

        {/* Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 mb-20 md:mb-32">
          <motion.div
             initial="initial"
             whileInView="animate"
             viewport={{ once: true }}
             variants={staggerContainer}
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-[32px] md:text-[40px] font-serif font-bold text-primary mb-6"
            >
              The Beginning
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-[15px] font-sans text-secondary leading-relaxed mb-6">
              Founded in 2024, AutoVerse emerged as a disruptive force in the Indian luxury automotive sector. We noticed a gap between the expectations of premium buyers and the realities of traditional dealerships. 
            </motion.p>
            <motion.p variants={fadeInUp} className="text-[15px] font-sans text-secondary leading-relaxed">
              We set out to build an ecosystem rather than a showroom. A place where cutting-edge 3D visualization meets tactile, high-end in-person experiences.
            </motion.p>
          </motion.div>

          <motion.div
             initial="initial"
             whileInView="animate"
             viewport={{ once: true }}
             variants={staggerContainer}
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-[32px] md:text-[40px] font-serif font-bold text-primary mb-6"
            >
              Our Philosophy
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-[15px] font-sans text-secondary leading-relaxed mb-6">
              We believe luxury is inherently tied to trust and precision. Every vehicle that graces our digital and physical floors has been subjected to rigorous curation.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-[15px] font-sans text-secondary leading-relaxed">
              From our tailored concierge services to our transparent pricing models, every interaction is engineered to be as smooth and exhilarating as the cars we represent.
            </motion.p>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-primary text-white rounded-3xl p-12 md:p-20 text-center relative overflow-hidden shadow-elegant-lg"
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            <div>
              <div className="text-[48px] md:text-[64px] font-serif font-bold text-white mb-2">150+</div>
              <div className="text-[11px] font-sans font-bold tracking-widest uppercase text-neutral-400">Premium Vehicles Delivered</div>
            </div>
            <div>
              <div className="text-[48px] md:text-[64px] font-serif font-bold text-white mb-2">4.9/5</div>
              <div className="text-[11px] font-sans font-bold tracking-widest uppercase text-neutral-400">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-[48px] md:text-[64px] font-serif font-bold text-white mb-2">100%</div>
              <div className="text-[11px] font-sans font-bold tracking-widest uppercase text-neutral-400">Transparent Pricing</div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default AboutPage;
