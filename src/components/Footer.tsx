import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Apple } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <Container>
        <Row className="gy-4">
          <Col md={4} sm={12}>
            <div className="mb-4 d-flex align-items-center">
              <Apple size={28} className="me-2 text-primary" />
              <h4 className="mb-0 text-gradient">FRUIT BITES</h4>
            </div>
            <p className="mb-4">
              Choose one of our plans, get delivery and enjoy delicious food without leaving your home.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="text-white social-icon">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-white social-icon">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-white social-icon">
                <Twitter size={24} />
              </a>
            </div>
          </Col>
          
          <Col md={4} sm={6}>
            <h5 className="mb-4">Contact Us</h5>
            <ul className="list-unstyled">
              <li className="mb-3 d-flex align-items-center">
                <Phone size={18} className="me-2 text-primary" />
                <span>+91 9876543210</span>
              </li>
              <li className="mb-3 d-flex align-items-center">
                <Mail size={18} className="me-2 text-primary" />
                <span>info@fruitbites.com</span>
              </li>
              <li className="d-flex align-items-start">
                <MapPin size={18} className="me-2 mt-1 text-primary" />
                <span>123 Healthy Street, Fresh City, Fruit State - 560001</span>
              </li>
            </ul>
          </Col>
          
          <Col md={4} sm={6}>
            <h5 className="mb-4">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#home" className="text-white text-decoration-none">Home</a>
              </li>
              <li className="mb-2">
                <a href="#plans" className="text-white text-decoration-none">Subscription Plans</a>
              </li>
              <li className="mb-2">
                <a href="#about" className="text-white text-decoration-none">About Us</a>
              </li>
              <li className="mb-2">
                <a href="#faq" className="text-white text-decoration-none">FAQs</a>
              </li>
              <li>
                <a href="#contact" className="text-white text-decoration-none">Contact</a>
              </li>
            </ul>
          </Col>
        </Row>
        
        <hr className="my-4" />
        
        <div className="text-center">
          <p className="mb-0">© {new Date().getFullYear()} Fruit Bites. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;