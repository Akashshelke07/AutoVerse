export interface Car {
  id: string;
  name: string;
  brand: string;
  category: 'SUV' | 'Sedan' | 'Hatchback' | 'MUV';
  year: number;
  price: string;
  specs: {
    engine: string;
    power: string;
    transmission: string;
  };
  image: string;
}

export const cars: Car[] = [
  {
    id: '1',
    name: 'Thar',
    brand: 'Mahindra',
    category: 'SUV',
    year: 2024,
    price: '₹11.25 - 17.60 Lakh',
    specs: {
      engine: '2.2L mHawk Diesel',
      power: '130 BHP',
      transmission: 'Manual/Automatic'
    },
    image: '/images/hero-thar.png'
  },
  {
    id: '2',
    name: 'Fortuner',
    brand: 'Toyota',
    category: 'SUV',
    year: 2024,
    price: '₹33.43 - 51.44 Lakh',
    specs: {
      engine: '2.8L Diesel',
      power: '201 BHP',
      transmission: 'Automatic'
    },
    image: '/images/fortuner.png'
  },
  {
    id: '3',
    name: 'Creta',
    brand: 'Hyundai',
    category: 'SUV',
    year: 2024,
    price: '₹11.00 - 20.15 Lakh',
    specs: {
      engine: '1.5L Turbo Petrol',
      power: '158 BHP',
      transmission: 'DCT'
    },
    image: '/images/creta.png'
  },
  {
    id: '4',
    name: 'City',
    brand: 'Honda',
    category: 'Sedan',
    year: 2024,
    price: '₹11.82 - 16.35 Lakh',
    specs: {
      engine: '1.5L i-VTEC',
      power: '119 BHP',
      transmission: 'CVT/Manual'
    },
    image: '/images/city.png'
  },
  {
    id: '5',
    name: 'Nexon',
    brand: 'Tata',
    category: 'SUV',
    year: 2024,
    price: '₹8.15 - 15.80 Lakh',
    specs: {
      engine: '1.2L Revotron',
      power: '118 BHP',
      transmission: 'AMT/Manual'
    },
    image: '/images/fortuner.png' // Reusing high-quality images for demo
  },
  {
    id: '6',
    name: 'Verna',
    brand: 'Hyundai',
    category: 'Sedan',
    year: 2024,
    price: '₹11.00 - 17.42 Lakh',
    specs: {
      engine: '1.5L Turbo Petrol',
      power: '158 BHP',
      transmission: 'DCT'
    },
    image: '/images/city.png'
  },
  {
    id: '7',
    name: 'Innova Hycross',
    brand: 'Toyota',
    category: 'MUV',
    year: 2024,
    price: '₹19.77 - 30.98 Lakh',
    specs: {
      engine: '2.0L Hybrid',
      power: '184 BHP',
      transmission: 'e-CVT'
    },
    image: '/images/fortuner.png'
  },
  {
    id: '8',
    name: 'Slavia',
    brand: 'Skoda',
    category: 'Sedan',
    year: 2024,
    price: '₹10.69 - 18.69 Lakh',
    specs: {
      engine: '1.5L TSI',
      power: '148 BHP',
      transmission: 'DSG'
    },
    image: '/images/city.png'
  },
  {
    id: '9',
    name: 'Swift',
    brand: 'Maruti Suzuki',
    category: 'Hatchback',
    year: 2024,
    price: '₹6.49 - 9.64 Lakh',
    specs: {
      engine: '1.2L Z-Series',
      power: '80 BHP',
      transmission: 'Manual/AMT'
    },
    image: '/images/creta.png'
  }
];
