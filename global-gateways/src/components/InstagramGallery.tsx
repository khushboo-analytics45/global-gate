import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { INSTAGRAM_GALLERY } from '../data';
import { InstagramPost } from '../types';
import { 
  Heart, 
  MessageCircle, 
  Play, 
  Eye, 
  X, 
  Send, 
  Compass, 
  Film, 
  Sparkles, 
  Bookmark, 
  Volume2, 
  VolumeX, 
  ThumbsUp, 
  Share2, 
  MapPin 
} from 'lucide-react';

// Enriching local mock data with richer category tags and layouts
const EXHIBITS = [
  {
    ...INSTAGRAM_GALLERY[0],
    category: 'reels',
    tag: 'TRAVEL REEL',
    views: '24.8K',
    duration: '0:15',
    location: 'Seminyak Beach Bed, Bali',
    aspect: 'aspect-[3/4]' // tall reel
  },
  {
    ...INSTAGRAM_GALLERY[1],
    category: 'destinations',
    tag: 'HIGHLIGHT',
    views: '12.5K',
    duration: '',
    location: 'Helipad Lounge, Dubai',
    aspect: 'aspect-[4/5]' // portrait
  },
  {
    ...INSTAGRAM_GALLERY[2],
    category: 'reels',
    tag: 'REEL MOMENT',
    views: '41.2K',
    duration: '0:22',
    location: 'Phi Phi Private Sandbar',
    aspect: 'aspect-[3/4]' // tall reel
  },
  {
    ...INSTAGRAM_GALLERY[3],
    category: 'moments',
    tag: 'MY MOMENT',
    views: '9.4K',
    duration: '',
    location: 'Solang Luxury Dome, Manali',
    aspect: 'aspect-square' // standard square
  },
  {
    ...INSTAGRAM_GALLERY[4],
    category: 'events',
    tag: 'CORP GALA',
    views: '35.6K',
    duration: '0:30',
    location: 'Regency Ballroom, Skyline',
    aspect: 'aspect-[3/4]' // tall reel
  },
  {
    ...INSTAGRAM_GALLERY[5],
    category: 'destinations',
    tag: 'PIONEER LOG',
    views: '15.1K',
    duration: '',
    location: 'Prisitin Coral Reefs, Goan Coast',
    aspect: 'aspect-[4/5]' // portrait
  },
  // Custom additions to enrich aesthetic and fill masonry grids perfectly
  {
    id: 'ig-7',
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=600&h=800&q=80',
    likes: '3.9k',
    comments: '211',
    type: 'video',
    caption: 'Curating absolute peace. Sunset ocean horseback run with our honeymoon couple. 🌅🐎 #LuxuryVibe #ClientJournal',
    category: 'moments',
    tag: 'TRAVEL REEL',
    views: '29.3K',
    duration: '0:18',
    location: 'Beachfront, Maldives',
    aspect: 'aspect-[3/4]'
  },
  {
    id: 'ig-8',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&h=800&q=80',
    likes: '5.2k',
    comments: '407',
    type: 'image',
    caption: 'Bespoke Executive Boardroom layout prepared under the blue canopy. Elevate strategy meetings here. 💼🌊 #ExecutiveRetreat',
    category: 'events',
    tag: 'CORPORATE EVENT',
    views: '18.7K',
    duration: '',
    location: 'Private Villa, French Riviera',
    aspect: 'aspect-[4/5]'
  }
];

