import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Crown, ChevronDown } from 'lucide-react';
import { useBooking } from '../contexts/BookingContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { openBooking } = useBooking();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Hotel', path: '/hotel' },
    { name: 'Restaurant', path: '/restaurant' },
    { name: 'Waterpark', path: '/waterpark' },
    { name: 'Bar', path: '/bar' },
    { name: 'Spa', path: '/spa' },
    { name: 'Beauty Salon', path: '/beauty-salon' },
    { name: 'Kids Area', path: '/kids-area' },
    { name: 'Parking', path: '/parking' },
    { name: 'Supermarket', path: '/supermarket' },
    { name: 'Gas Station', path: '/gas-station' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${isScrolled
        ? 'bg-black/80 backdrop-blur-lg border-b border-white/10 shadow-2xl py-2'
        : 'bg-transparent py-4'
        }`}
    >
      <div className="w-full px-4 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center group shrink-0">
            <div className="relative">
              <Crown className="h-8 w-8 md:h-10 md:w-10 text-gold mr-2 md:mr-3 transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gold/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl md:text-2xl font-serif font-bold text-white tracking-widest leading-none">
                <span className="gold-gradient">MARALAGO</span>
              </h1>
              <p className="text-[8px] md:text-[10px] text-gold-light uppercase tracking-[0.3em] font-light mt-1">Royal Albania</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link to="/" className={`nav-link text-xs px-2 py-1 ${location.pathname === '/' ? 'active-nav-link' : ''}`}>HOME</Link>
            <Link to="/hotel" className={`nav-link text-xs px-2 py-1 ${location.pathname === '/hotel' ? 'active-nav-link' : ''}`}>HOTEL</Link>
            <Link to="/restaurant" className={`nav-link text-xs px-2 py-1 ${location.pathname === '/restaurant' ? 'active-nav-link' : ''}`}>RESTAURANT</Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className={`nav-link text-xs px-2 py-1 flex items-center gap-1 ${['/waterpark', '/bar', '/spa', '/beauty-salon', '/kids-area', '/parking', '/supermarket', '/gas-station'].includes(location.pathname) ? 'active-nav-link' : ''}`}>
                SERVICES <ChevronDown size={14} />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-black/95 backdrop-blur-xl border border-white/10 rounded-sm shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top pt-2">
                <div className="py-2 flex flex-col">
                  {navLinks.filter(link => !['Home', 'Hotel', 'Restaurant', 'Contact'].includes(link.name)).map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`px-6 py-2 text-xs text-white/70 hover:text-gold hover:bg-white/5 transition-colors uppercase tracking-wider text-left ${location.pathname === link.path ? 'text-gold bg-white/5' : ''}`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/contact" className={`nav-link text-xs px-2 py-1 ${location.pathname === '/contact' ? 'active-nav-link' : ''}`}>CONTACT</Link>

            <button
              onClick={() => openBooking('hotel')}
              className="btn btn-primary rounded-sm px-5 py-2.5 text-xs font-bold shrink-0 shadow-lg ml-4"
            >
              BOOK NOW
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white hover:text-gold transition-colors duration-300 p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden fixed inset-x-0 top-[72px] bg-black/95 backdrop-blur-2xl border-b border-white/10 p-8 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300 h-[calc(100vh-72px)] overflow-y-auto">
            <ul className="flex flex-col space-y-4">
              <li className="space-y-4">
                <Link to="/" className={`block text-lg uppercase tracking-widest font-light nav-link ${location.pathname === '/' ? 'text-gold' : ''}`}>Home</Link>
                <Link to="/hotel" className={`block text-lg uppercase tracking-widest font-light nav-link ${location.pathname === '/hotel' ? 'text-gold' : ''}`}>Hotel</Link>
                <Link to="/restaurant" className={`block text-lg uppercase tracking-widest font-light nav-link ${location.pathname === '/restaurant' ? 'text-gold' : ''}`}>Restaurant</Link>
              </li>

              <li className="pt-4 border-t border-white/10">
                <span className="text-gold-dark text-xs uppercase tracking-[0.2em] font-bold block mb-4">Services</span>
                <div className="grid grid-cols-1 gap-4 pl-4 border-l border-white/10">
                  {navLinks.filter(link => !['Home', 'Hotel', 'Restaurant', 'Contact'].includes(link.name)).map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`block text-sm uppercase tracking-wider text-white/70 hover:text-gold ${location.pathname === link.path ? 'text-gold' : ''}`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </li>

              <li className="pt-4 border-t border-white/10">
                <Link to="/contact" className={`block text-lg uppercase tracking-widest font-light nav-link ${location.pathname === '/contact' ? 'text-gold' : ''}`}>Contact</Link>
              </li>

              <li className="pt-6">
                <button
                  onClick={() => openBooking('hotel')}
                  className="btn btn-primary rounded-sm w-full py-4 text-sm font-bold"
                >
                  Book Your Royal Stay
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>

  );
};

export default Header;