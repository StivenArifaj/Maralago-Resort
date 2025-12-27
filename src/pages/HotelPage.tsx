import React from 'react';
import { motion } from 'framer-motion';
import { Wifi, Coffee, Tv, Bath, Utensils, Car } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { useBooking } from '../contexts/BookingContext';

const HotelPage: React.FC = () => {
  const { openBooking } = useBooking();

  const rooms = [
    {
      name: 'Deluxe Room',
      description: 'Spacious room with a king-size bed and city views.',
      price: '€150',
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
      features: ['King-size bed', 'City view', 'Free Wi-Fi', '32" TV', 'Mini bar']
    },
    {
      name: 'Executive Suite',
      description: 'Luxurious suite with separate living area and premium amenities.',
      price: '€250',
      image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg',
      features: ['King-size bed', 'Separate living area', 'Free Wi-Fi', '42" TV', 'Mini bar', 'Bathtub']
    },
    {
      name: 'Royal Suite',
      description: 'Our most prestigious accommodation with panoramic views and butler service.',
      price: '€450',
      image: 'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg',
      features: ['King-size bed', 'Panoramic view', 'Free Wi-Fi', '55" TV', 'Mini bar', 'Jacuzzi', 'Butler service']
    },
    {
      name: 'Family Room',
      description: 'Comfortable room designed for families with connecting rooms.',
      price: '€200',
      image: 'https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg',
      features: ['2 Queen beds', 'Garden view', 'Free Wi-Fi', '42" TV', 'Mini bar', 'Connecting rooms available']
    }
  ];

  const amenities = [
    { name: 'Free Wi-Fi', icon: Wifi },
    { name: 'Room Service', icon: Utensils },
    { name: 'Flat-screen TV', icon: Tv },
    { name: 'Luxury Bathroom', icon: Bath },
    { name: 'Breakfast Included', icon: Coffee },
    { name: 'Free Parking', icon: Car }
  ];

  return (
    <>
      <PageHeader
        title="Luxury Accommodations"
        subtitle="Experience royal comfort in our elegantly designed rooms and suites"
        backgroundImage="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg"
      />

      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="section-title">Palatial <span className="gold-gradient">Residences</span></h2>
            <p className="text-white/50 max-w-2xl mx-auto font-light leading-relaxed">
              Every room is a masterwork of European design, blending contemporary technology with timeless royal elegance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {rooms.map((room, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card group overflow-hidden flex flex-col md:flex-row h-full"
              >
                <div className="w-full md:w-2/5 h-64 md:h-auto overflow-hidden relative">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
                </div>
                <div className="w-full md:w-3/5 p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-3xl font-serif font-bold tracking-tight group-hover:text-gold transition-colors duration-300">{room.name}</h3>
                    </div>
                    <p className="text-white/50 mb-8 font-light leading-relaxed">{room.description}</p>
                    <div className="grid grid-cols-2 gap-y-3 gap-x-4 mb-10">
                      {room.features.slice(0, 4).map((feature, i) => (
                        <div key={i} className="flex items-center text-[10px] text-white/40 uppercase tracking-widest font-bold">
                          <span className="text-gold mr-2">✦</span> {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-6 border-t border-white/5">
                    <div>
                      <span className="text-gold text-2xl font-serif font-bold">{room.price}</span>
                      <span className="text-white/30 text-[10px] uppercase tracking-widest ml-2">Per Night</span>
                    </div>
                    <button
                      onClick={() => openBooking('hotel')}
                      className="px-6 py-3 bg-white/[0.03] border border-white/10 hover:bg-gold hover:text-black transition-all duration-500 text-[10px] uppercase tracking-[0.2em] font-bold rounded-sm"
                    >
                      Reserve
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
            <h2 className="section-title">Palatial <span className="gold-gradient">Amenities</span></h2>
            <p className="text-white/50 max-w-2xl mx-auto font-light leading-relaxed">
              Every detail is curated to provide a seamless blend of convenience and royal comfort.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
            {amenities.map((amenity, index) => {
              const Icon = amenity.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-gold/5 flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/10 transition-all duration-500 relative">
                    <Icon className="h-8 w-8 text-gold group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gold/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-white/60 group-hover:text-gold transition-colors">{amenity.name}</h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-32 relative overflow-hidden bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-12 md:p-24 text-center relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 tracking-tighter">
                The Crown of <span className="gold-gradient">Hospitality</span>
              </h2>
              <p className="text-white/60 text-lg mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                Step into a world where every desire is anticipated and every moment is a celebration of the extraordinary.
              </p>
              <button
                onClick={() => openBooking('hotel')}
                className="group relative px-12 py-6 bg-gold overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(201,163,85,0.4)]"
              >
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                <span className="relative z-10 text-black text-xs uppercase tracking-[0.4em] font-bold group-hover:text-black">Begin Your Royal Stay</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HotelPage;