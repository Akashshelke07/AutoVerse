export interface Testimonial {
  id: string;
  name: string;
  location: string;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Arjun Mehra',
    location: 'Mumbai, Maharashtra',
    quote: 'The 3D viewer experience is unlike anything else. Buying my Thar through AutoVerse was seamless and truly premium.',
    rating: 5,
  },
  {
    id: 't2',
    name: 'Priyanka Sharma',
    location: 'Bangalore, Karnataka',
    quote: 'Attention to detail in their service is what sets them apart. The white-glove delivery in Bangalore was exceptional.',
    rating: 5,
  },
  {
    id: 't3',
    name: 'Vikram Singh',
    location: 'New Delhi, Delhi',
    quote: 'AutoVerse represents the new era of automotive retail in India. Sharp, professional, and highly trustworthy.',
    rating: 5,
  },
  {
    id: 't4',
    name: 'Siddharth Rao',
    location: 'Hyderabad, Telangana',
    quote: 'Impressive collection and even more impressive digital experience. The hard-edged design really reflects their precision.',
    rating: 4,
  },
  {
    id: 't5',
    name: 'Ananya Das',
    location: 'Kolkata, West Bengal',
    quote: 'From test drive to delivery, the journey was effortless. Highly recommend their tailored financing options.',
    rating: 5,
  },
];
