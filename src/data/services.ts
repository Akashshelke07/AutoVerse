import { Shield, PenTool as Tool, Truck, Clock, CreditCard, Headphones } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    id: 's1',
    title: 'Precision Maintenance',
    description: 'Expert care for your premium machine with genuine parts and certified engineers.',
    icon: Tool,
  },
  {
    id: 's2',
    title: 'Secure Delivery',
    description: 'White-glove doorstep delivery service ensuring your vehicle arrives in pristine condition.',
    icon: Truck,
  },
  {
    id: 's3',
    title: 'Extended Warranty',
    description: 'Comprehensive coverage and peace of mind for the road ahead with AutoVerse Shield.',
    icon: Shield,
  },
  {
    id: 's4',
    title: '24/7 Roadside Assistance',
    description: 'Always by your side. Instant support and towing services across India.',
    icon: Clock,
  },
  {
    id: 's5',
    title: 'Tailored Financing',
    description: 'Flexible payment plans and low-interest loans customized to your financial journey.',
    icon: CreditCard,
  },
  {
    id: 's6',
    title: 'Privilege Support',
    description: 'Dedicated relationship managers for an unmatched ownership experience.',
    icon: Headphones,
  },
];
