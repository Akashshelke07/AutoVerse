import React from 'react';
import { motion } from 'framer-motion';
import { RotateCcw } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animationVariants';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center bg-white pt-28 md:pt-32 overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="flex flex-col space-y-6 md:space-y-8"
        >
          <motion.span 
            variants={fadeInUp}
            className="text-[10px] md:text-[11px] font-sans font-semibold tracking-widest-max text-accent uppercase"
          >
            INDIA’S PREMIER CAR SHOWCASE
          </motion.span>
          
          <motion.h1 
            variants={fadeInUp}
            className="text-[56px] sm:text-[72px] md:text-[96px] font-bold font-serif leading-[0.9] md:leading-[0.95] text-primary"
          >
            Drive <br /> 
            <span className="text-secondary">India’s</span> <br /> 
            Finest.
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="text-18px font-sans text-secondary max-w-lg leading-relaxed"
          >
            Experience iconic Indian-loved cars in stunning 3D. 
            Rotate. Zoom. Feel every detail from the comfort of your screen.
          </motion.p>
          
          <motion.div 
            variants={fadeInUp}
            className="flex flex-wrap gap-4"
          >
            <a href="#cars" className="btn btn-primary inline-block text-center">
              Explore Cars
            </a>
            <button 
              onClick={() => alert('Demo video player would open here in a full app!')}
              className="btn btn-outline"
            >
              Watch Demo
            </button>
          </motion.div>
        </motion.div>

        {/* Right Content - 3D Viewer Mock */}
        <motion.div
          initial={{ opacity: 0, x: 100, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative"
        >
          {/* Decorative Road/Car Silhouette SVG behind */}
          <div className="absolute inset-0 -z-10 translate-x-12 translate-y-12 opacity-10 pointer-events-none">
            <svg viewBox="0 0 400 400" className="w-full h-full text-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 350 L350 350" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M100 350 Q200 150 300 350" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4"/>
              <path d="M140 280 L260 280 L280 320 L120 320 Z" stroke="currentColor" strokeWidth="2"/>
              <circle cx="160" cy="320" r="10" stroke="currentColor" strokeWidth="2"/>
              <circle cx="240" cy="320" r="10" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>

          <div className="relative z-10 bg-white border border-border-light p-4 aspect-square flex flex-col items-center justify-center overflow-hidden rounded-2xl shadow-elegant-lg">
            <motion.div
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: [0.25, 0.1, 0.25, 1]
              }}
              className="w-full h-full relative flex items-center justify-center transform group"
            >
              <img 
                src="/images/hero-thar.png" 
                alt="3D Model Viewer" 
                className="object-contain w-full h-full transform scale-110 will-change-transform"
              />
            </motion.div>
            
            {/* Overlay Labels */}
            <div className="absolute top-8 left-8 flex items-center space-x-2 bg-white/80 backdrop-blur-md border border-white/50 px-4 py-2 rounded-xl shadow-elegant-sm">
              <RotateCcw size={16} className="text-accent animate-spin-slow" />
              <span className="text-[10px] font-sans font-bold tracking-widest uppercase text-primary">3D MODEL VIEWER</span>
            </div>
            
            <div className="absolute bottom-6 flex space-x-4">
              <div className="bg-primary/90 backdrop-blur-sm text-white text-[10px] px-4 py-2 uppercase tracking-widest rounded-xl shadow-elegant-sm">INTERACTIVE</div>
              <div className="bg-white/80 backdrop-blur-md border border-white/50 text-[10px] px-4 py-2 uppercase tracking-widest text-primary rounded-xl shadow-elegant-sm">4K ASSETS</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
