import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animationVariants';

const VALUES = ['TRANSPARENCY', 'PRECISION', 'EXCELLENCE', 'LEGACY'];

const About: React.FC = () => {
  const headline = "Defining the Future of Indian Motoring.";
  
  return (
    <section id="about-us" className="py-24 bg-white border-t border-primary">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        
        {/* Left: Animated Text */}
        <div className="overflow-hidden">
          <motion.h2 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-[56px] md:text-[80px] font-serif font-bold text-primary leading-[1.1] mb-12"
          >
            {headline.split(" ").map((word, i) => (
              <span key={i} className="inline-block overflow-hidden mr-3">
                <motion.span
                  variants={{
                    initial: { y: "100%", opacity: 0 },
                    animate: { y: 0, opacity: 1 }
                  }}
                  transition={{ 
                    duration: 0.8, 
                    delay: i * 0.08, 
                    ease: [0.25, 0.1, 0.25, 1] 
                  }}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </motion.h2>
          
          <div className="flex flex-wrap gap-4">
            {VALUES.map((val) => (
              <motion.div 
                key={val}
                whileHover={{ scale: 1.05, backgroundColor: '#0A0A0A', color: '#FFFFFF' }}
                className="px-6 py-2 border border-border-light text-[10px] font-sans font-bold tracking-widest text-primary transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] cursor-default rounded-2xl shadow-elegant-sm"
              >
                {val}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: Content Stack */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="space-y-8"
        >
          <motion.p 
            variants={fadeInUp}
            className="text-20px font-sans text-primary leading-relaxed"
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
