import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';
import Home from './pages/Home';
import Collections from './pages/Collections';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Cart />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;