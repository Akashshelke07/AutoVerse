import React from 'react';

const CAR_NAMES = [
  'FORTUNER', 'THAR', 'CRETA', 'NEXON', 'BREZZA', 'SELTOS', 'HECTOR', 'CITY', 'PUNCH', 'VERNA',
  'SCORPIO', 'XUV700', 'TIAGO', 'ALTO', 'WAGON R', 'BALENO', 'GLANZA', 'FRONX', 'JIMNY'
];

const Marquee: React.FC = () => {
  return (
    <div className="w-full bg-primary py-4 md:py-6 overflow-hidden border-y border-primary relative z-10">
      <div className="flex whitespace-nowrap marquee-content">
        {/* Double the list for seamless loop */}
        {[...CAR_NAMES, ...CAR_NAMES].map((name, index) => (
          <div key={index} className="flex items-center px-4 md:px-8">
            <span className="text-white font-sans font-bold text-[14px] md:text-[18px] tracking-widest leading-none">
              {name}
            </span>
            <span className="mx-4 md:mx-8 text-accent text-[18px] md:text-[24px]">•</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
