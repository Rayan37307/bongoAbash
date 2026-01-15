
import { Property, Testimonial } from './types';

export const PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'The Azure Residence',
    location: 'Gulshan 2, Dhaka',
    price: '৳ 4.5 Crore',
    type: 'Apartment',
    beds: 4,
    baths: 4.5,
    area: '3200 sqft',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800',
    status: 'Ready'
  },
  {
    id: '2',
    title: 'Skyline Penthouse',
    location: 'Banani, Dhaka',
    price: '৳ 8.2 Crore',
    type: 'Penthouse',
    beds: 5,
    baths: 6,
    area: '5400 sqft',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
    status: 'Upcoming'
  },
  {
    id: '3',
    title: 'Heritage Manor',
    location: 'Baridhara Diplomatic Zone',
    price: '৳ 12 Crore',
    type: 'Apartment',
    beds: 4,
    baths: 5,
    area: '4500 sqft',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
    status: 'Under Construction'
  },
  {
    id: '4',
    title: 'Riverside Retreat',
    location: 'Khulshi, Chattogram',
    price: '৳ 3.8 Crore',
    type: 'Apartment',
    beds: 3,
    baths: 3,
    area: '2800 sqft',
    image: 'https://images.unsplash.com/photo-1600607687940-4e7a6a357d19?auto=format&fit=crop&q=80&w=800',
    status: 'Ready'
  },
  {
    id: '5',
    title: 'The Platinum Plaza',
    location: 'Uttara Sector 4, Dhaka',
    price: '৳ 2.5 Crore',
    type: 'Commercial',
    area: '1500 sqft',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
    status: 'Ready'
  },
  {
    id: '6',
    title: 'Sylhet Green Valley',
    location: 'Shahjalal Upashahar, Sylhet',
    price: '৳ 1.9 Crore',
    type: 'Plot',
    area: '5 Katha',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800',
    status: 'Upcoming'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Farhan Ahmed',
    role: 'Investment Banker',
    content: 'BongoAbash redefined my understanding of luxury living in Dhaka. Their attention to detail in Gulshan projects is unmatched.',
    avatar: 'https://i.pravatar.cc/150?u=farhan'
  },
  {
    id: 2,
    name: 'Nusrat Jahan',
    role: 'Interior Designer',
    content: 'The architectural integrity of their buildings makes them a dream canvas for any interior designer. Truly world-class.',
    avatar: 'https://i.pravatar.cc/150?u=nusrat'
  },
  {
    id: 3,
    name: 'Dr. Kamal Uddin',
    role: 'Consultant Surgeon',
    content: 'Finding a ready apartment in Baridhara was easy with BongoAbash. Professional, transparent, and highly efficient.',
    avatar: 'https://i.pravatar.cc/150?u=kamal'
  }
];
