export interface Destination {
  id: string;
  name: string;
  duration: string;
  description: string;
  price: string;
  image: string;
  rating: number;
  tags: string[];
}

export interface CorporateService {
  id: string;
  title: string;
  description: string;
  iconName: string;
  image: string;
  benefits: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  image: string;
  rating: number;
  review: string;
  location: string;
}

export interface InstagramPost {
  id: string;
  image: string;
  likes: string;
  comments: string;
  type: 'video' | 'image';
  caption: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface InquiryFormData {
  name: string;
  phone: string;
  destination: string;
  travelDate: string;
  travelersCount: number;
  corporateTheme?: string;
  message?: string;
  budget?: string;
}
