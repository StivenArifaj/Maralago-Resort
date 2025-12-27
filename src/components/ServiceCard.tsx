import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
  imageUrl?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon: Icon,
  link,
  imageUrl
}) => {
  return (
    <div className="glass-card overflow-hidden group hover:border-gold/50 transition-all duration-500 hover:shadow-2xl hover:shadow-gold/10 transform hover:-translate-y-2">
      <div className="relative h-64 overflow-hidden">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-black flex items-center justify-center">
            <Icon className="h-12 w-12 text-gold" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
        <div className="absolute bottom-4 left-4">
          <Icon className="h-8 w-8 text-gold mb-2 block lg:hidden group-hover:block transition-all duration-500" />
        </div>
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-serif font-bold mb-3 tracking-tight group-hover:text-gold transition-colors duration-300">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">{description}</p>
        <Link to={link} className="inline-flex items-center text-gold text-xs font-bold uppercase tracking-widest group-hover:translate-x-2 transition-transform duration-300">
          Discover Luxury <span className="ml-2">→</span>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;