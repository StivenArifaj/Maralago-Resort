import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import { Fuel, Car, Clock, CreditCard, ShoppingBag, Wrench, Hotel } from 'lucide-react';

const GasStationPage: React.FC = () => {
  const services = [
    {
      name: 'Premium Fuels',
      description: 'High-quality gasoline and diesel fuels for optimal vehicle performance.',
      icon: Fuel,
      details: ['95 Octane Gasoline', '98 Octane Gasoline', 'Premium Diesel', 'AdBlue']
    },
    {
      name: 'Car Wash',
      description: 'Professional cleaning services to keep your vehicle looking its best.',
      icon: Car,
      details: ['Express Wash', 'Deluxe Wash', 'Interior Cleaning', 'Hand Wax']
    },
    {
      name: 'Convenience Store',
      description: 'Quick access to snacks, beverages, and travel essentials.',
      icon: ShoppingBag,
      details: ['Snacks & Drinks', 'Automotive Supplies', 'Travel Necessities', 'Local Products']
    },
    {
      name: 'Vehicle Services',
      description: 'Basic maintenance and emergency services for your vehicle.',
      icon: Wrench,
      details: ['Tire Pressure Check', 'Fluid Top-ups', 'Battery Service', 'Minor Repairs']
    }
  ];

  const features = [
    {
      title: '24/7 Operation',
      description: 'Our gas station is open 24 hours a day, 7 days a week for your convenience.',
      icon: Clock
    },
    {
      title: 'Multiple Payment Options',
      description: 'We accept all major credit cards, cash, and mobile payment methods.',
      icon: CreditCard
    },
    {
      title: 'Charge to Room',
      description: 'Hotel guests can charge fuel and services directly to their room account.',
      icon: Hotel
    }
  ];

  return (
    <>
      <PageHeader
        title="Gas Station"
        subtitle="Full-service station for all your vehicle needs"
        backgroundImage="https://images.pexels.com/photos/2996057/pexels-photo-2996057.jpeg"
      />

      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="section-title">Royal Fleet Services</h2>
            <p className="text-white/50 max-w-2xl mx-auto font-light leading-relaxed">
              Experience convenience redefined with our comprehensive vehicle services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-10 group hover:border-gold/40 transition-all duration-500"
                >
                  <div className="flex items-center mb-8">
                    <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mr-6 group-hover:bg-gold/20 transition-colors duration-500 relative">
                      <Icon className="h-8 w-8 text-gold" />
                      <div className="absolute inset-0 bg-gold/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    <h3 className="text-3xl font-serif font-bold tracking-tight">{service.name}</h3>
                  </div>
                  <p className="text-white/60 mb-8 font-light leading-relaxed h-14">{service.description}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {service.details.map((detail, i) => (
                      <div key={i} className="flex items-center text-sm font-light text-white/80 py-2 border-b border-white/5 last:border-0">
                        <span className="text-gold mr-3">✦</span> {detail}
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
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
            <h2 className="section-title">Station Superiority</h2>
            <p className="text-white/50 max-w-2xl mx-auto font-light leading-relaxed">
              Every detail of our station is designed to provide you with a premium, seamless experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-10 text-center group hover:bg-gold/[0.02] transition-colors duration-500"
                >
                  <div className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-500">
                    <Icon className="h-10 w-10 text-gold" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-4 tracking-tight">{feature.title}</h3>
                  <p className="text-white/50 font-light leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-serif font-bold mb-6">Car Wash Services</h2>
              <p className="text-gray-300 mb-6">
                Keep your vehicle looking its best with our professional car wash services. We use premium products and equipment to ensure a thorough clean without damaging your vehicle's finish.
              </p>
              <div className="space-y-4 mb-8">
                <div className="bg-black bg-opacity-80 border border-gold-dark rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">Express Wash</h3>
                    <span className="text-gold">€10</span>
                  </div>
                  <p className="text-gray-400 text-sm">Exterior wash and basic dry</p>
                </div>
                <div className="bg-black bg-opacity-80 border border-gold-dark rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">Deluxe Wash</h3>
                    <span className="text-gold">€18</span>
                  </div>
                  <p className="text-gray-400 text-sm">Exterior wash, tire shine, and wax protection</p>
                </div>
                <div className="bg-black bg-opacity-80 border border-gold-dark rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">Premium Detail</h3>
                    <span className="text-gold">€35</span>
                  </div>
                  <p className="text-gray-400 text-sm">Complete exterior and interior cleaning</p>
                </div>
              </div>
              <p className="text-gray-400">
                Hotel guests receive a 15% discount on all car wash services.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="https://images.unsplash.com/photo-1590674852885-305f88998bc4?auto=format&fit=crop&q=80"
                alt="Car wash service"
                className="rounded-lg shadow-lg mb-6"
              />
              <img
                src="https://images.unsplash.com/photo-1527018263374-5adb6a54f01e?auto=format&fit=crop&q=80"
                alt="Gas station"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-12 md:p-20 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-[100px] rounded-full"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
              <div>
                <h2 className="text-4xl font-serif font-bold mb-10 tracking-tight">Location & <span className="gold-gradient">Connectivity</span></h2>
                <div className="space-y-10">
                  <div>
                    <h3 className="text-sm font-bold text-gold uppercase tracking-[0.3em] mb-4">Our Position</h3>
                    <p className="text-white/60 font-light leading-relaxed text-lg">
                      Excellently situated at the primary gateway of the Maralago Resort, our station provides seamless access for both esteemed guests and travelers.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-sm font-bold text-gold uppercase tracking-[0.3em] mb-4">Station Hours</h3>
                      <p className="text-white/80 font-medium">Open 24/7</p>
                      <p className="text-white/40 text-xs mt-1 uppercase tracking-widest">Year Round</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-gold uppercase tracking-[0.3em] mb-4">Car Wash</h3>
                      <p className="text-white/80 font-medium">7:00 AM — 10:00 PM</p>
                      <p className="text-white/40 text-xs mt-1 uppercase tracking-widest">Daily Service</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/[0.02] border border-white/5 p-10 rounded-sm">
                <h2 className="text-4xl font-serif font-bold mb-10 tracking-tight text-center lg:text-left">Elite <span className="gold-gradient">Fuels</span></h2>
                <div className="space-y-6">
                  {[
                    { name: '95 Octane Gasoline', price: '€1.65/L' },
                    { name: '98 Octane Gasoline', price: '€1.78/L' },
                    { name: 'Premium Diesel', price: '€1.55/L' },
                    { name: 'AdBlue', price: '€0.95/L' }
                  ].map((fuel, i) => (
                    <div key={i} className="flex justify-between items-center group/price cursor-default">
                      <span className="text-white/60 group-hover/price:text-white transition-colors duration-300 font-light">{fuel.name}</span>
                      <div className="flex-grow mx-4 border-b border-white/5 border-dashed"></div>
                      <span className="text-gold font-bold font-serif text-lg">{fuel.price}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-12 flex items-center justify-center lg:justify-start gap-4 p-4 bg-gold/5 rounded-sm border border-gold/10">
                  <div className="w-2 h-2 rounded-full bg-gold animate-pulse"></div>
                  <p className="text-[10px] text-gold uppercase tracking-[0.2em] font-bold">Live Market Pricing Protected</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default GasStationPage;