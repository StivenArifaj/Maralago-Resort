import React from 'react';
import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';
import { Shield, Clock, Users, Droplets } from 'lucide-react';
import { useBooking } from '../contexts/BookingContext';

const WaterparkPage: React.FC = () => {
  const { openBooking } = useBooking();

  const attractions = [
    {
      name: 'Royal Plunge',
      description: 'Our signature water slide with a 15-meter drop and thrilling twists.',
      image: 'https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?auto=format&fit=crop&q=80',
      height: '15m',
      thrill: 'High'
    },
    {
      name: 'Lazy River',
      description: 'Relax and float along our 500-meter lazy river that winds through lush landscapes.',
      image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&q=80',
      length: '500m',
      thrill: 'Low'
    },
    {
      name: 'Wave Pool',
      description: 'Experience ocean-like waves in our massive wave pool with varying intensity levels.',
      image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80',
      size: '1,200 sq m',
      thrill: 'Medium'
    },
    {
      name: 'Kids Splash Zone',
      description: 'A safe and fun water playground designed specifically for younger guests.',
      image: 'https://images.unsplash.com/photo-1562095241-8c6714fd4178?auto=format&fit=crop&q=80',
      age: '2-12 years',
      thrill: 'Low'
    }
  ];

  const tickets = [
    {
      name: 'Day Pass',
      description: 'Full day access to all waterpark attractions',
      adultPrice: '€45',
      childPrice: '€25'
    },
    {
      name: 'Half-Day Pass',
      description: 'Access after 2 PM to all waterpark attractions',
      adultPrice: '€30',
      childPrice: '€18'
    },
    {
      name: 'Family Package',
      description: '2 adults and 2 children with full day access',
      price: '€120'
    },
    {
      name: 'Resort Guest',
      description: 'Complimentary access for hotel guests',
      price: 'Included with stay'
    }
  ];

  const safetyFeatures = [
    { name: 'Certified Lifeguards', icon: Shield },
    { name: 'Regular Water Testing', icon: Droplets },
    { name: 'Extended Hours', icon: Clock },
    { name: 'Height Requirements', icon: Users }
  ];

  return (
    <>
      <PageHeader
        title="Maralago Waterpark"
        subtitle="Dive into excitement and relaxation at our world-class waterpark"
        backgroundImage="https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?auto=format&fit=crop&q=80"
      />

      <section className="py-32 bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="section-title">Water Attractions</h2>
            <p className="text-white/50 max-w-2xl mx-auto font-light leading-relaxed">
              Explore our collection of world-class water features, from adrenaline-pumping slides to serene lazy rivers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {attractions.map((attraction, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card group overflow-hidden"
              >
                <div className="h-80 overflow-hidden relative">
                  <img
                    src={attraction.image}
                    alt={attraction.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                  <div className="absolute top-6 right-6">
                    <span className={`px-4 py-1.5 rounded-sm text-[10px] uppercase tracking-widest font-bold ${attraction.thrill === 'High'
                      ? 'bg-burgundy text-white shadow-[0_0_15px_rgba(158,42,43,0.5)]'
                      : attraction.thrill === 'Medium'
                        ? 'bg-gold text-black'
                        : 'bg-green-700 text-white'
                      }`}>
                      {attraction.thrill} Thrill
                    </span>
                  </div>
                </div>
                <div className="p-10">
                  <h3 className="text-3xl font-serif font-bold mb-4 tracking-tight group-hover:text-gold transition-colors duration-300">{attraction.name}</h3>
                  <p className="text-white/60 mb-8 font-light leading-relaxed">{attraction.description}</p>
                  <div className="flex flex-wrap gap-4">
                    {attraction.height && (
                      <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-sm text-xs font-light text-white/80">
                        <span className="text-gold mr-2 font-bold select-none">HEIGHT</span> {attraction.height}
                      </div>
                    )}
                    {attraction.length && (
                      <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-sm text-xs font-light text-white/80">
                        <span className="text-gold mr-2 font-bold select-none">LENGTH</span> {attraction.length}
                      </div>
                    )}
                    {attraction.size && (
                      <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-sm text-xs font-light text-white/80">
                        <span className="text-gold mr-2 font-bold select-none">SIZE</span> {attraction.size}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Tickets & Pricing</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Choose the perfect ticket option for your visit to Maralago Waterpark.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tickets.map((ticket, index) => (
              <div key={index} className="bg-black bg-opacity-80 border border-gold-dark rounded-lg p-6 text-center">
                <h3 className="text-xl font-serif font-bold mb-2">{ticket.name}</h3>
                <p className="text-gray-400 mb-4 h-12">{ticket.description}</p>
                {ticket.adultPrice && ticket.childPrice ? (
                  <div className="mb-6">
                    <p className="text-gold text-lg font-bold">{ticket.adultPrice} <span className="text-sm font-normal">/ adult</span></p>
                    <p className="text-gold text-lg font-bold">{ticket.childPrice} <span className="text-sm font-normal">/ child</span></p>
                  </div>
                ) : (
                  <p className="text-gold text-lg font-bold mb-6">{ticket.price}</p>
                )}
                <button
                  onClick={() => openBooking('waterpark')}
                  className="btn btn-outline rounded-sm w-full"
                >
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Safety First</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Your safety is our priority. Learn about our comprehensive safety measures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {safetyFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gold-dark flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">{feature.name}</h3>
                  {feature.name === 'Certified Lifeguards' && (
                    <p className="text-gray-400">Our lifeguards are trained and certified to international standards.</p>
                  )}
                  {feature.name === 'Regular Water Testing' && (
                    <p className="text-gray-400">We test our water quality multiple times daily to ensure safety.</p>
                  )}
                  {feature.name === 'Extended Hours' && (
                    <p className="text-gray-400">Open from 10 AM to 8 PM daily during summer season.</p>
                  )}
                  {feature.name === 'Height Requirements' && (
                    <p className="text-gray-400">Clear height and age requirements for each attraction.</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-32 relative overflow-hidden bg-black">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
        <div className="container mx-auto px-6">
          <div className="glass-card p-12 md:p-24 text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-3xl"></div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight tracking-tighter">
                Ready for a <span className="gold-gradient">Splash?</span>
              </h2>
              <p className="text-white/60 text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                Book your waterpark experience now and embark on a journey of pure excitement. Royal treatment awaits you at every turn.
              </p>
              <button
                onClick={() => openBooking('waterpark')}
                className="btn btn-primary px-16 py-6 text-lg tracking-widest font-bold"
              >
                Get Your Tickets
              </button>
            </motion.div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
      </section>
    </>
  );
};

export default WaterparkPage;