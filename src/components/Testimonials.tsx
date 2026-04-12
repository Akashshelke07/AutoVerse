import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../data/testimonials';
import { fadeInUp, staggerContainer } from '../utils/animationVariants';

const Testimonials: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-32 bg-neutral-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span 
              variants={fadeInUp}
              className="text-11px font-sans font-bold tracking-widest-max text-accent uppercase block mb-4"
            >
              VOICES OF AUTOVERSE
            </motion.span>
            <motion.h2 
              variants={fadeInUp}
              className="text-48px md:text-64px font-serif font-bold text-primary leading-tight"
            >
              Driven by <br /> Passion.
            </motion.h2>
          </motion.div>

          <div className="flex space-x-3">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scroll('left')}
              className="w-14 h-14 border border-border-light flex items-center justify-center hover:bg-neutral-50 transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] rounded-2xl shadow-elegant"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scroll('right')}
              className="w-14 h-14 bg-primary text-white flex items-center justify-center hover:bg-neutral-800 transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] rounded-2xl shadow-elegant"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-8 pb-12 snap-x no-scrollbar"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="min-w-[320px] md:min-w-[450px] bg-white border border-border-light p-12 snap-start relative group rounded-2xl transition-all duration-300 hover:border-primary hover:shadow-elegant-lg"
            >
              <div className="flex mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#C0001D" className="text-accent mr-1" />
                ))}
              </div>

              <p className="text-[18px] md:text-[22px] font-serif italic text-primary mb-10 leading-relaxed group-hover:text-black transition-colors duration-300">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-neutral-50 flex items-center justify-center rounded-2xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-300">
                  <span className="font-serif font-bold text-[20px] text-secondary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="text-[14px] font-sans font-bold tracking-widest uppercase text-primary">
                    {testimonial.name}
                  </h4>
                  <p className="text-[11px] font-sans tracking-wider text-secondary uppercase">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
