import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import BookService from './pages/BookService';
import Login from './pages/Login';
import Register from './pages/Register';
import CustomerDashboard from './pages/customer/CustomerDashboard';
import CustomerRequests from './pages/customer/CustomerRequests';
import TechnicianDashboard from './pages/technician/TechnicianDashboard';
import AdminDashboard from './pages/admin/AdminDashboard';
import ScrollToTop from './components/common/ScrollToTop';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <ScrollToTop />
      <Navbar />
      <main className="main-content-fluid">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/book-service" element={<BookService />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/customer/dashboard" element={<CustomerDashboard />} />
          <Route path="/customer/requests" element={<CustomerRequests />} />
          <Route path="/technician/dashboard" element={<TechnicianDashboard />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route 
            path="*" 
            element={
              <div style={{ padding: '5rem 1.5rem', textAlign: 'center' }}>
                <h1 style={{ color: 'var(--primary-color)' }}>404 - Page Not Found</h1>
                <p style={{ color: 'var(--text-muted)', margin: '1rem 0 2rem 0' }}>
                  The page you are looking for does not exist.
                </p>
                <a href="/" style={{ color: 'var(--secondary-color)', fontWeight: 'bold' }}>
                  ← Return to QuickFix Home
                </a>
              </div>
            } 
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
