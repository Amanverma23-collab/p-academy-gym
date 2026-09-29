import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, ArrowUpRight } from 'lucide-react';
import { INSTAGRAM_POSTS, GYM_INFO } from '../data/gymData';

const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2"/>
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
    <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"/>
  </svg>
);

const FacebookIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

export default function SocialFeed() {
  return (
    <section className="py-24 bg-zinc-50 relative border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-2 block">
              Follow Our Journey
            </span>
            <h2 className="font-heading font-extrabold text-4xl sm:text-5xl text-black tracking-tight leading-none">
              Social Community.
            </h2>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href={GYM_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] text-white font-heading font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:opacity-95 hover:scale-105 transition-all shadow-sm"
            >
              <InstagramIcon className="w-4 h-4 text-white" />
              <span>@p_academy_gym</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </a>

            <a
              href={GYM_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-[#1877F2] text-white font-heading font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-[#166fe5] hover:scale-105 transition-all shadow-sm"
            >
              <FacebookIcon className="w-4 h-4 text-white" />
              <span>Facebook Page</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </a>
          </div>
        </div>

        {/* Instagram Visual Post Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INSTAGRAM_POSTS.map((post, index) => (
            <motion.a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden bg-white border border-zinc-200 h-80 flex flex-col justify-end p-5 shadow-sm hover:shadow-md"
            >
              <img
                src={post.image}
                alt="P Academy Gym Instagram Feed"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

              <div className="relative z-10">
                <p className="text-xs text-zinc-100 line-clamp-2 mb-3 font-normal">
                  {post.caption}
                </p>

                <div className="flex items-center justify-between text-xs text-zinc-300 pt-3 border-t border-white/20 font-semibold">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Heart className="w-3.5 h-3.5 text-pink-400 fill-pink-400" />
                      {post.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                      {post.comments}
                    </span>
                  </div>
                  <InstagramIcon className="w-4 h-4 text-zinc-300 group-hover:text-pink-400 transition-colors" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
