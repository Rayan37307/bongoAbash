
export interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  type: 'Apartment' | 'Penthouse' | 'Commercial' | 'Plot';
  beds?: number;
  baths?: number;
  area: string;
  image: string;
  status: 'Ready' | 'Under Construction' | 'Upcoming';
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}
