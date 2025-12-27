import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import { Calendar, Music, Clock } from 'lucide-react';
import { useBooking } from '../contexts/BookingContext';

const BarPage: React.FC = () => {
  const { openBooking } = useBooking();
  const [activeCategory, setActiveCategory] = useState('signature');

  const drinkCategories = [
    { id: 'signature', name: 'Signature Cocktails' },
    { id: 'classics', name: 'Classic Cocktails' },
    { id: 'wines', name: 'Fine Wines' },
    { id: 'spirits', name: 'Premium Spirits' }
  ];

  const drinks = {
    signature: [
      {
        name: 'Golden Royale',
        description: 'Our signature cocktail with premium vodka, passion fruit, and 23k gold flakes',
        price: '€24',
        image: 'https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg'
      },
      {
        name: 'Maralago Sunset',
        description: 'Aged rum, fresh mango, lime, and a hint of chili, served with a smoked cinnamon stick',
        price: '€22',
        image: 'https://images.pexels.com/photos/2531188/pexels-photo-2531188.jpeg'
      },
      {
        name: 'Albanian Elixir',
        description: 'Local raki infused with forest berries, honey, and aromatic bitters',
        price: '€20',
        image: 'https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg'
      }
    ],
    classics: [
      {
        name: 'Old Fashioned',
        description: 'Woodford Reserve bourbon, sugar, bitters, and orange zest',
        price: '€18',
        image: 'https://images.pexels.com/photos/5947019/pexels-photo-5947019.jpeg'
      },
      {
        name: 'Negroni',
        description: 'Tanqueray gin, Campari, and Carpano Antica Formula vermouth',
        price: '€16',
        image: 'https://images.pexels.com/photos/4021983/pexels-photo-4021983.jpeg'
      },
      {
        name: 'Espresso Martini',
        description: 'Grey Goose vodka, Kahlúa, and freshly brewed espresso',
        price: '€17',
        image: 'https://images.pexels.com/photos/3407775/pexels-photo-3407775.jpeg'
      }
    ],
    wines: [
      {
        name: 'Château Margaux',
        description: 'Premier Grand Cru Classé, Margaux, Bordeaux, France',
        price: '€220/bottle',
        image: 'https://images.pexels.com/photos/2912108/pexels-photo-2912108.jpeg'
      },
      {
        name: 'Cloudy Bay Sauvignon Blanc',
        description: 'Marlborough, New Zealand',
        price: '€85/bottle',
        image: 'https://images.pexels.com/photos/1123260/pexels-photo-1123260.jpeg'
      },
      {
        name: 'Dom Pérignon Vintage',
        description: 'Champagne, France',
        price: '€320/bottle',
        image: 'https://images.pexels.com/photos/5379876/pexels-photo-5379876.jpeg'
      }
    ],
    spirits: [
      {
        name: 'Macallan 18 Years',
        description: 'Single Malt Scotch Whisky, Speyside, Scotland',
        price: '€45/glass',
        image: 'https://images.pexels.com/photos/5947028/pexels-photo-5947028.jpeg'
      },
      {
        name: 'Louis XIII',
        description: 'Cognac, Grande Champagne, France',
        price: '€180/glass',
        image: 'https://images.pexels.com/photos/6638835/pexels-photo-6638835.jpeg'
      },
      {
        name: 'Don Julio 1942',
        description: 'Añejo Tequila, Jalisco, Mexico',
        price: '€35/glass',
        image: 'https://images.pexels.com/photos/5379933/pexels-photo-5379933.jpeg'
      }
    ]
  };

  const events = [
    {
      name: 'Jazz Night',
      description: 'Live jazz performances by renowned local and international artists.',
      day: 'Every Friday',
      time: '8 PM - 11 PM',
      image: 'https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg'
    },
    {
      name: 'Mixology Masterclass',
      description: 'Learn to craft premium cocktails with our expert bartenders.',
      day: 'Saturdays',
      time: '5 PM - 7 PM',
      image: 'https://images.pexels.com/photos/2531186/pexels-photo-2531186.jpeg'
    },
    {
      name: 'Wine Tasting',
      description: 'Guided tasting of selected wines from our extensive collection.',
      day: 'Last Thursday of month',
      time: '7 PM - 9 PM',
      image: 'https://images.pexels.com/photos/5379876/pexels-photo-5379876.jpeg'
    }
  ];

  return (
    <>
      <PageHeader
        title="Premium Bar & Lounge"
        subtitle="Unwind with handcrafted cocktails and premium spirits in an elegant setting"
        backgroundImage="https://images.pexels.com/photos/274192/pexels-photo-274192.jpeg"
      />

      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="section-title">Royal Collections</h2>
            <p className="text-white/50 max-w-2xl mx-auto font-light leading-relaxed">
              Experience the pinnacle of mixology and fine vintages in our curated selection.
            </p>
          </motion.div>

          <div className="flex justify-center mb-16">
            <div className="flex flex-wrap justify-center gap-4 bg-white/[0.02] p-2 rounded-sm border border-white/5">
              {drinkCategories.map((category) => (
                <button
                  key={category.id}
                  className={`px-8 py-3 text-xs uppercase tracking-[0.2em] font-bold transition-all duration-500 rounded-sm ${activeCategory === category.id
                    ? 'bg-gold text-black shadow-[0_0_20px_rgba(201,163,85,0.3)]'
                    : 'text-white/40 hover:text-white hover:bg-white/[0.05]'
                    }`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            >
              {drinks[activeCategory as keyof typeof drinks].map((drink, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card group overflow-hidden"
                >
                  <div className="h-64 overflow-hidden relative">
                    <img
                      src={drink.image}
                      alt={drink.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80"></div>
                    <div className="absolute bottom-6 right-6">
                      <span className="text-gold font-serif text-2xl font-bold">{drink.price}</span>
                    </div>
                  </div>
                  <div className="p-10">
                    <h3 className="text-2xl font-serif font-bold mb-4 tracking-tight group-hover:text-gold transition-colors duration-300">{drink.name}</h3>
                    <p className="text-white/60 font-light leading-relaxed mb-0">{drink.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
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
            <h2 className="section-title">Elite Gatherings</h2>
            <p className="text-white/50 max-w-2xl mx-auto font-light leading-relaxed">
              Join us for curated evenings of music, culture, and refined entertainment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card group overflow-hidden"
              >
                <div className="h-60 overflow-hidden relative">
                  <img
                    src={event.image}
                    alt={event.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
                </div>
                <div className="p-10">
                  <h3 className="text-2xl font-serif font-bold mb-4 tracking-tight group-hover:text-gold transition-colors duration-300">{event.name}</h3>
                  <p className="text-white/50 mb-8 font-light leading-relaxed h-12 uppercase text-[10px] tracking-widest">{event.description}</p>

                  <div className="space-y-4">
                    <div className="flex items-center text-gold/80 group-hover:text-gold transition-colors">
                      <Calendar className="h-4 w-4 mr-3" />
                      <span className="text-sm font-medium tracking-wide">{event.day}</span>
                    </div>
                    <div className="flex items-center text-gold/80 group-hover:text-gold transition-colors">
                      <Clock className="h-4 w-4 mr-3" />
                      <span className="text-sm font-medium tracking-wide">{event.time}</span>
                    </div>
                  </div>
                </div>
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
              <h2 className="section-title">Sophisticated <br /><span className="gold-gradient">Ambience</span></h2>
              <p className="text-white/60 text-lg mb-8 leading-loose font-light">
                Step into a sanctuary of elegance, where every shadow and highlight is meticulously balanced. Our lounge is defined by intimate lighting, bespoke velvet furnishings, and a curated sensory experience.
              </p>
              <p className="text-white/60 text-lg mb-10 leading-loose font-light text-justify">
                From the gentle acoustic melodies to the subtle aroma of aged oak and premium botanicals, the Maralago Lounge is an invitation to pause and indulge in the finest moments of life.
              </p>
              <div className="flex items-center p-6 bg-gold/5 border border-gold/10 rounded-sm">
                <Music className="h-6 w-6 text-gold mr-6" />
                <span className="text-gold text-xs uppercase tracking-[0.3em] font-bold">Live Jazz Ensemble — Fri & Sat</span>
              </div>
            </motion.div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-6 relative z-10">
                {[
                  { src: 'https://images.pexels.com/photos/274192/pexels-photo-274192.jpeg', alt: 'Bar interior', shift: '' },
                  { src: 'https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg', alt: 'Bartender', shift: 'mt-12' },
                  { src: 'https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg', alt: 'Cocktail preparation', shift: '-mt-12' },
                  { src: 'https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg', alt: 'Signature cocktail', shift: '' }
                ].map((img, i) => (
                  <motion.img
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    src={img.src}
                    alt={img.alt}
                    className={`rounded-sm shadow-2xl ${img.shift}`}
                  />
                ))}
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gold/5 blur-[120px] rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-gold-dark to-gold p-8 md:p-12 rounded-lg text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-black mb-4">
              Reserve Your Table
            </h2>
            <p className="text-black text-lg mb-8 max-w-2xl mx-auto">
              Secure your spot at our exclusive bar for an evening of premium drinks and elegant ambiance.
            </p>
            <button
              onClick={() => openBooking('restaurant')}
              className="btn bg-black text-gold hover:bg-gray-900 rounded-sm text-lg"
            >
              Make a Reservation
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default BarPage;