import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, ArrowUpRight } from 'lucide-react';
import { INSTAGRAM_POSTS, GYM_INFO } from '../data/gymData';

const InstagramIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
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
              className="px-6 py-3 rounded-full bg-white border border-zinc-200 text-black font-heading font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:border-pink-500 hover:text-pink-600 transition-colors shadow-sm"
            >
              <InstagramIcon className="w-4 h-4 text-pink-500" />
              @oxygen_gym01
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <a
              href={GYM_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-white border border-zinc-200 text-black font-heading font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:border-blue-500 hover:text-blue-600 transition-colors shadow-sm"
            >
              <FacebookIcon className="w-4 h-4 text-blue-500" />
              Facebook Page
              <ArrowUpRight className="w-3.5 h-3.5" />
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
                alt="Oxygen Gym Instagram Feed"
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
