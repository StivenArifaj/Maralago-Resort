import React, { createContext, useState, useContext, ReactNode } from 'react';

type BookingType = 'hotel' | 'restaurant' | 'spa' | 'waterpark' | 'beauty' | null;

interface BookingContextType {
  isModalOpen: boolean;
  bookingType: BookingType;
  openBooking: (type: BookingType) => void;
  closeBooking: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};

interface BookingProviderProps {
  children: ReactNode;
}

export const BookingProvider: React.FC<BookingProviderProps> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookingType, setBookingType] = useState<BookingType>(null);

  const openBooking = (type: BookingType) => {
    setBookingType(type);
    setIsModalOpen(true);
  };

  const closeBooking = () => {
    setIsModalOpen(false);
  };

  return (
    <BookingContext.Provider value={{ isModalOpen, bookingType, openBooking, closeBooking }}>
      {children}
    </BookingContext.Provider>
  );
};