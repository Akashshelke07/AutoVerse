import React from 'react';
import { motion } from 'framer-motion';
import { useCountUp } from '../hooks/useCountUp';
import { fadeInUp, staggerContainer } from '../utils/animationVariants';

interface StatItemProps {
  label: string;
  value: number;
  suffix?: string;
  icon: React.ReactNode;
}

const StatItem: React.FC<StatItemProps> = ({ label, value, suffix = "", icon }) => {
  const { count, ref } = useCountUp(value);
  
  return (
    <div ref={ref} className="text-center p-8 md:border-r border-white/10 last:border-0 group transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]">
      <div className="flex flex-col items-center">
        <motion.div 
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-accent mb-4"
        >
          {icon}
        </motion.div>
        <div className="text-[48px] md:text-[64px] font-serif font-bold text-white mb-2 leading-none flex items-baseline">
          {count}
          <span className="text-accent text-[24px] md:text-[32px] ml-1">{suffix}</span>
        </div>
        <div className="text-[11px] font-sans font-bold tracking-[0.2em] uppercase text-secondary group-hover:text-white transition-colors duration-300">
          {label}
        </div>
      </div>
    </div>
  );
};

const StatsBar: React.FC = () => {
  return (
    <div className="w-full bg-primary border-y border-primary">
      <div className="container mx-auto px-6">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4"
        >
          <motion.div variants={fadeInUp}>
            <StatItem 
              label="CARS SHIPPED" 
              value={1450} 
              suffix="+" 
              icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>}
            />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <StatItem 
              label="HAPPY CLIENTS" 
              value={98} 
              suffix="%" 
              icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>}
            />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <StatItem 
              label="SHOWROOMS" 
              value={12} 
              icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>}
            />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <StatItem 
              label="3D MODELS" 
              value={500} 
              suffix="+" 
              icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default StatsBar;
