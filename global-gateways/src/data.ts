import { Destination, CorporateService, Testimonial, InstagramPost, FAQItem } from './types';

export const DESTINATIONS: Destination[] = [
  {
    id: 'bali',
    name: 'Bali Escape',
    duration: '6 Days / 5 Nights',
    description: 'Private infinity pool villas, curated sacred temple tours, and premium catamaran cruises in Seminyak and Ubud.',
    price: '$1,899',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
    rating: 4.9,
    tags: ['Luxury', 'Tropical', 'Wellness']
  },
  {
    id: 'kashmir',
    name: 'Royal Kashmir Valley',
    duration: '7 Days / 6 Nights',
    description: 'Premium wooden houseboats on Dal Lake, scenic luxury meadow stays in Gulmarg, and custom snow heliski experiences.',
    price: '$2,150',
    image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80',
    rating: 4.8,
    tags: ['Scenic', 'Royal Stay', 'Adventure']
  },
  {
    id: 'dubai',
    name: 'Dubai Premium Skyline',
    duration: '5 Days / 4 Nights',
    description: 'Penthouse suites with Marina views, private desert dunes VIP dinner under the stars, and yacht party experiences.',
    price: '$2,499',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
    rating: 4.9,
    tags: ['Futuristic', 'Shopping', 'Ultra-Luxury']
  },
  {
    id: 'thailand',
    name: 'Phuket & Phi Phi Yachting',
    duration: '6 Days / 5 Nights',
    description: 'Island hopping on custom luxury yachts, underwater diving in Bioluminescent caves, and high-end beach club entry.',
    price: '$1,599',
    image: 'https://images.unsplash.com/photo-1528181304800-2f190854897d?auto=format&fit=crop&w=1200&q=80',
    rating: 4.7,
    tags: ['Yachting', 'Beach Life', 'Nightlife']
  },
  {
    id: 'goa',
    name: 'Southern Goa Premium',
    duration: '4 Days / 3 Nights',
    description: 'Luxury heritage Portuguese villas, oceanview dining, boutique private beach accesses, and custom organic wellness tours.',
    price: '$1,250',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    rating: 4.8,
    tags: ['Heritage', 'Sunset Yacht', 'Slow Travel']
  },
  {
    id: 'manali',
    name: 'Himalayan Luxury Chalets',
    duration: '5 Days / 4 Nights',
    description: 'Heated private glass geodesic domes overlooking Solang Valley glaciers, custom offroad luxury safaris, and fine dining.',
    price: '$1,650',
    image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1200&q=80',
    rating: 4.9,
    tags: ['Snow Peak', 'Cozy Chalets', 'Gourmet']
  }
];

export const CORPORATE_SERVICES: CorporateService[] = [
  {
    id: 'retreats',
    title: 'Bespoke Executive Retreats',
    description: 'Tailored executive leadership gatherings in ultra-private beachfront villas or mountain estates designed to foster strategy and relaxation.',
    iconName: 'Users',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
    benefits: ['Strategic planning facilitators', 'Ultra-private non-disclosure estates', 'Michelin-starred private chefs', 'Luxury ground transfers']
  },
  {
    id: 'conferences',
    title: 'High-Impact Conferences',
    description: 'End-to-end management of national and international corporate conferences, integrating state-of-the-art audiovisual setups and modern gala dinners.',
    iconName: 'Presentation',
    image: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&w=800&q=80',
    benefits: ['Smart guest registering systems', 'Multi-lingual speaker coordination', 'VIP networking lounges', 'Elite digital production team']
  },
  {
    id: 'outings',
    title: 'Collaborative Team Outings',
    description: 'Dynamic bonding activities from ocean catamaran rally tournaments to customized wilderness survival camps that elevate teamwork.',
    iconName: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    benefits: ['Innovative gamified dynamics', 'Dedicated medical & safety crew', 'Customized team branded gear', 'Cinematic photo & video drone logs']
  },
  {
    id: 'reward-trips',
    title: 'Elite Reward & Milestone Trips',
    description: 'Inspire your top performers and key stakeholders with legendary luxury travel packages engineered as the ultimate incentive.',
    iconName: 'Trophy',
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80',
    benefits: ['Exclusive flight charters', 'High-end custom gifting suites', 'VIP access to global premier venues', 'Personalized concierge desk']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Sarah Miller',
    role: 'Global Events Lead, TechNova Corp',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80',
    rating: 5,
    review: 'Global Gateways transformed our annual leadership summit in Bali. From private yachts to synchronized drone displays, every single element was executed with absolute perfection.',
    location: 'Bali Event • 120 Guests'
  },
  {
    id: 'test-2',
    name: 'David Chen',
    role: 'Founder & CEO, Horizon Ventures',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
    rating: 5,
    review: 'Our custom luxury holiday to Dubai and the desert dunes was spectacular. They handled all airport VIP lines, supercars, and helipads. Best service we have ever experienced.',
    location: 'Dubai Private Expedition'
  },
  {
    id: 'test-3',
    name: 'Elena Rostova',
    role: 'Director of HR, Apex Solutions',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80',
    rating: 5,
    review: 'Our team outing in Kashmir was magnificent. Staying at high-end mountain chalets and trekking with expert local guides completely recharged our engineering department.',
    location: 'Kashmir Outing • 45 Guests'
  }
];

