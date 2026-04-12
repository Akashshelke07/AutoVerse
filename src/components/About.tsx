import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animationVariants';

const VALUES = ['TRANSPARENCY', 'PRECISION', 'EXCELLENCE', 'LEGACY'];

const About: React.FC = () => {
  const headline = "Defining the Future of Indian Motoring.";
  
  return (
    <section id="about-us" className="py-20 md:py-32 bg-neutral-50 border-t border-border-light">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-white border border-border-light p-4 rounded-3xl shadow-elegant-lg overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1000" 
                alt="Luxury Car Close-up" 
                className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 ease-in-out transform group-hover:scale-110"
              />
              <div className="absolute inset-4 border border-white/20 rounded-2xl pointer-events-none" />
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 md:bottom-10 md:right-10 bg-primary text-white p-6 md:p-8 rounded-2xl shadow-elegant max-w-[160px] md:max-w-[200px]"
            >
              <div className="text-[32px] md:text-[48px] font-serif font-bold leading-none mb-2">15+</div>
              <div className="text-[10px] md:text-[11px] font-sans font-bold tracking-widest uppercase opacity-60">Years of Luxury Automotive Excellence</div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
             initial="initial"
             whileInView="animate"
             viewport={{ once: true }}
             variants={staggerContainer}
             className="flex flex-col space-y-6 md:space-y-8 mt-12 lg:mt-0"
          >
            <motion.span 
              variants={fadeInUp}
              className="text-[10px] md:text-[11px] font-sans font-bold tracking-widest-max text-accent uppercase"
            >
              THE AUTOVERSE STORY
            </motion.span>
            
            <motion.h2 
              variants={fadeInUp}
              className="text-[36px] md:text-[64px] font-serif font-bold text-primary leading-tight"
            >
              Crafting Legacies. <br /> Driving Dreams.
            </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-16px font-sans text-secondary leading-relaxed"
          >
            AutoVerse isn't just a marketplace; it's a digital atelier dedicated to the finest machinery on Indian roads. 
            We believe that every curve, every engine note, and every mile should be experienced with absolute clarity.
          </motion.p>
          
          <motion.p 
            variants={fadeInUp}
            className="text-16px font-sans text-secondary leading-relaxed"
          >
            Since our inception, we have been committed to pushing the boundaries of how cars are showcased and sold. 
            By combining state-of-the-art 3D technology with a deep-rooted passion for Indian automotive culture, 
            we provide an experience that is as sharp as the vehicles we represent.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="pt-8">
            <button className="btn btn-outline border-primary">
              Learn Our Story
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Black Bar */}
      <div className="mt-32 w-full bg-primary py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-11px md:text-13px font-sans font-bold tracking-widest-max text-white uppercase">
            ESTABLISHED 2024 • HEADQUARTERED IN NEW DELHI • SERVICING NATIONWIDE
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
