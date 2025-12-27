import React from 'react';
import PageHeader from '../components/PageHeader';
import { Clock, Shield, Car } from 'lucide-react';

const ParkingPage: React.FC = () => {
  const parkingOptions = [
    {
      name: 'Standard Parking',
      description: 'Covered parking spaces for resort guests and visitors.',
      rate: '€5 per hour | €20 per day',
      features: ['24/7 access', 'CCTV surveillance', 'Well-lit area']
    },
    {
      name: 'VIP Parking',
      description: 'Premium parking spaces located closest to resort entrances.',
      rate: '€10 per hour | €40 per day',
      features: ['24/7 access', 'CCTV surveillance', 'Well-lit area', 'Priority location', 'Valet service available']
    },
    {
      name: 'Long-term Parking',
      description: 'Discounted rates for extended stays at the resort.',
      rate: '€15 per day (3+ days) | €80 per week',
      features: ['24/7 access', 'CCTV surveillance', 'Well-lit area', 'Regular security patrols']
    },
    {
      name: 'Electric Vehicle Parking',
      description: 'Dedicated spaces with charging stations for electric vehicles.',
      rate: 'Standard parking rates + €5 for charging',
      features: ['24/7 access', 'CCTV surveillance', 'Well-lit area', 'EV charging stations']
    }
  ];

  const securityFeatures = [
    {
      title: '24/7 Security',
      description: 'Round-the-clock security personnel monitoring the parking areas.',
      icon: Clock
    },
    {
      title: 'CCTV Surveillance',
      description: 'Comprehensive camera coverage throughout all parking facilities.',
      icon: Shield
    },
    {
      title: 'Valet Service',
      description: 'Professional valet parking available for all resort guests.',
      icon: Car
    }
  ];

  return (
    <>
      <PageHeader
        title="Secure Parking Facilities"
        subtitle="Worry-free parking with 24/7 security for your vehicle"
        backgroundImage="https://images.pexels.com/photos/1004665/pexels-photo-1004665.jpeg"
      />

      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Parking Options</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Choose from our range of secure parking options to suit your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {parkingOptions.map((option, index) => (
              <div key={index} className="bg-black bg-opacity-80 border border-gold-dark rounded-lg p-6">
                <h3 className="text-xl font-serif font-bold mb-2">{option.name}</h3>
                <p className="text-gray-400 mb-4">{option.description}</p>
                <p className="text-gold font-bold mb-4">{option.rate}</p>
                <h4 className="text-lg font-medium mb-2">Features:</h4>
                <ul className="space-y-2">
                  {option.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <span className="text-gold mr-2">✓</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Parking Security</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Your vehicle's safety is our priority. Learn about our comprehensive security measures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => {
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6">Parking Information</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium text-gold mb-2">Location</h3>
                  <p className="text-gray-300">
                    Our parking facilities are conveniently located adjacent to the main resort building with clear signage and easy access.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gold mb-2">Capacity</h3>
                  <p className="text-gray-300">
                    With over 300 parking spaces, including 150 covered spaces, we ensure ample parking for all our guests and visitors.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gold mb-2">Hours of Operation</h3>
                  <p className="text-gray-300">
                    Our parking facilities are accessible 24 hours a day, 7 days a week for your convenience.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gold mb-2">Payment Methods</h3>
                  <p className="text-gray-300">
                    We accept all major credit cards, cash, and mobile payment options. Hotel guests can charge parking to their room.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-black bg-opacity-80 border border-gold-dark rounded-lg overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1004665/pexels-photo-1004665.jpeg"
                  alt="Parking facility"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold mb-4">Parking Map</h3>
                  <div className="aspect-w-16 aspect-h-9 bg-gray-800 rounded-lg mb-4 h-64 flex items-center justify-center">
                    <p className="text-gray-400">Interactive parking map showing available spaces</p>
                  </div>
                  <p className="text-gray-400">
                    The interactive map above shows real-time parking availability. Green spaces are available, red are occupied, and blue are reserved for special purposes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-gold-dark to-gold p-8 md:p-12 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-black mb-4">
                  Valet Parking Service
                </h2>
                <p className="text-black text-lg mb-6">
                  For the ultimate convenience, our professional valet service is available at the main entrance of the resort.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-black">
                    <span className="font-bold mr-2">✓</span> Available 24/7
                  </li>
                  <li className="flex items-center text-black">
                    <span className="font-bold mr-2">✓</span> €15 per service
                  </li>
                  <li className="flex items-center text-black">
                    <span className="font-bold mr-2">✓</span> Complimentary for Royal Suite guests
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <img
                  src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg"
                  alt="Valet parking"
                  className="rounded-lg shadow-lg inline-block"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ParkingPage;