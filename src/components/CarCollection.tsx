import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cars } from '../data/cars';
import CarCard from './CarCard';
import { fadeInUp, staggerContainer } from '../utils/animationVariants';

const CATEGORIES = ['ALL', 'SUVs', 'SEDANS', 'HATCHBACKS', 'MUVs'];

const CarCollection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filteredCars = cars.filter(car => {
    if (activeFilter === 'ALL') return true;
    
    // Exact mapping for robust filtering
    const categoryMap: Record<string, string> = {
      'SUVs': 'SUV',
      'SUVS': 'SUV',
      'SEDANS': 'Sedan',
      'HATCHBACKS': 'Hatchback',
      'MUVs': 'MUV',
      'MUVS': 'MUV'
    };
    
    return car.category === categoryMap[activeFilter.toUpperCase()] || 
           car.category === categoryMap[activeFilter];
  });

  return (
    <section id="cars" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          whileInView="animate"
          viewport={{ once: true, amount: 0.01 }}
          variants={staggerContainer}
          className="mb-20 text-center"
        >
          <motion.span 
            variants={fadeInUp}
            className="text-[11px] font-sans font-bold tracking-widest-max text-accent uppercase block mb-4"
          >
            PRECISION COLLECTION
          </motion.span>
          <motion.h2 
            variants={fadeInUp}
            className="text-[48px] md:text-[64px] font-serif font-bold text-primary leading-tight"
          >
            Curated For The <br /> Discerning Driver.
          </motion.h2>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {CATEGORIES.map((filter) => (
            <motion.button
              key={filter}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActiveFilter(filter)}
              className={`px-8 py-3 text-[11px] font-sans font-bold uppercase tracking-widest transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] border rounded-2xl shadow-elegant-sm ${
                activeFilter === filter
                  ? 'bg-primary text-white border-primary shadow-inner-soft'
                  : 'bg-white text-primary border-border-light hover:border-primary hover:text-black'
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          whileInView="animate"
          viewport={{ once: true, amount: 0.01 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]"
        >
          <AnimatePresence mode='wait'>
            {filteredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredCars.length === 0 && (
          <div className="text-center py-20 border border-dashed border-border-light">
            <p className="text-secondary font-sans uppercase tracking-widest">No models found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CarCollection;
