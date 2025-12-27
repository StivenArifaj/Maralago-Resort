import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  rating: number;
  image?: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, rating, image }) => {
  return (
    <div className="glass-card p-10 relative group hover:border-gold/30 transition-all duration-500">
      <div className="absolute -top-4 -left-4 text-6xl text-gold/20 font-serif leading-none select-none group-hover:text-gold/30 transition-colors duration-500">"</div>
      <div className="flex mb-6">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={`mr-1 ${i < rating ? "text-gold fill-gold" : "text-gray-600"}`}
          />
        ))}
      </div>
      <p className="text-gray-300 leading-loose mb-8 font-light italic">"{quote}"</p>
      <div className="flex items-center">
        {image && (
          <div className="relative">
            <img
              src={image}
              alt={author}
              className="w-12 h-12 rounded-full object-cover mr-4 border border-gold/20"
            />
            <div className="absolute inset-0 rounded-full bg-gold/10 blur-sm -z-10"></div>
          </div>
        )}
        <div>
          <span className="block font-serif text-lg text-white font-bold leading-none mb-1">{author}</span>
          <span className="text-[10px] text-gold uppercase tracking-[0.2em]">Verified Guest</span>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;