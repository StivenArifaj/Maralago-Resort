import React from 'react';
import { Link } from 'react-router-dom';
import { Crown, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-gold-dark">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Crown className="h-6 w-6 text-gold mr-2" />
              <h3 className="text-xl font-serif font-bold">
                <span className="gold-gradient">Maralago</span> Resort
              </h3>
            </div>
            <p className="text-gray-400 mb-4">
              Experience royal luxury in the tranquil heart of Tirana, Albania. Our resort offers a complete escape with world-class amenities and impeccable service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-serif font-bold mb-4 text-gold">Our Services</h4>
            <ul className="space-y-2">
              <li><Link to="/hotel" className="text-gray-400 hover:text-gold transition-colors">Hotel</Link></li>
              <li><Link to="/restaurant" className="text-gray-400 hover:text-gold transition-colors">Restaurant</Link></li>
              <li><Link to="/waterpark" className="text-gray-400 hover:text-gold transition-colors">Waterpark</Link></li>
              <li><Link to="/bar" className="text-gray-400 hover:text-gold transition-colors">Bar</Link></li>
              <li><Link to="/spa" className="text-gray-400 hover:text-gold transition-colors">Spa</Link></li>
              <li><Link to="/beauty-salon" className="text-gray-400 hover:text-gold transition-colors">Beauty Salon</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif font-bold mb-4 text-gold">More Services</h4>
            <ul className="space-y-2">
              <li><Link to="/kids-area" className="text-gray-400 hover:text-gold transition-colors">Kids Area</Link></li>
              <li><Link to="/parking" className="text-gray-400 hover:text-gold transition-colors">Parking</Link></li>
              <li><Link to="/supermarket" className="text-gray-400 hover:text-gold transition-colors">Supermarket</Link></li>
              <li><Link to="/gas-station" className="text-gray-400 hover:text-gold transition-colors">Gas Station</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-gold transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif font-bold mb-4 text-gold">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-gold mr-2 mt-0.5" />
                <p className="text-gray-400">123 Luxury Lane, Tirana, Albania</p>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-gold mr-2" />
                <p className="text-gray-400">+355 69 123 4567</p>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-gold mr-2" />
                <p className="text-gray-400">info@maralagoResort.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Maralago Resort. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;