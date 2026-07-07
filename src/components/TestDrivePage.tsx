import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animationVariants';

const TestDrivePage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    vehicle: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Test Drive Booking Data:', formData);
    alert(`Thank you, ${formData.firstName}! Your test drive for the ${formData.vehicle} has been requested. We will contact you shortly at ${formData.email}.`);
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      vehicle: ''
    });
  };

  return (
    <div className="pt-32 pb-20 bg-neutral-50 min-h-screen">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div 
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="bg-white rounded-[2rem] shadow-elegant-lg p-10 md:p-16 border border-border-light/50"
        >
          <div className="text-center mb-12">
            <motion.h1 
              variants={fadeInUp}
              className="text-[36px] md:text-[48px] font-serif font-bold text-primary leading-tight mb-4"
            >
              Book a Test Drive
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-[15px] font-sans text-secondary"
            >
              Experience the pinnacle of automotive engineering firsthand. Fill out the form below to schedule your exclusive test drive.
            </motion.p>
          </div>

          <motion.form variants={fadeInUp} className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[11px] font-sans font-bold tracking-widest uppercase text-primary">First Name</label>
                <input required type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full border border-border-light rounded-xl py-3 px-4 focus:outline-none focus:border-primary transition-colors bg-neutral-50" placeholder="Enter your first name" />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-sans font-bold tracking-widest uppercase text-primary">Last Name</label>
                <input required type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full border border-border-light rounded-xl py-3 px-4 focus:outline-none focus:border-primary transition-colors bg-neutral-50" placeholder="Enter your last name" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[11px] font-sans font-bold tracking-widest uppercase text-primary">Email Address</label>
              <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full border border-border-light rounded-xl py-3 px-4 focus:outline-none focus:border-primary transition-colors bg-neutral-50" placeholder="your@email.com" />
            </div>

            <div className="space-y-2">
              <label className="text-[11px] font-sans font-bold tracking-widest uppercase text-primary">Select Vehicle</label>
              <select required name="vehicle" value={formData.vehicle} onChange={handleChange} className="w-full border border-border-light rounded-xl py-3 px-4 focus:outline-none focus:border-primary transition-colors bg-neutral-50">
                <option value="">Choose a model...</option>
                <option value="Mahindra Thar">Mahindra Thar</option>
                <option value="Mahindra Scorpio-N">Mahindra Scorpio-N</option>
                <option value="Tata Safari">Tata Safari</option>
                <option value="Tata Harrier">Tata Harrier</option>
              </select>
            </div>

            <div className="pt-8">
              <button type="submit" className="w-full btn btn-primary py-4 rounded-xl font-sans text-[13px] uppercase tracking-widest shadow-elegant hover:bg-neutral-800 transition-all duration-300">
                Confirm Booking
              </button>
            </div>
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
};

export default TestDrivePage;
