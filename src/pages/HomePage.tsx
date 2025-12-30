import React from 'react';
import { motion } from 'framer-motion';
import { Hotel, Utensils, Waves, Wine, Space as Spa, Scissors, Baby, Car, ShoppingBag, Fuel } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import Testimonial from '../components/Testimonial';
import { useBooking } from '../contexts/BookingContext';

const HomePage: React.FC = () => {
  const { openBooking } = useBooking();

  const services = [
    {
      title: 'Luxury Hotel',
      description: 'Experience unparalleled comfort in our elegantly designed rooms and suites.',
      icon: Hotel,
      link: '/hotel',
      imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80'
    },
    {
      title: 'Fine Dining',
      description: 'Savor exquisite cuisine prepared by our world-class chefs.',
      icon: Utensils,
      link: '/restaurant',
      imageUrl: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg'
    },
    {
      title: 'Waterpark',
      description: 'Dive into fun with thrilling slides and relaxing pools for all ages.',
      icon: Waves,
      link: '/waterpark',
      imageUrl: 'https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?auto=format&fit=crop&q=80'
    },
    {
      title: 'Premium Bar',
      description: 'Unwind with handcrafted cocktails and premium spirits in an elegant setting.',
      icon: Wine,
      link: '/bar',
      imageUrl: 'https://images.pexels.com/photos/274192/pexels-photo-274192.jpeg'
    },
    {
      title: 'Rejuvenating Spa',
      description: 'Indulge in therapeutic treatments that restore balance to body and mind.',
      icon: Spa,
      link: '/spa',
      imageUrl: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg'
    },
    {
      title: 'Beauty Salon',
      description: 'Look your best with our professional beauty and styling services.',
      icon: Scissors,
      link: '/beauty-salon',
      imageUrl: 'https://images.pexels.com/photos/3997383/pexels-photo-3997383.jpeg'
    },
    {
      title: 'Kids Area',
      description: 'A safe and fun environment where children can play and create memories.',
      icon: Baby,
      link: '/kids-area',
      imageUrl: 'https://images.pexels.com/photos/3662667/pexels-photo-3662667.jpeg'
    },
    {
      title: 'Secure Parking',
      description: 'Worry-free parking with 24/7 security for your vehicle.',
      icon: Car,
      link: '/parking',
      imageUrl: 'https://images.pexels.com/photos/1004665/pexels-photo-1004665.jpeg'
    },
    {
      title: 'Supermarket',
      description: 'Convenient shopping for essentials and local specialties.',
      icon: ShoppingBag,
      link: '/supermarket',
      imageUrl: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg'
    },
    {
      title: 'Gas Station',
      description: 'Full-service station for all your vehicle needs.',
      icon: Fuel,
      link: '/gas-station',
      imageUrl: 'https://images.pexels.com/photos/2996057/pexels-photo-2996057.jpeg'
    }
  ];

  const testimonials = [
    {
      quote: "The most luxurious resort I've ever experienced. The attention to detail is impeccable.",
      author: "Alexandra Smith",
      rating: 5,
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      quote: "From the waterpark to the fine dining, everything exceeded our expectations. A true 5-star experience.",
      author: "Michael Johnson",
      rating: 5,
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      quote: "The spa treatments were divine. I've never felt so relaxed and pampered.",
      author: "Emma Williams",
      rating: 5,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black z-10 transition-opacity duration-1000"></div>
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "linear" }}
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1920&q=80')`
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center justify-center mb-6"
            >
              <div className="h-[1px] w-12 bg-gold mr-4"></div>
              <span className="text-gold text-sm tracking-[0.4em] uppercase font-light">Experience Excellence</span>
              <div className="h-[1px] w-12 bg-gold ml-4"></div>
            </motion.div>

            <motion.h1
              className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold mb-8 leading-[0.9] tracking-tighter"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              The Art of <br />
              <span className="gold-gradient">Royal Living</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12 font-light leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Indulge in a world where luxury knows no bounds. Maralago Resort offers a sanctuary of tranquility and unparalleled opulence in the heart of Albania.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button
                onClick={() => openBooking('hotel')}
                className="btn btn-primary group"
              >
                <span>Book Your Royal Stay</span>
                <span className="ml-3 group-hover:translate-x-1 transition-transform inline-block">→</span>
              </button>
              <button
                onClick={() => openBooking('restaurant')}
                className="btn btn-outline"
              >
                Explore Dining
              </button>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <div className="w-[1px] h-20 bg-gradient-to-b from-gold to-transparent"></div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-32 bg-black overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="section-title">A Symphony of <br /><span className="gold-gradient">Luxury & Nature</span></h2>
              <p className="text-white/60 text-lg mb-8 leading-loose font-light">
                Nestled in the breathtaking landscapes of Tirana, Albania, Maralago Resort is more than just a destination—it's a testament to refined living. We have meticulously crafted an environment where every detail speaks of elegance and every moment is an invitation to tranquility.
              </p>
              <p className="text-white/60 text-lg mb-10 leading-loose font-light">
                From our world-class architecture to our personalized services, we strive to exceed the expectations of the modern traveler. Whether you seek adventure in our waterpark or serenity in our royal spa, your journey at Maralago is defined by excellence.
              </p>
              <div className="flex items-center gap-12">
                <div>
                  <span className="block text-4xl font-serif text-gold font-bold mb-1">5★</span>
                  <span className="text-[10px] text-white/40 uppercase tracking-widest leading-none">Rating</span>
                </div>
                <div className="w-[1px] h-12 bg-white/10"></div>
                <div>
                  <span className="block text-4xl font-serif text-gold font-bold mb-1">200+</span>
                  <span className="text-[10px] text-white/40 uppercase tracking-widest leading-none">Luxury Suites</span>
                </div>
                <div className="w-[1px] h-12 bg-white/10"></div>
                <div>
                  <span className="block text-4xl font-serif text-gold font-bold mb-1">10</span>
                  <span className="text-[10px] text-white/40 uppercase tracking-widest leading-none">Royal Services</span>
                </div>
              </div>
            </motion.div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-6 relative z-10">
                <motion.img
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80"
                  alt="Resort exterior"
                  className="rounded-sm shadow-2xl"
                />
                <motion.img
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80"
                  alt="Resort pool"
                  className="rounded-sm shadow-2xl mt-12"
                />
                <motion.img
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80"
                  alt="Resort restaurant"
                  className="rounded-sm shadow-2xl -mt-12"
                />
                <motion.img
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80"
                  alt="Resort room"
                  className="rounded-sm shadow-2xl"
                />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gold/5 blur-[120px] rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Royal Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Discover the complete range of luxurious amenities and services available at Maralago Resort.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
                imageUrl={service.imageUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Guest Experiences</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Hear what our esteemed guests have to say about their time at Maralago Resort.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Testimonial
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                rating={testimonial.rating}
                image={testimonial.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1920')`
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>

        <div className="container mx-auto px-6 relative z-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight">Your Royal Story <br /><span className="gold-gradient">Begins Here</span></h2>
            <p className="text-xl text-white/70 mb-12 font-light leading-relaxed">
              Step into a world of unparalleled luxury and personalized service. Whether it's a weekend retreat or an extended stay, Maralago Resort promises an experience that transcends the ordinary.
            </p>
            <button
              onClick={() => openBooking('hotel')}
              className="btn btn-primary px-12 py-5 text-base"
            >
              Reserve Your Experience
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HomePage;