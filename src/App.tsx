import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import HotelPage from './pages/HotelPage';
import RestaurantPage from './pages/RestaurantPage';
import WaterparkPage from './pages/WaterparkPage';
import BarPage from './pages/BarPage';
import SpaPage from './pages/SpaPage';
import BeautySalonPage from './pages/BeautySalonPage';
import KidsAreaPage from './pages/KidsAreaPage';
import ParkingPage from './pages/ParkingPage';
import SupermarketPage from './pages/SupermarketPage';
import GasStationPage from './pages/GasStationPage';
import ContactPage from './pages/ContactPage';
import BookingModal from './components/BookingModal';
import { BookingProvider } from './contexts/BookingContext';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <BookingProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/hotel" element={<HotelPage />} />
              <Route path="/restaurant" element={<RestaurantPage />} />
              <Route path="/waterpark" element={<WaterparkPage />} />
              <Route path="/bar" element={<BarPage />} />
              <Route path="/spa" element={<SpaPage />} />
              <Route path="/beauty-salon" element={<BeautySalonPage />} />
              <Route path="/kids-area" element={<KidsAreaPage />} />
              <Route path="/parking" element={<ParkingPage />} />
              <Route path="/supermarket" element={<SupermarketPage />} />
              <Route path="/gas-station" element={<GasStationPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <BookingModal />
          <Footer />
        </div>
      </BookingProvider>
    </Router>
  );
}

export default App;