export default function InstagramGallery() {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [selectedPost, setSelectedPost] = useState<any | null>(null);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  
  // Interactive like states for simulated engagement
  const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({});
  const [doubleTapAnimation, setDoubleTapAnimation] = useState<string | null>(null);

  // Filters setup
  const tabs = [
    { id: 'all', label: 'All Log Feed' },
    { id: 'reels', label: 'Travel Reels 🎬' },
    { id: 'destinations', label: 'Destination Icons 🏝️' },
    { id: 'moments', label: 'Client Moments ✨' },
    { id: 'events', label: 'Corporate Galas 🥂' }
  ];

  const filteredPosts = activeTab === 'all' 
    ? EXHIBITS 
    : EXHIBITS.filter(post => post.category === activeTab);

  // Handle Double click / Double tap to Like post with cinematic heart balloon
  const handleDoubleTap = (post: any) => {
    setDoubleTapAnimation(post.id);
    if (!likedPosts[post.id]) {
      setLikedPosts(prev => ({ ...prev, [post.id]: true }));
    }
    setTimeout(() => {
      setDoubleTapAnimation(null);
    }, 800);
  };

  const toggleLike = (postId: string) => {
    setLikedPosts(prev => ({ ...prev, [postId]: !prev[postId] }));
  };

  return (
    <section className="relative py-28 bg-slate-950 font-sans border-t border-slate-900 overflow-hidden select-none" id="instagram-gallery">
      {/* Background spotlights & moving decorative items */}
      <div className="absolute top-[15%] right-[-10%] w-[45%] h-[45%] rounded-full bg-emerald-500/5 blur-[140px] pointer-events-none animate-luxury-glow-slow" />
      <div className="absolute bottom-[20%] left-[-10%] w-[45%] h-[45%] rounded-full bg-indigo-500/5 blur-[140px] pointer-events-none animate-luxury-glow-fast" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] sm:text-xs font-bold text-emerald-400 tracking-widest uppercase mb-4"
          >
            <Compass className="h-3.5 w-3.5" />
            <span>@GlobalGatewaysLuxury</span>
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-none">
            Our Voyage Log on Instagram
          </h2>
          <p className="mt-4 text-slate-400 text-xs sm:text-sm md:text-base font-body leading-relaxed max-w-xl mx-auto">
            Get inspired by real-time executive updates, client journals, and cinematic drone footage straight from our coordinates.
          </p>
        </div>

        {/* Instastory Avatars Block with Pulse Ring Animations */}
        <div className="flex justify-start sm:justify-center items-center gap-5 sm:gap-8 pb-10 overflow-x-auto no-scrollbar max-w-4xl mx-auto mb-14 border-b border-white/5 px-2">
          {[
            { label: 'Bali 🌴', img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=150&h=150&q=80' },
            { label: 'Kashmir 🏔️', img: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=150&h=150&q=80' },
            { label: 'Dubai 🚁', img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=150&h=150&q=80' },
            { label: 'Phuket ⛵', img: 'https://images.unsplash.com/photo-1528181304800-2f190854897d?auto=format&fit=crop&w=150&h=150&q=80' },
            { label: 'Goa 🐚', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=150&h=150&q=80' },
            { label: 'Yacht Life 🥂', img: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=150&h=150&q=80' }
          ].map((story, i) => (
            <motion.div 
              key={i} 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center gap-2 shrink-0 cursor-pointer group"
            >
              <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full p-[3px] bg-gradient-to-tr from-rose-500 via-pink-500 via-emerald-400 to-[#10B981] relative shadow-lg">
                <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-rose-500 via-[#10B981] to-blue-500 animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ animationDuration: '6s' }} />
                <div className="h-full w-full rounded-full bg-slate-950 p-[2.5px] relative z-10">
                  <img
                    src={story.img}
                    alt={story.label}
                    className="h-full w-full object-cover rounded-full filter brightness-90 group-hover:brightness-105 transition-all duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <span className="text-[10px] sm:text-xs font-semibold text-slate-400 group-hover:text-emerald-400 transition-colors">
                {story.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Filters Panel Navigation - High-end Pill switch design */}
        <div className="flex justify-start sm:justify-center items-center overflow-x-auto no-scrollbar whitespace-nowrap gap-2.5 max-w-3xl mx-auto mb-16 px-1.5 pb-2">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 sm:px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 border ${
                  isActive 
                    ? 'text-slate-950 border-transparent z-10 font-black' 
                    : 'text-slate-400 border-white/5 bg-slate-900/30 hover:bg-slate-900/60 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeIgTab"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400 to-[#10B981]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-15">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Asymmetrical Masonry Grid with Layout Shuffling Animations */}
        <motion.div 
          layout
          className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post) => {
              const postLiked = !!likedPosts[post.id];
              return (
                <motion.div
                  key={post.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                  onDoubleClick={() => handleDoubleTap(post)}
                  onClick={() => setSelectedPost(post)}
                  className={`relative ${post.aspect || 'aspect-square'} rounded-3xl overflow-hidden group cursor-pointer border border-white/5 hover:border-emerald-500/25 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300 before:absolute before:inset-0 before:bg-slate-950/25 before:z-5`}
                >
                  <img
                    src={post.image}
                    alt={post.id}
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 filter brightness-95"
                    referrerPolicy="no-referrer"
                  />

                  {/* Top bar indicators inside grid item */}
                  <div className="absolute top-3 inset-x-3 flex justify-between items-center z-15">
                    {/* Visual Tag */}
                    <span className="px-2.5 py-1 rounded-full bg-slate-950/70 backdrop-blur-md border border-white/10 text-[9px] font-black uppercase text-slate-300 tracking-wider">
                      {post.tag || 'VOYAGE'}
                    </span>

                    {/* Reels Unique play icon or duration badge */}
                    {post.type === 'video' && (
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/80 backdrop-blur-md text-slate-950 font-bold text-[9px] uppercase shadow-lg">
                        <Play className="h-3 w-3 fill-slate-950 text-slate-950" />
                        <span>{post.duration || 'REEL'}</span>
                      </div>
                    )}
                  </div>

                  {/* Double Tap heart pop animation layer */}
                  <AnimatePresence>
                    {doubleTapAnimation === post.id && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.3 }}
                        animate={{ opacity: 1, scale: 1.2 }}
                        exit={{ opacity: 0, scale: 0.3 }}
                        className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
                      >
                        <Heart className="h-20 w-20 fill-rose-500 text-rose-500 filter drop-shadow-[0_10px_15px_rgba(244,63,94,0.4)]" />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Bottom info strip showing previews dynamically on mobile/desktop */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent p-4 sm:p-5 z-10 flex flex-col justify-end translate-y-2 group-hover:translate-y-0 transition-all duration-300 opacity-90 group-hover:opacity-100">
                    <p className="text-[10px] text-emerald-400 font-bold tracking-wider uppercase mb-1.5 flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-emerald-400" />
                      <span>{post.location || 'Global Itinerary'}</span>
                    </p>
                    <p className="text-white text-xs font-semibold leading-relaxed line-clamp-2 mb-3">
                      {post.caption}
                    </p>

                    <div className="flex items-center justify-between text-xs border-t border-white/10 pt-2.5 mt-1">
                      <div className="flex items-center gap-3.5 font-bold">
                        <span className="flex items-center gap-1 text-slate-300">
                          <Heart className={`h-4 w-4 ${postLiked ? 'fill-rose-500 text-rose-500' : 'text-slate-400 group-hover:text-rose-500 transition-colors'}`} />
                          <span>{postLiked ? parseInt(post.likes) + 1 + 'k' : post.likes}</span>
                        </span>
                        
                        <span className="flex items-center gap-1 text-slate-300">
                          <MessageCircle className="h-4 w-4 text-slate-400 group-hover:text-blue-400 transition-colors" />
                          <span>{post.comments}</span>
                        </span>
                      </div>

                      <span className="inline-flex items-center gap-1 text-[9px] text-[#10B981] font-black uppercase tracking-widest bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                        <Eye className="h-3.5 w-3.5" />
                        <span>{post.views || '8.2K'}</span>
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Instagram Post Detail Lightbox Modal (Simulates Real High-Fidelity App UI) */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-lg">
            {/* Modal Backdrop Click dismissal */}
            <div 
              className="absolute inset-0 cursor-crosshair" 
              onClick={() => setSelectedPost(null)} 
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: 'spring', stiffness: 350, damping: 28 }}
              className="relative w-full max-w-4xl rounded-3xl overflow-hidden bg-[#0A0F1D]/90 border border-white/10 shadow-2xl flex flex-col md:flex-row z-10 max-h-[90vh]"
            >
              {/* Left / Top Side: Media Canvas Frame */}
              <div 
                className="relative flex-1 bg-black aspect-square md:aspect-auto md:h-[600px] flex items-center justify-center overflow-hidden cursor-pointer"
                onDoubleClick={() => handleDoubleTap(selectedPost)}
              >
                <img
                  src={selectedPost.image}
                  alt="Post preview"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />

                {/* Video Play HUD Overlay & Dynamic Mute Controller */}
                {selectedPost.type === 'video' ? (
                  <>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-16 w-16 rounded-full bg-slate-950/80 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-xl pointer-events-none animate-pulse">
                      <Play className="h-7 w-7 text-emerald-400 fill-emerald-400 ml-1 block" />
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsMuted(!isMuted);
                      }}
                      id="volume-sensor-toggle"
                      className="absolute bottom-4 right-4 p-2.5 rounded-full bg-slate-950/80 text-white border border-white/10 hover:scale-105 active:scale-95 transition-all z-20"
                    >
                      {isMuted ? <VolumeX className="h-4.5 w-4.5" /> : <Volume2 className="h-4.5 w-4.5 text-emerald-400" />}
                    </button>
                    
                    <div className="absolute bottom-4 left-4 px-2.5 py-1 rounded-md bg-emerald-500 text-slate-950 text-[10px] font-black uppercase tracking-widest flex items-center gap-1 shadow-lg pointer-events-none">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-950 opacity-75" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-slate-950" />
                      </span>
                      <span>PLAYING REEL</span>
                    </div>
                  </>
                ) : (
                  <div className="absolute bottom-4 left-4 px-2.5 py-1 rounded-md bg-white/10 backdrop-blur-md border border-white/10 text-white text-[10px] font-black uppercase tracking-widest flex items-center gap-1 pointer-events-none">
                    <span>STATIONARY MOMENT</span>
                  </div>
                )}

                {/* Double Tap heart pop animation overlay inside lightbox */}
                <AnimatePresence>
                  {doubleTapAnimation === selectedPost.id && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.3 }}
                      animate={{ opacity: 1, scale: 1.2 }}
                      exit={{ opacity: 0, scale: 0.3 }}
                      className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
                    >
                      <Heart className="h-24 w-24 fill-rose-500 text-rose-500 filter drop-shadow-[0_15px_20px_rgba(244,63,94,0.5)]" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Right / Bottom Side: Interaction & Comments Drawer */}
              <div className="w-full md:w-[380px] bg-slate-950 flex flex-col justify-between border-t md:border-t-0 md:border-l border-white/10 overflow-y-auto max-h-[40vh] md:max-h-full">
                
                {/* 1. Header (Author Info + Location) */}
                <div className="p-4 border-b border-white/5 flex items-center justify-between shrink-0 bg-[#060A13]">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-rose-500 to-[#10B981] p-[1.5px]">
                      <div className="h-full w-full rounded-full bg-slate-950 flex items-center justify-center text-[11px] font-black text-white">
                        GG
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white flex items-center gap-1">
                        <span>globalgateways_official</span>
                        <span className="h-3 w-3 rounded-full bg-blue-500 flex items-center justify-center text-[7px] text-white font-bold" title="Verified Brand">✓</span>
                      </h4>
                      <p className="text-[10px] text-slate-400 font-medium flex items-center gap-0.5">
                        <MapPin className="h-3 w-3 text-emerald-400" />
                        <span>{selectedPost.location || 'Resort Retreat'}</span>
                      </p>
                    </div>
                  </div>

                  <button
                    id="close-lightbox-btn"
                    onClick={() => setSelectedPost(null)}
                    className="p-1.5 rounded-full bg-slate-900 text-slate-400 hover:text-white border border-white/5 cursor-pointer max-md:hidden"
                  >
                    <X className="h-4.5 w-4.5" />
                  </button>
                </div>

                {/* 2. Scrollable Body (Captions + Simulated Live Community Feed) */}
                <div className="p-5 overflow-y-auto space-y-4 grow leading-relaxed">
                  <div className="space-y-1.5">
                    <span className="text-[9px] font-black uppercase text-emerald-400 tracking-widest px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 inline-block">
                      Original Post
                    </span>
                    <p className="text-slate-200 text-xs sm:text-sm font-body">
                      {selectedPost.caption}
                    </p>
                  </div>

                  {/* High fidelity comments to establish premium authenticity */}
                  <div className="border-t border-white/5 pt-4 space-y-3.5">
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Client Feedback (4)</p>
                    
                    <div className="text-xs flex gap-2.5 items-start">
                      <div className="h-7 w-7 rounded-full bg-indigo-950 p-[1px] shrink-0 text-center text-slate-400 text-[9px] font-bold py-1.5 border border-white/10">JD</div>
                      <div>
                        <p className="text-slate-300 font-bold"><span className="text-white hover:underline cursor-pointer">john_devon</span> <span className="font-normal text-slate-400">Pure luxury! Our team of directors is still talking about the catering quality. Exceptional coordinators.</span></p>
                        <p className="text-[9px] text-slate-500 mt-1 font-semibold">1d • 14 likes</p>
                      </div>
                    </div>

                    <div className="text-xs flex gap-2.5 items-start">
                      <div className="h-7 w-7 rounded-full bg-rose-950 p-[1px] shrink-0 text-center text-slate-400 text-[9px] font-bold py-1.5 border border-white/10">MA</div>
                      <div>
                        <p className="text-slate-300 font-bold"><span className="text-white hover:underline cursor-pointer">monica_atkins</span> <span className="font-normal text-slate-400">Is that the yacht from Phuket package? We would like to reserve it this August. Sending details!</span></p>
                        <p className="text-[9px] text-slate-500 mt-1 font-semibold">12h • Reply</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. Footer Activity Panel with Direct conversion triggers */}
                <div className="p-4 sm:p-5 border-t border-white/5 bg-[#060A13] shrink-0 space-y-4">
                  {/* Hearts, Shares, Comments counters */}
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-4 text-white font-bold">
                      <button 
                        onClick={() => toggleLike(selectedPost.id)} 
                        id="modal-heart-action"
                        className="flex items-center gap-1.5 hover:scale-105 active:scale-95 transition-transform cursor-pointer"
                      >
                        <Heart className={`h-5 w-5 ${likedPosts[selectedPost.id] ? 'fill-rose-500 text-rose-500' : 'text-slate-300'}`} />
                        <span>{likedPosts[selectedPost.id] ? parseInt(selectedPost.likes) + 1 + 'k' : selectedPost.likes}</span>
                      </button>
                      <span className="flex items-center gap-1.5 text-slate-300">
                        <MessageCircle className="h-5 w-5 text-slate-400" />
                        <span>{selectedPost.comments}</span>
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-slate-400 text-xs font-semibold">
                      <span className="flex items-center gap-1">
                        <Play className="h-4 w-4 text-emerald-400" />
                        <span>{selectedPost.views || '15K'} views</span>
                      </span>
                      <Bookmark className="h-4 w-4 hover:text-white cursor-pointer" />
                    </div>
                  </div>

                  {/* Primary Direct CTAs - Links fully pointing to our WhatsApp lead system */}
                  <div className="grid grid-cols-2 gap-2.5 pt-1">
                    <button
                      onClick={() => {
                        setSelectedPost(null);
                        const element = document.getElementById('contact');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      id="lightbox-direct-message-form"
                      className="bg-slate-900 hover:bg-slate-850 text-white font-bold py-3 px-2.5 rounded-xl text-[11px] uppercase tracking-wider border border-white/5 transition-all text-center flex items-center justify-center gap-1 cursor-pointer active:scale-97"
                    >
                      <Send className="h-3.5 w-3.5 text-slate-400" />
                      <span>Message Form</span>
                    </button>

                    <a
                      href={`https://wa.me/917973886918?text=${encodeURIComponent(`Hi Global Gateways! I was inspired by your Instagram post (${selectedPost.caption.substring(0, 50)}...) and want to inquire about custom options.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      id="lightbox-whatsapp-direct"
                      className="inline-flex justify-center items-center gap-1.5 bg-[#10B981] text-slate-950 hover:brightness-110 font-bold py-3 px-2.5 rounded-xl text-[11px] uppercase tracking-wider shadow-lg transition-all text-center active:scale-97"
                    >
                      <MessageCircle className="h-4.5 w-4.5 fill-slate-950 text-slate-950" />
                      <span>WhatsApp Book</span>
                    </a>
                  </div>
                </div>

              </div>

              {/* Mobile top close button floating */}
              <button
                id="close-lightbox-mobile"
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-950/80 text-slate-300 hover:text-white border border-white/15 cursor-pointer md:hidden z-30"
              >
                <X className="h-5 w-5" />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
