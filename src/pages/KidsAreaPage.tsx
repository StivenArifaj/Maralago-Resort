import React from 'react';
import PageHeader from '../components/PageHeader';
import { Shield, Clock, Users } from 'lucide-react';

const KidsAreaPage: React.FC = () => {
  const activities = [
    {
      name: 'Adventure Playground',
      description: 'Multi-level play structure with slides, climbing walls, and obstacle courses.',
      ageRange: '4-12 years',
      image: 'https://images.pexels.com/photos/3662667/pexels-photo-3662667.jpeg'
    },
    {
      name: 'Arts & Crafts Studio',
      description: 'Creative space for painting, drawing, and making crafts with professional guidance.',
      ageRange: '3-12 years',
      image: 'https://images.pexels.com/photos/8612921/pexels-photo-8612921.jpeg'
    },
    {
      name: 'Mini Sports Zone',
      description: 'Safe area for basketball, soccer, and other sports activities.',
      ageRange: '5-12 years',
      image: 'https://images.pexels.com/photos/3076514/pexels-photo-3076514.jpeg'
    },
    {
      name: 'Toddler Corner',
      description: 'Soft play area designed specifically for our youngest guests.',
      ageRange: '0-3 years',
      image: 'https://images.pexels.com/photos/3933021/pexels-photo-3933021.jpeg'
    },
    {
      name: 'Video Game Lounge',
      description: 'Age-appropriate video games and interactive experiences.',
      ageRange: '8-16 years',
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg'
    },
    {
      name: 'Movie Theater',
      description: 'Regular screenings of family-friendly movies in our mini cinema.',
      ageRange: 'All ages',
      image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg'
    }
  ];

  const programs = [
    {
      name: 'Morning Adventure',
      time: '9 AM - 12 PM',
      activities: 'Arts & crafts, outdoor games, storytelling',
      meals: 'Healthy snacks included'
    },
    {
      name: 'Afternoon Fun',
      time: '1 PM - 4 PM',
      activities: 'Swimming, sports, creative play',
      meals: 'Lunch and snacks included'
    },
    {
      name: 'Evening Program',
      time: '6 PM - 9 PM',
      activities: 'Movie night, board games, quiet activities',
      meals: 'Dinner included'
    },
    {
      name: 'Full Day Experience',
      time: '9 AM - 4 PM',
      activities: 'Comprehensive program with varied activities',
      meals: 'All meals and snacks included'
    }
  ];

  const safetyFeatures = [
    {
      title: 'Certified Staff',
      description: 'All our childcare professionals are certified in first aid and child development.',
      icon: Shield
    },
    {
      title: 'Secure Check-in/out',
      description: 'Strict security protocols for child drop-off and pick-up.',
      icon: Users
    },
    {
      title: 'Age-Appropriate Zones',
      description: 'Separate areas designed for different age groups with suitable activities and equipment.',
      icon: Clock
    }
  ];

  return (
    <>
      <PageHeader
        title="Kids' Play Area"
        subtitle="A safe and fun environment where children can play and create memories"
        backgroundImage="https://images.pexels.com/photos/3662667/pexels-photo-3662667.jpeg"
      />

      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Activities & Facilities</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Discover our range of fun and educational activities designed for children of all ages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <div key={index} className="bg-black bg-opacity-80 border border-gold-dark rounded-lg overflow-hidden group">
                <div className="h-48 overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold mb-2">{activity.name}</h3>
                  <p className="text-gray-400 mb-4">{activity.description}</p>
                  <div className="inline-block bg-gold-dark text-black px-3 py-1 rounded-full text-sm">
                    {activity.ageRange}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Kids' Programs</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Structured programs designed to entertain and educate children while parents enjoy the resort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <div key={index} className="bg-black bg-opacity-80 border border-gold-dark rounded-lg p-6">
                <h3 className="text-xl font-serif font-bold mb-4">{program.name}</h3>
                <div className="mb-4">
                  <p className="text-gold font-medium mb-1">Time:</p>
                  <p className="text-gray-300">{program.time}</p>
                </div>
                <div className="mb-4">
                  <p className="text-gold font-medium mb-1">Activities:</p>
                  <p className="text-gray-300">{program.activities}</p>
                </div>
                <div>
                  <p className="text-gold font-medium mb-1">Meals:</p>
                  <p className="text-gray-300">{program.meals}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-gray-400 mb-6">
              All programs are available for resort guests. Advance booking is recommended.
            </p>
            <p className="text-gray-400">
              Additional fee applies for non-hotel guests.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Safety First</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Your child's safety is our top priority. Learn about our comprehensive safety measures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {safetyFeatures.map((feature, index) => {
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

          <div className="mt-12 bg-black bg-opacity-80 border border-gold-dark rounded-lg p-6">
            <h3 className="text-xl font-serif font-bold mb-4">Additional Safety Measures</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex items-start">
                <span className="text-gold mr-2">✓</span>
                <span className="text-gray-300">CCTV monitoring throughout the kids' area</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">✓</span>
                <span className="text-gray-300">Regular safety inspections of all equipment</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">✓</span>
                <span className="text-gray-300">Child-safe materials and furniture</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">✓</span>
                <span className="text-gray-300">Allergy-aware environment with staff trained in allergy management</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">✓</span>
                <span className="text-gray-300">Emergency protocols and evacuation procedures</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">✓</span>
                <span className="text-gray-300">Background-checked staff with child protection training</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-gold-dark to-gold p-8 md:p-12 rounded-lg text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-black mb-4">
              Let Your Kids Have Fun
            </h2>
            <p className="text-black text-lg mb-8 max-w-2xl mx-auto">
              While you enjoy the resort's amenities, your children can have their own memorable experiences in our kids' area.
            </p>
            <p className="text-black font-medium mb-8">
              Available daily from 9 AM to 9 PM
            </p>
            <a
              href="/contact"
              className="btn bg-black text-gold hover:bg-gray-900 rounded-sm text-lg"
            >
              Contact for Details
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default KidsAreaPage;