import React from 'react';
import PageHeader from '../components/PageHeader';
import { Clock, ShoppingBag, CreditCard } from 'lucide-react';

const SupermarketPage: React.FC = () => {
  const departments = [
    {
      name: 'Fresh Produce',
      description: 'Locally sourced fruits and vegetables, organic options available.',
      image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg'
    },
    {
      name: 'Gourmet Deli',
      description: 'Premium meats, cheeses, and prepared foods for quick meals.',
      image: 'https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg'
    },
    {
      name: 'Bakery',
      description: 'Freshly baked breads, pastries, and desserts made daily.',
      image: 'https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg'
    },
    {
      name: 'Wine & Spirits',
      description: 'Curated selection of fine wines, spirits, and local beverages.',
      image: 'https://images.pexels.com/photos/2912108/pexels-photo-2912108.jpeg'
    },
    {
      name: 'International Foods',
      description: 'Specialty products from around the world to satisfy any craving.',
      image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg'
    },
    {
      name: 'Essentials & Toiletries',
      description: 'Everything you need for your stay, from sundries to luxury toiletries.',
      image: 'https://images.pexels.com/photos/3737639/pexels-photo-3737639.jpeg'
    }
  ];

  const features = [
    {
      title: 'Extended Hours',
      description: 'Open daily from 7 AM to 11 PM for your convenience.',
      icon: Clock
    },
    {
      title: 'Room Delivery',
      description: 'Have your purchases delivered directly to your hotel room.',
      icon: ShoppingBag
    },
    {
      title: 'Charge to Room',
      description: 'Hotel guests can charge purchases to their room account.',
      icon: CreditCard
    }
  ];

  const specialties = [
    {
      name: 'Local Albanian Products',
      description: 'Discover authentic Albanian specialties including olive oils, honey, raki, and artisanal cheeses.',
      image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg'
    },
    {
      name: 'Gourmet Gift Baskets',
      description: 'Custom-made gift baskets featuring premium products, perfect for souvenirs or gifts.',
      image: 'https://images.pexels.com/photos/6061332/pexels-photo-6061332.jpeg'
    },
    {
      name: 'Prepared Meals',
      description: 'Chef-prepared meals ready to heat and enjoy in your room or villa.',
      image: 'https://images.pexels.com/photos/5677799/pexels-photo-5677799.jpeg'
    }
  ];

  return (
    <>
      <PageHeader
        title="Resort Supermarket"
        subtitle="Convenient shopping for essentials and local specialties"
        backgroundImage="https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg"
      />

      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Departments</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our well-stocked supermarket offers everything you need during your stay.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((department, index) => (
              <div key={index} className="bg-black bg-opacity-80 border border-gold-dark rounded-lg overflow-hidden group">
                <div className="h-48 overflow-hidden">
                  <img
                    src={department.image}
                    alt={department.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold mb-2">{department.name}</h3>
                  <p className="text-gray-400">{department.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Supermarket Features</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Enjoy these special services designed to enhance your shopping experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-black bg-opacity-80 border border-gold-dark rounded-lg p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-gold-dark flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-xl font-serif font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Specialty Offerings</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Discover these unique products and services available at our supermarket.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialties.map((specialty, index) => (
              <div key={index} className="bg-black bg-opacity-80 border border-gold-dark rounded-lg overflow-hidden group">
                <div className="h-48 overflow-hidden">
                  <img
                    src={specialty.image}
                    alt={specialty.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold mb-2">{specialty.name}</h3>
                  <p className="text-gray-400">{specialty.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6">Supermarket Information</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium text-gold mb-2">Location</h3>
                  <p className="text-gray-300">
                    Our supermarket is conveniently located on the ground floor of the main resort building, adjacent to the lobby.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gold mb-2">Hours</h3>
                  <p className="text-gray-300">
                    Open daily from 7:00 AM to 11:00 PM
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gold mb-2">Payment Methods</h3>
                  <p className="text-gray-300">
                    We accept all major credit cards, cash in multiple currencies, and mobile payment options. Hotel guests can charge purchases to their room.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gold mb-2">Special Services</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-300">
                      <span className="text-gold mr-2">✓</span> Room delivery service (available 8 AM - 10 PM)
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="text-gold mr-2">✓</span> Custom gift basket creation
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="text-gold mr-2">✓</span> Special dietary needs accommodated
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="text-gold mr-2">✓</span> Pre-order service for large orders
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/3962285/pexels-photo-3962285.jpeg"
                alt="Supermarket interior"
                className="rounded-lg shadow-lg mb-6"
              />
              <img
                src="https://images.pexels.com/photos/1005638/pexels-photo-1005638.jpeg"
                alt="Gourmet products"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SupermarketPage;