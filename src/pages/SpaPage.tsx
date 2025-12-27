import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import { useBooking } from '../contexts/BookingContext';
import { Clock } from 'lucide-react';

const SpaPage: React.FC = () => {
  const { openBooking } = useBooking();

  const treatments = [
    {
      name: 'Royal Relaxation Massage',
      description: 'A full-body massage using aromatic oils to relieve tension and promote relaxation.',
      duration: '90 min',
      price: '€120',
      image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg'
    },
    {
      name: 'Gold Facial Treatment',
      description: 'Luxurious facial using 24k gold-infused products to rejuvenate and brighten skin.',
      duration: '60 min',
      price: '€150',
      image: 'https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg'
    },
    {
      name: 'Hot Stone Therapy',
      description: 'Heated volcanic stones placed on key points to melt away muscle tension.',
      duration: '75 min',
      price: '€110',
      image: 'https://images.pexels.com/photos/3865676/pexels-photo-3865676.jpeg'
    },
    {
      name: 'Detox Body Wrap',
      description: 'Full body treatment to eliminate toxins and improve skin texture.',
      duration: '60 min',
      price: '€95',
      image: 'https://images.pexels.com/photos/3188/love-romantic-bath-candlelight.jpg'
    },
    {
      name: 'Couples Retreat Package',
      description: 'Side-by-side massages followed by private jacuzzi time with champagne.',
      duration: '120 min',
      price: '€280',
      image: 'https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg'
    },
    {
      name: 'Aromatherapy Journey',
      description: 'Personalized essential oil blend massage targeting specific wellness needs.',
      duration: '60 min',
      price: '€100',
      image: 'https://images.pexels.com/photos/3865557/pexels-photo-3865557.jpeg'
    }
  ];

  const packages = [
    {
      name: 'Royal Day Retreat',
      description: 'Full day of pampering including massage, facial, body scrub, and lunch.',
      price: '€350',
      duration: '5 hours'
    },
    {
      name: 'Stress Relief Package',
      description: 'Targeted treatments to relieve stress and tension, including massage and reflexology.',
      price: '€220',
      duration: '3 hours'
    },
    {
      name: 'Bridal Glow',
      description: 'Pre-wedding package with facial, body treatment, manicure, and pedicure.',
      price: '€280',
      duration: '4 hours'
    }
  ];

  return (
    <>
      <PageHeader
        title="Luxury Spa Retreat"
        subtitle="Indulge in rejuvenating treatments that restore balance to body and mind"
        backgroundImage="https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg"
      />

      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="section-title">The Wellness <span className="gold-gradient">Rituals</span></h2>
            <p className="text-white/50 max-w-2xl mx-auto font-light leading-relaxed">
              Discover a sanctuary of silence and restoration, where ancient wisdom meets contemporary luxury.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {treatments.map((treatment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card group overflow-hidden"
              >
                <div className="h-72 overflow-hidden relative">
                  <img
                    src={treatment.image}
                    alt={treatment.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80"></div>
                  <div className="absolute top-6 right-6">
                    <span className="px-4 py-1.5 bg-black/60 backdrop-blur-md border border-white/10 text-[10px] text-gold uppercase tracking-widest font-bold rounded-sm">
                      {treatment.price}
                    </span>
                  </div>
                </div>
                <div className="p-10">
                  <h3 className="text-2xl font-serif font-bold mb-4 tracking-tight group-hover:text-gold transition-colors duration-300">{treatment.name}</h3>
                  <p className="text-white/50 mb-8 font-light leading-relaxed h-12 overflow-hidden">{treatment.description}</p>
                  <div className="flex justify-between items-center pt-6 border-t border-white/5">
                    <div className="flex items-center text-white/40 text-xs uppercase tracking-widest font-bold">
                      <Clock className="w-4 h-4 text-gold mr-3" />
                      {treatment.duration}
                    </div>
                    <button
                      onClick={() => openBooking('spa')}
                      className="text-gold text-[10px] uppercase tracking-[0.3em] font-bold hover:translate-x-2 transition-transform duration-300"
                    >
                      Book Session →
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="section-title">The Master <span className="gold-gradient">Collections</span></h2>
            <p className="text-white/50 max-w-2xl mx-auto font-light leading-relaxed">
              Curated journeys designed for those who seek the pinnacle of restoration and luxury.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-12 text-center group hover:bg-gold/[0.02] transition-all duration-500"
              >
                <div className="mb-8">
                  <h3 className="text-3xl font-serif font-bold mb-4 tracking-tight group-hover:text-gold transition-colors">{pkg.name}</h3>
                  <div className="w-12 h-[1px] bg-gold/30 mx-auto group-hover:w-24 transition-all duration-500"></div>
                </div>
                <p className="text-white/50 mb-12 font-light leading-relaxed h-20 italic">"{pkg.description}"</p>
                <div className="mb-12">
                  <p className="text-gold text-4xl font-serif font-bold mb-2">{pkg.price}</p>
                  <p className="text-white/40 text-[10px] uppercase tracking-[0.3em] font-bold">{pkg.duration} Transformation</p>
                </div>
                <button
                  onClick={() => openBooking('spa')}
                  className="w-full py-4 bg-gold text-black text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-white transition-all duration-500 rounded-sm"
                >
                  Reserve Journey
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-black overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="section-title">Sanctuary of <br /><span className="gold-gradient">Silence</span></h2>
              <p className="text-white/60 text-lg mb-8 leading-loose font-light">
                Our state-of-the-art facilities are designed as a cathedral of wellness. From the hushed tones of our relaxation lounges to the purified mineral waters of our hydrotherapy circuit, every element is balanced to harmonize your biological rhythms.
              </p>
              <div className="grid grid-cols-1 gap-4 mb-10">
                {[
                  'Thermal Suite with Himalayan Salt Sauna',
                  'Hydrotherapy Pool with Oxygen Jets',
                  'Zen Lounge with Organic Tisanes',
                  'Private Ritual Suites with Chroma-therapy'
                ].map((item, i) => (
                  <div key={i} className="flex items-center text-white/80 group cursor-default">
                    <span className="text-gold mr-4 group-hover:scale-125 transition-transform">✦</span>
                    <span className="text-sm font-light tracking-wide">{item}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => openBooking('spa')}
                className="group relative px-10 py-5 bg-gold overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(201,163,85,0.4)]"
              >
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                <span className="relative z-10 text-black text-xs uppercase tracking-[0.4em] font-bold group-hover:text-black">Begin Your Transformation</span>
              </button>
            </motion.div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-6 relative z-10">
                {[
                  { src: 'https://images.pexels.com/photos/3757946/pexels-photo-3757946.jpeg', alt: 'Spa facility', shift: '' },
                  { src: 'https://images.pexels.com/photos/3757947/pexels-photo-3757947.jpeg', alt: 'Spa treatment room', shift: 'mt-12' },
                  { src: 'https://images.pexels.com/photos/3757940/pexels-photo-3757940.jpeg', alt: 'Spa products', shift: '-mt-12' },
                  { src: 'https://images.pexels.com/photos/3188/love-romantic-bath-candlelight.jpg', alt: 'Relaxation area', shift: '' }
                ].map((img, i) => (
                  <motion.img
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    src={img.src}
                    alt={img.alt}
                    className={`rounded-sm shadow-2xl sepia hover:sepia-0 transition-all duration-1000 ${img.shift}`}
                  />
                ))}
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gold/10 blur-[150px] rounded-full -z-10 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SpaPage;