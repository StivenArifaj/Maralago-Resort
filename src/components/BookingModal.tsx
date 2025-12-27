import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useBooking } from '../contexts/BookingContext';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const BookingModal: React.FC = () => {
  const { isModalOpen, bookingType, closeBooking } = useBooking();
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(
    new Date(new Date().setDate(new Date().getDate() + 1))
  );
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send data to a server
    console.log({
      bookingType,
      startDate,
      endDate,
      adults,
      children,
      name,
      email,
      phone
    });
    setSubmitted(true);
  };

  const getTitle = () => {
    switch (bookingType) {
      case 'hotel': return 'Book Your Stay';
      case 'restaurant': return 'Reserve a Table';
      case 'spa': return 'Book a Spa Treatment';
      case 'waterpark': return 'Book Waterpark Tickets';
      case 'beauty': return 'Book Beauty Service';
      default: return 'Make a Reservation';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80">
      <div className="bg-black border border-gold w-full max-w-md rounded-lg shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-gold-dark to-gold p-4 flex justify-between items-center">
          <h2 className="text-black font-serif text-xl font-bold">{getTitle()}</h2>
          <button 
            onClick={closeBooking}
            className="text-black hover:text-burgundy-dark transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="p-6">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gold mb-1">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2 bg-gray-900 border border-gray-700 rounded focus:border-gold focus:outline-none"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gold mb-1">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 bg-gray-900 border border-gray-700 rounded focus:border-gold focus:outline-none"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gold mb-1">Phone</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-2 bg-gray-900 border border-gray-700 rounded focus:border-gold focus:outline-none"
                  required
                />
              </div>
              
              {(bookingType === 'hotel' || bookingType === 'spa') && (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gold mb-1">Check-in</label>
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        minDate={new Date()}
                        className="w-full p-2 bg-gray-900 border border-gray-700 rounded focus:border-gold focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-gold mb-1">Check-out</label>
                      <DatePicker
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                        className="w-full p-2 bg-gray-900 border border-gray-700 rounded focus:border-gold focus:outline-none"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gold mb-1">Adults</label>
                      <select
                        value={adults}
                        onChange={(e) => setAdults(Number(e.target.value))}
                        className="w-full p-2 bg-gray-900 border border-gray-700 rounded focus:border-gold focus:outline-none"
                      >
                        {[1, 2, 3, 4, 5, 6].map(num => (
                          <option key={num} value={num}>{num}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-gold mb-1">Children</label>
                      <select
                        value={children}
                        onChange={(e) => setChildren(Number(e.target.value))}
                        className="w-full p-2 bg-gray-900 border border-gray-700 rounded focus:border-gold focus:outline-none"
                      >
                        {[0, 1, 2, 3, 4].map(num => (
                          <option key={num} value={num}>{num}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </>
              )}
              
              {bookingType === 'restaurant' && (
                <>
                  <div>
                    <label className="block text-gold mb-1">Date & Time</label>
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      showTimeSelect
                      dateFormat="MMMM d, yyyy h:mm aa"
                      minDate={new Date()}
                      className="w-full p-2 bg-gray-900 border border-gray-700 rounded focus:border-gold focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-gold mb-1">Number of Guests</label>
                    <select
                      value={adults}
                      onChange={(e) => setAdults(Number(e.target.value))}
                      className="w-full p-2 bg-gray-900 border border-gray-700 rounded focus:border-gold focus:outline-none"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12].map(num => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                    </select>
                  </div>
                </>
              )}
              
              {bookingType === 'waterpark' && (
                <>
                  <div>
                    <label className="block text-gold mb-1">Visit Date</label>
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      minDate={new Date()}
                      className="w-full p-2 bg-gray-900 border border-gray-700 rounded focus:border-gold focus:outline-none"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gold mb-1">Adults</label>
                      <select
                        value={adults}
                        onChange={(e) => setAdults(Number(e.target.value))}
                        className="w-full p-2 bg-gray-900 border border-gray-700 rounded focus:border-gold focus:outline-none"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                          <option key={num} value={num}>{num}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-gold mb-1">Children</label>
                      <select
                        value={children}
                        onChange={(e) => setChildren(Number(e.target.value))}
                        className="w-full p-2 bg-gray-900 border border-gray-700 rounded focus:border-gold focus:outline-none"
                      >
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                          <option key={num} value={num}>{num}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </>
              )}
              
              {bookingType === 'beauty' && (
                <>
                  <div>
                    <label className="block text-gold mb-1">Service Date & Time</label>
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      showTimeSelect
                      dateFormat="MMMM d, yyyy h:mm aa"
                      minDate={new Date()}
                      className="w-full p-2 bg-gray-900 border border-gray-700 rounded focus:border-gold focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-gold mb-1">Service Type</label>
                    <select
                      className="w-full p-2 bg-gray-900 border border-gray-700 rounded focus:border-gold focus:outline-none"
                    >
                      <option value="haircut">Haircut & Styling</option>
                      <option value="manicure">Manicure & Pedicure</option>
                      <option value="facial">Facial Treatment</option>
                      <option value="massage">Massage</option>
                      <option value="makeup">Professional Makeup</option>
                    </select>
                  </div>
                </>
              )}
              
              <div>
                <label className="block text-gold mb-1">Special Requests</label>
                <textarea
                  className="w-full p-2 bg-gray-900 border border-gray-700 rounded focus:border-gold focus:outline-none h-24"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full btn btn-primary rounded"
              >
                Complete Booking
              </button>
            </form>
          ) : (
            <div className="text-center py-6">
              <div className="text-gold text-5xl mb-4">✓</div>
              <h3 className="text-xl font-serif font-bold mb-2">Booking Confirmed!</h3>
              <p className="text-gray-400 mb-6">
                Thank you for your booking. We've sent a confirmation to your email.
              </p>
              <button
                onClick={closeBooking}
                className="btn btn-outline rounded"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;