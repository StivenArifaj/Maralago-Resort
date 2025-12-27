import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import { useBooking } from '../contexts/BookingContext';
import { ChefHat } from 'lucide-react';

const RestaurantPage: React.FC = () => {
  const { openBooking } = useBooking();
  const [activeCategory, setActiveCategory] = useState('starters');

  const menuCategories = [
    { id: 'starters', name: 'Starters' },
    { id: 'mains', name: 'Main Courses' },
    { id: 'desserts', name: 'Desserts' },
    { id: 'drinks', name: 'Drinks' }
  ];

  const menuItems = {
    starters: [
      {
        name: 'Truffle Arancini',
        description: 'Crispy risotto balls with black truffle and mozzarella',
        price: '€18',
        image: 'https://images.pexels.com/photos/6941001/pexels-photo-6941001.jpeg'
      },
      {
        name: 'Tuna Tartare',
        description: 'Fresh tuna with avocado, sesame oil, and crispy wonton',
        price: '€22',
        image: 'https://images.pexels.com/photos/8969237/pexels-photo-8969237.jpeg'
      },
      {
        name: 'Foie Gras',
        description: 'Pan-seared foie gras with caramelized figs and port reduction',
        price: '€26',
        image: 'https://images.pexels.com/photos/6419746/pexels-photo-6419746.jpeg'
      }
    ],
    mains: [
      {
        name: 'Wagyu Beef Filet',
        description: 'Grade A5 Wagyu beef with truffle mashed potatoes and seasonal vegetables',
        price: '€65',
        image: 'https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg'
      },
      {
        name: 'Lobster Risotto',
        description: 'Creamy saffron risotto with fresh Maine lobster and asparagus',
        price: '€48',
        image: 'https://images.pexels.com/photos/725997/pexels-photo-725997.jpeg'
      },
      {
        name: 'Rack of Lamb',
        description: 'Herb-crusted lamb rack with rosemary jus and ratatouille',
        price: '€42',
        image: 'https://images.pexels.com/photos/323682/pexels-photo-323682.jpeg'
      }
    ],
    desserts: [
      {
        name: 'Chocolate Soufflé',
        description: 'Warm chocolate soufflé with vanilla bean ice cream',
        price: '€16',
        image: 'https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg'
      },
      {
        name: 'Crème Brûlée',
        description: 'Classic vanilla bean crème brûlée with caramelized sugar',
        price: '€14',
        image: 'https://images.pexels.com/photos/8365688/pexels-photo-8365688.jpeg'
      },
      {
        name: 'Tiramisu',
        description: 'Traditional Italian tiramisu with espresso and mascarpone',
        price: '€15',
        image: 'https://images.pexels.com/photos/6601202/pexels-photo-6601202.jpeg'
      }
    ],
    drinks: [
      {
        name: 'Signature Martini',
        description: 'House-infused vodka with elderflower and lemon twist',
        price: '€18',
        image: 'https://images.pexels.com/photos/613037/pexels-photo-613037.jpeg'
      },
      {
        name: 'Aged Negroni',
        description: 'Barrel-aged Negroni with premium gin and vermouth',
        price: '€20',
        image: 'https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg'
      },
      {
        name: 'Wine Selection',
        description: 'Extensive collection of fine wines from around the world',
        price: 'From €12',
        image: 'https://images.pexels.com/photos/2912108/pexels-photo-2912108.jpeg'
      }
    ]
  };

  const chefs = [
    {
      name: 'Marco Rossi',
      title: 'Executive Chef',
      bio: 'With over 20 years of experience in Michelin-starred restaurants across Europe, Chef Marco brings his passion for innovative cuisine to Maralago Resort.',
      image: 'https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg'
    },
    {
      name: 'Sophie Laurent',
      title: 'Pastry Chef',
      bio: 'Trained in Paris, Chef Sophie creates exquisite desserts that are as beautiful as they are delicious, combining classic techniques with modern presentation.',
      image: 'https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg'
    }
  ];

  return (
    <>
      <PageHeader
        title="Fine Dining Experience"
        subtitle="Savor exquisite cuisine in an elegant atmosphere"
        backgroundImage="https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg"
      />

      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="section-title">The Culinary <span className="gold-gradient">Masterpiece</span></h2>
            <p className="text-white/50 max-w-2xl mx-auto font-light leading-relaxed">
              Explore a menu where seasonal purity meets avant-garde technique.
            </p>
          </motion.div>

          <div className="flex justify-center mb-16">
            <div className="flex flex-wrap justify-center gap-4 bg-white/[0.02] p-2 rounded-sm border border-white/5">
              {menuCategories.map((category) => (
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
              {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card group overflow-hidden"
                >
                  <div className="h-64 overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80"></div>
                    <div className="absolute bottom-6 right-6">
                      <span className="text-gold font-serif text-2xl font-bold">{item.price}</span>
                    </div>
                  </div>
                  <div className="p-10">
                    <h3 className="text-2xl font-serif font-bold mb-4 tracking-tight group-hover:text-gold transition-colors duration-300">{item.name}</h3>
                    <p className="text-white/60 font-light leading-relaxed mb-0">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="text-center mt-20">
            <button
              onClick={() => openBooking('restaurant')}
              className="btn btn-primary rounded-sm"
            >
              Reserve a Table
            </button>
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
            <h2 className="section-title">The <span className="gold-gradient">Visionaries</span></h2>
            <p className="text-white/50 max-w-2xl mx-auto font-light leading-relaxed">
              Meet the masters of fire and spice who transform raw ingredients into ethereal experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {chefs.map((chef, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="glass-card overflow-hidden flex flex-col lg:flex-row group"
              >
                <div className="lg:w-1/3 h-80 lg:h-auto overflow-hidden relative">
                  <img
                    src={chef.image}
                    alt={chef.name}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gold/10 mix-blend-overlay"></div>
                </div>
                <div className="lg:w-2/3 p-12">
                  <div className="flex items-center gap-4 mb-2">
                    <ChefHat className="w-5 h-5 text-gold" />
                    <span className="text-gold text-[10px] uppercase tracking-[0.3em] font-bold">{chef.title}</span>
                  </div>
                  <h3 className="text-3xl font-serif font-bold mb-6 tracking-tight">{chef.name}</h3>
                  <div className="w-12 h-[1px] bg-gold/30 mb-8"></div>
                  <p className="text-white/50 font-light leading-loose italic">"{chef.bio}"</p>
                </div>
              </motion.div>
            ))}
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
                The Table of <span className="gold-gradient">Kings</span>
              </h2>
              <p className="text-white/60 text-lg mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                Reserve your evening in our sanctuary of gastronomy, where every plate tells a story of heritage and innovation.
              </p>
              <button
                onClick={() => openBooking('restaurant')}
                className="group relative px-12 py-6 bg-gold overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(201,163,85,0.4)]"
              >
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                <span className="relative z-10 text-black text-xs uppercase tracking-[0.4em] font-bold group-hover:text-black">Secure Your Reservation</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default RestaurantPage;