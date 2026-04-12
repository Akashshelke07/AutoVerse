import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animationVariants';

const FEATURES = [
  {
    title: 'Rotational View',
    description: 'Explore every angle with smooth, high-fidelity 3D orbit controls.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/>
        <path d="M21 3v5h-5"/>
      </svg>
    )
  },
  {
    title: 'Precision Zoom',
    description: 'Get closer to the materials and textures with 4K asset resolution.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/>
        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        <line x1="11" y1="8" x2="11" y2="14"/>
        <line x1="8" y1="11" x2="14" y2="11"/>
      </svg>
    )
  },
  {
    title: 'Immersive Mode',
    description: 'Experience the interior detailing in a distraction-free environment.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="m15 3 6 6"/>
        <path d="m9 21-6-6"/>
        <path d="M21 3v6h-6"/>
        <path d="M3 21v-6h6"/>
        <path d="m5.45 5.45 13.1 13.1"/>
      </svg>
    )
  }
];

const FeatureHighlight: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8"
        >
          {FEATURES.map((feature, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.01 }}
              className="p-10 border border-border-light rounded-2xl hover:border-primary transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] shadow-elegant-sm hover:shadow-elegant bg-white overflow-hidden relative"
            >
              <motion.div 
                className="w-16 h-16 bg-white border border-border-light flex items-center justify-center mb-8 rounded-2xl group-hover:bg-primary group-hover:text-white transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] overflow-hidden"
              >
                <div className="group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]">
                  {feature.icon}
                </div>
              </motion.div>
              
              <h3 className="text-[20px] font-serif font-bold text-primary mb-4">
                {feature.title}
              </h3>
              
              <p className="text-[14px] font-sans text-secondary leading-relaxed group-hover:text-primary transition-colors duration-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureHighlight;
