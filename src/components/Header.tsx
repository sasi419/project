import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      className={`py-3 transition-all duration-300 ${scrolled ? 'bg-white shadow-sm' : 'bg-transparent'}`}
    >
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <img 
            src="/logo.png"
            alt="Fruit Bites Logo"
            height="70px"
            width="70px"
            className="me-2 rounded-circle"
          />
          <span 
            className={`fw-bold fs-4 ${scrolled ? 'text-gradient' : 'text-white'}`}
            data-aos="fade-right"
            data-aos-delay="100"
          >
            FRUIT BITES
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              href="#home" 
              className={`mx-2 ${scrolled ? 'text-dark' : 'text-white'}`}
              data-aos="fade-down"
              data-aos-delay="200"
            >
              Home
            </Nav.Link>
            <Nav.Link 
              href="#plans" 
              className={`mx-2 ${scrolled ? 'text-dark' : 'text-white'}`}
              data-aos="fade-down"
              data-aos-delay="300"
            >
              Plans
            </Nav.Link>
            <Nav.Link 
              href="#about" 
              className={`mx-2 ${scrolled ? 'text-dark' : 'text-white'}`}
              data-aos="fade-down"
              data-aos-delay="400"
            >
              About
            </Nav.Link>
            <Nav.Link 
              href="#contact" 
              className={`mx-2 ${scrolled ? 'text-dark' : 'text-white'}`}
              data-aos="fade-down"
              data-aos-delay="500"
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;