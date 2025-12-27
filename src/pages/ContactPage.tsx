import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: [
        '+355 69 123 4567 (General)',
        '+355 69 765 4321 (Reservations)'
      ]
    },
    {
      icon: Mail,
      title: 'Email',
      details: [
        'info@maralagoResort.com',
        'reservations@maralagoResort.com'
      ]
    },
    {
      icon: MapPin,
      title: 'Address',
      details: [
        '123 Luxury Lane, Tirana,',
        'Albania, 1001'
      ]
    },
    {
      icon: Clock,
      title: 'Reception Hours',
      details: [
        'Open 24 hours daily',
        '365 days a year'
      ]
    }
  ];

  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="We're here to assist you with any inquiries or special requests"
        backgroundImage="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg"
      />

      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-8">Get in Touch</h2>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gold mb-2" htmlFor="name">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-3 bg-gray-900 border border-gray-700 rounded focus:border-gold focus:outline-none"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gold mb-2" htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 bg-gray-900 border border-gray-700 rounded focus:border-gold focus:outline-none"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gold mb-2" htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-3 bg-gray-900 border border-gray-700 rounded focus:border-gold focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-gold mb-2" htmlFor="subject">Subject</label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full p-3 bg-gray-900 border border-gray-700 rounded focus:border-gold focus:outline-none"
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="reservation">Reservation Inquiry</option>
                        <option value="feedback">Feedback</option>
                        <option value="special-request">Special Request</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gold mb-2" htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full p-3 bg-gray-900 border border-gray-700 rounded focus:border-gold focus:outline-none"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary rounded-sm"
                  >
                    Send Message
                  </button>
                </form>
              ) : (
                <div className="bg-black bg-opacity-80 border border-gold-dark rounded-lg p-8 text-center">
                  <div className="text-gold text-5xl mb-4">✓</div>
                  <h3 className="text-2xl font-serif font-bold mb-2">Message Sent!</h3>
                  <p className="text-gray-400 mb-6">
                    Thank you for contacting Maralago Resort. We've received your message and will respond shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn btn-outline rounded-sm"
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </div>

            <div>
              <h2 className="text-3xl font-serif font-bold mb-8">Contact Information</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="bg-black bg-opacity-80 border border-gold-dark rounded-lg p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 rounded-full bg-gold-dark flex items-center justify-center mr-3">
                          <Icon className="h-5 w-5 text-black" />
                        </div>
                        <h3 className="text-lg font-serif font-bold">{info.title}</h3>
                      </div>
                      <div className="pl-13">
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-gray-300">{detail}</p>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="bg-black bg-opacity-80 border border-gold-dark rounded-lg overflow-hidden">
                <div className="aspect-w-16 aspect-h-9 h-80">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47894.95397309302!2d19.7913216!3d41.3275459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1350310470fac5db%3A0x40092af10653720!2sTirana%2C%20Albania!5e0!3m2!1sen!2sus!4v1653608096952!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Maralago Resort Location"
                  ></iframe>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold mb-2">Find Us</h3>
                  <p className="text-gray-400">
                    Located in a serene area just outside Tirana's city center, Maralago Resort offers a peaceful retreat while remaining accessible to all major attractions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Find quick answers to common questions about Maralago Resort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-black bg-opacity-80 border border-gold-dark rounded-lg p-6">
              <h3 className="text-lg font-serif font-bold mb-2">What are the check-in and check-out times?</h3>
              <p className="text-gray-400">
                Check-in is at 3:00 PM and check-out is at 12:00 PM. Early check-in and late check-out can be arranged based on availability.
              </p>
            </div>
            <div className="bg-black bg-opacity-80 border border-gold-dark rounded-lg p-6">
              <h3 className="text-lg font-serif font-bold mb-2">Is breakfast included with the room?</h3>
              <p className="text-gray-400">
                Yes, all room rates include our gourmet breakfast buffet served daily from 7:00 AM to 10:30 AM.
              </p>
            </div>
            <div className="bg-black bg-opacity-80 border border-gold-dark rounded-lg p-6">
              <h3 className="text-lg font-serif font-bold mb-2">Do you offer airport transfers?</h3>
              <p className="text-gray-400">
                Yes, we provide luxury airport transfers for an additional fee. Please contact our concierge to arrange this service.
              </p>
            </div>
            <div className="bg-black bg-opacity-80 border border-gold-dark rounded-lg p-6">
              <h3 className="text-lg font-serif font-bold mb-2">Is the waterpark included for hotel guests?</h3>
              <p className="text-gray-400">
                Yes, all hotel guests enjoy complimentary access to the waterpark during their stay.
              </p>
            </div>
            <div className="bg-black bg-opacity-80 border border-gold-dark rounded-lg p-6">
              <h3 className="text-lg font-serif font-bold mb-2">Do you accommodate special dietary requirements?</h3>
              <p className="text-gray-400">
                Absolutely. Our restaurants can accommodate various dietary needs including vegetarian, vegan, gluten-free, and allergy-specific requirements.
              </p>
            </div>
            <div className="bg-black bg-opacity-80 border border-gold-dark rounded-lg p-6">
              <h3 className="text-lg font-serif font-bold mb-2">Is there a dress code for the restaurants?</h3>
              <p className="text-gray-400">
                Our main restaurant has a smart casual dress code for dinner. The fine dining restaurant requires formal attire. Breakfast and lunch are casual.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;