export const INSTAGRAM_GALLERY: InstagramPost[] = [
  {
    id: 'ig-1',
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=600&h=800&q=80',
    likes: '1.4k',
    comments: '122',
    type: 'video',
    caption: 'Waking up to pristine waters of Seminyak luxury beach resort. 🌴✨ #GlobalGateways #BaliEscape'
  },
  {
    id: 'ig-2',
    image: 'https://images.unsplash.com/photo-1526495124232-a04e1849168a?auto=format&fit=crop&w=600&h=800&q=80',
    likes: '3.1k',
    comments: '204',
    type: 'image',
    caption: 'Sunset helicopter tour above the Burj Al Arab island. Absolute peak luxury. 🚁🌅 #DubaiLuxury'
  },
  {
    id: 'ig-3',
    image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=600&h=800&q=80',
    likes: '2.5k',
    comments: '185',
    type: 'video',
    caption: 'Magical sandbar gourmet dinner with our executive retreat group in Phi Phi. 🕯️🦞 #TeamBonding'
  },
  {
    id: 'ig-4',
    image: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=600&h=800&q=80',
    likes: '1.9k',
    comments: '98',
    type: 'image',
    caption: 'Chasing the powder snow in Solang Valley. Cozy campfires & luxury domes. 🏔️🔥 #ManaliStays'
  },
  {
    id: 'ig-5',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&h=800&q=80',
    likes: '4.2k',
    comments: '312',
    type: 'video',
    caption: 'Corporate Gala event overlooking high-rise skylines. The ultimate reward trip. 🥂🎩 #VIPEvent'
  },
  {
    id: 'ig-6',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&h=800&q=80',
    likes: '2.8k',
    comments: '144',
    type: 'image',
    caption: 'Diving in the crystal clear pristine reefs. Discovering the unchartered corals.🤿🐠 #GlobalGateways'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How do you customize luxury itineraries for private travelers?',
    answer: 'Once you fill out our form or contact us via WhatsApp, a dedicated Luxury Travel Designer is assigned to you. We map your exact preferences, culinary desires, security needs, and pace, building a bespoke digital itinerary revised until it matches your dream vision perfectly.'
  },
  {
    id: 'faq-2',
    question: 'What scale of corporate events can you accommodate?',
    answer: 'We coordinate corporate groups ranging from boutique 15-person executive retreat teams to massive 500+ speaker-delegates conferences. We secure premium hotel block charters, VIP catering, international flight transfers, and top-tier venue setups globally.'
  },
  {
    id: 'faq-3',
    question: 'Can you facilitate VIP protocols, private jet charters and luxury vehicles?',
    answer: 'Absolutely. We hold exclusive partnerships with private aviation brokers, high-security armored transport agencies, luxury yacht yards, and supercar rental fleets worldwide, including fast-track immigration protocols at major global airports.'
  },
  {
    id: 'faq-4',
    question: 'Is there a round-the-clock emergency assistance team during our trip?',
    answer: 'Yes! Every travel itinerary and corporate trip features 24/7 on-ground custom chat support with physical and digital concierge desks standing by. We handle dynamic routing changes, real-time weather adaptations, or prompt wellness consultations.'
  },
  {
    id: 'faq-5',
    question: 'How do we request a swift quotation for a milestone incentive event?',
    answer: 'You can submit an inquiry through our secure web portal here or instantly connect with our prompt Corporate Incentive Team via WhatsApp for an initially formatted quote and presentation proposal within hours.'
  }
];
