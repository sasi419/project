import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { ArrowRight } from 'lucide-react';

const HeroBanner: React.FC = () => {
  return (
    <section 
      id="home" 
      className="hero-section"
      style={{ 
        backgroundImage: `url('https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')` 
      }}
    >
      <div className="hero-overlay">
        <Container className="text-center">
          <h1 
            className="display-3 fw-bold mb-3"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Fresh Fruits
          </h1>
          <p 
            className="lead mb-4 fs-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Eat good, live good and smile good
          </p>
          <div 
            className="badge bg-success fs-6 p-2 mb-4"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            FREE Delivery
          </div>
          <div data-aos="fade-up" data-aos-delay="400">
            <Button 
              href="#plans" 
              variant="primary" 
              size="lg" 
              className="cta-button px-4 py-2 rounded-pill d-inline-flex align-items-center"
            >
              Subscribe Now
              <ArrowRight size={20} className="ms-2" />
            </Button>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default HeroBanner;