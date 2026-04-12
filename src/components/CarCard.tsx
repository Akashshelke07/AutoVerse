import { motion } from 'framer-motion';
import { ArrowRight, Zap, Settings } from 'lucide-react';
import type { Car } from '../data/cars';
import { fadeInUp } from '../utils/animationVariants';

interface CarCardProps {
  car: Car;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -8, scale: 1.01 }}
      className="group bg-white border border-border-light relative flex flex-col h-full transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] rounded-2xl hover:shadow-elegant-lg overflow-hidden"
    >
      {/* Image Container */}
      <div className="aspect-[4/3] overflow-hidden bg-white p-6 border-b border-primary relative flex items-center justify-center">
        <img
          src={car.image}
          alt={car.name}
          className="max-h-full max-w-full object-contain transform group-hover:scale-110 transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] will-change-transform"
        />
        <div className="absolute top-4 right-4 bg-primary text-white text-[10px] px-2 py-1 font-bold font-sans uppercase tracking-widest rounded-xl">
          {car.year}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8 flex flex-col flex-grow bg-white">
        <div className="mb-6">
          <span className="text-[10px] font-sans font-bold tracking-widest text-accent uppercase block mb-2">
            {car.brand} • {car.category}
          </span>
          <h3 className="text-[24px] md:text-[28px] font-serif font-bold text-primary leading-tight line-clamp-1">
            {car.name}
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8 py-4 border-y border-border-light group-hover:border-primary transition-all duration-300">
          <div className="flex items-center space-x-2">
            <Settings size={14} className="text-secondary shrink-0" />
            <span className="text-[10px] md:text-[11px] font-sans uppercase tracking-wider text-secondary truncate">{car.specs.power}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Zap size={14} className="text-secondary shrink-0" />
            <span className="text-[10px] md:text-[11px] font-sans uppercase tracking-wider text-secondary truncate">{car.specs.engine}</span>
          </div>
        </div>

        <div className="mt-auto pt-4 flex flex-col sm:flex-row items-baseline sm:items-center justify-between gap-4">
          <p className="font-serif font-bold text-[18px] md:text-[20px] text-primary whitespace-nowrap">
            {car.price}
          </p>
          <a
            href="#"
            className="flex items-center space-x-2 text-[11px] font-sans font-bold uppercase tracking-widest text-primary hover:text-accent transition-all duration-300 group/link shrink-0"
          >
            <span>View 3D</span>
            <motion.div
              className="flex items-center space-x-1"
              whileHover={{ x: 4 }}
            >
              {/* Custom SVG 3D Cube + Arrow */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover/link:rotate-[45deg] transition-transform duration-300">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                <line x1="12" y1="22.08" x2="12" y2="12"/>
              </svg>
              <ArrowRight size={14} className="opacity-0 group-hover/link:opacity-100 -translate-x-2 group-hover/link:translate-x-0 transition-all duration-300" />
            </motion.div>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default CarCard;
