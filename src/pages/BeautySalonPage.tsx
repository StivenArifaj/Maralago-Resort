import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import { Star } from 'lucide-react';
import { useBooking } from '../contexts/BookingContext';

const BeautySalonPage: React.FC = () => {
  const { openBooking } = useBooking();

  const services = [
    {
      category: 'Hair Services',
      items: [
        {
          name: 'Luxury Haircut & Styling',
          description: 'Precision cut and professional styling with premium products.',
          price: '€65+',
          duration: '60 min'
        },
        {
          name: 'Color Treatment',
          description: 'Full color, highlights, or balayage using luxury hair color products.',
          price: '€120+',
          duration: '120+ min'
        },
        {
          name: 'Hair Spa Treatment',
          description: 'Deep conditioning treatment to restore hair health and shine.',
          price: '€80',
          duration: '45 min'
        }
      ]
    },
    {
      category: 'Nail Services',
      items: [
        {
          name: 'Royal Manicure',
          description: 'Luxurious hand treatment with exfoliation, massage, and premium polish.',
          price: '€45',
          duration: '45 min'
        },
        {
          name: 'Deluxe Pedicure',
          description: 'Complete foot care with callus removal, scrub, massage, and polish.',
          price: '€60',
          duration: '60 min'
        },
        {
          name: 'Gel Extensions',
          description: 'Custom gel nail extensions with design options.',
          price: '€75+',
          duration: '90 min'
        }
      ]
    },
    {
      category: 'Facial Treatments',
      items: [
        {
          name: 'Gold Radiance Facial',
          description: 'Luxurious facial using 24k gold-infused products for ultimate skin rejuvenation.',
          price: '€150',
          duration: '75 min'
        },
        {
          name: 'Anti-Aging Treatment',
          description: 'Advanced treatment targeting fine lines and wrinkles with premium serums.',
          price: '€130',
          duration: '60 min'
        },
        {
          name: 'Hydrating Facial',
          description: 'Deep hydration treatment for dry or tired skin.',
          price: '€95',
          duration: '60 min'
        }
      ]
    },
    {
      category: 'Body Treatments',
      items: [
        {
          name: 'Body Scrub & Wrap',
          description: 'Full body exfoliation followed by a nourishing wrap and moisturizer application.',
          price: '€110',
          duration: '90 min'
        },
        {
          name: 'Slimming Treatment',
          description: 'Specialized treatment using advanced techniques to target problem areas.',
          price: '€130',
          duration: '75 min'
        }
      ]
    }
  ];

  const packages = [
    {
      name: 'Bridal Beauty Package',
      description: 'Complete pre-wedding beauty preparation including hair, makeup, facial, and nail services.',
      price: '€350',
      duration: '4 hours'
    },
    {
      name: 'Complete Makeover',
      description: 'Full transformation with haircut and color, facial, and makeup application.',
      price: '€280',
      duration: '3 hours'
    },
    {
      name: 'Men\'s Grooming',
      description: 'Haircut, facial, and hand grooming designed specifically for men.',
      price: '€150',
      duration: '2 hours'
    }
  ];

  return (
    <>
      <PageHeader
        title="Beauty Salon"
        subtitle="Look your best with our professional beauty and styling services"
        backgroundImage="https://images.pexels.com/photos/3997383/pexels-photo-3997383.jpeg"
      />

      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="section-title">The Art of <span className="gold-gradient">Radiance</span></h2>
            <p className="text-white/50 max-w-2xl mx-auto font-light leading-relaxed">
              Indulge in our comprehensive range of beauty services, where master artistry meets the world's finest products.
            </p>
          </motion.div>

          {services.map((category, index) => (
            <div key={index} className="mb-24 last:mb-0">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-6 mb-12"
              >
                <h3 className="text-3xl font-serif font-bold tracking-tight">{category.category}</h3>
                <div className="h-[1px] flex-grow bg-gradient-to-r from-gold/30 to-transparent"></div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {category.items.map((service, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="glass-card p-10 group hover:border-gold/30 transition-all duration-500 flex flex-col h-full"
                  >
                    <div className="flex justify-between items-start mb-6">
                      <h4 className="text-2xl font-serif font-bold tracking-tight group-hover:text-gold transition-colors duration-300">{service.name}</h4>
                    </div>
                    <p className="text-white/50 font-light leading-relaxed mb-8 flex-grow">{service.description}</p>
                    <div className="flex justify-between items-center mb-8 py-4 border-y border-white/5">
                      <span className="text-gold font-serif text-xl font-bold">{service.price}</span>
                      <div className="flex items-center text-white/40 text-xs uppercase tracking-widest font-bold">
                        <Star className="w-3 h-3 text-gold mr-2" />
                        {service.duration}
                      </div>
                    </div>
                    <button
                      onClick={() => openBooking('beauty')}
                      className="w-full py-4 text-[10px] uppercase tracking-[0.3em] font-bold border border-gold/20 hover:bg-gold hover:text-black transition-all duration-500 rounded-sm"
                    >
                      Secure Appointment
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
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
            <h2 className="section-title">Signature <span className="gold-gradient">Curation</span></h2>
            <p className="text-white/50 max-w-2xl mx-auto font-light leading-relaxed">
              Exclusively designed rituals that combine multiple treatments for a complete sensory transformation.
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
                <p className="text-white/50 mb-10 font-light leading-relaxed h-20 text-sm italic">"{pkg.description}"</p>
                <div className="mb-10 text-center">
                  <p className="text-gold text-4xl font-serif font-bold mb-2">{pkg.price}</p>
                  <p className="text-white/40 text-[10px] uppercase tracking-[0.3em] font-bold">{pkg.duration} Experience</p>
                </div>
                <button
                  onClick={() => openBooking('beauty')}
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
              className="order-2 lg:order-1"
            >
              <h2 className="section-title">Master <br /><span className="gold-gradient">Artisans</span></h2>
              <p className="text-white/60 text-lg mb-8 leading-loose font-light">
                Our salon is home to award-winning stylists and skin therapists who bring decades of global experience to Maralago. Each treatment is a bespoke consultation, tailored to your unique anatomical features and personal aesthetic vision.
              </p>
              <p className="text-white/60 text-lg mb-12 leading-loose font-light text-justify">
                We utilize only the purest biological ingredients and state-of-the-art dermatological tools, ensuring results that are not just visible, but transformative.
              </p>
              <button
                onClick={() => openBooking('beauty')}
                className="group relative px-10 py-5 bg-gold overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(201,163,85,0.4)]"
              >
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                <span className="relative z-10 text-black text-xs uppercase tracking-[0.4em] font-bold group-hover:text-black">Consult with an Expert</span>
              </button>
            </motion.div>

            <div className="relative order-1 lg:order-2">
              <div className="grid grid-cols-2 gap-6 relative z-10">
                {[
                  { src: 'https://images.pexels.com/photos/3997383/pexels-photo-3997383.jpeg', alt: 'Beauty salon', shift: '' },
                  { src: 'https://images.pexels.com/photos/3992855/pexels-photo-3992855.jpeg', alt: 'Beauty treatment', shift: 'mt-12' },
                  { src: 'https://images.pexels.com/photos/3997391/pexels-photo-3997391.jpeg', alt: 'Nail service', shift: '-mt-12' },
                  { src: 'https://images.pexels.com/photos/3985338/pexels-photo-3985338.jpeg', alt: 'Facial treatment', shift: '' }
                ].map((img, i) => (
                  <motion.img
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    src={img.src}
                    alt={img.alt}
                    className={`rounded-sm shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000 ${img.shift}`}
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

export default BeautySalonPage;