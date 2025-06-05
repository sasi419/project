import React from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { Apple, Salad, Carrot, AlignJustify } from 'lucide-react';

interface PlanProps {
  title: string;
  price: string;
  duration: string;
  highlight?: string;
  features: Array<{
    icon: React.ReactNode;
    text: string;
  }>;
}

const PlanCard: React.FC<PlanProps> = ({ title, price, duration, highlight, features }) => {
  return (
    <Card className="plan-card h-100 border-0 shadow-sm">
      {highlight && (
        <div className="highlight-badge">
          <Badge bg="warning\" className="p-2">{highlight}</Badge>
        </div>
      )}
      <Card.Body className="p-4 text-center">
        <Card.Title className="mb-4 fs-3 fw-bold text-gradient">{title}</Card.Title>
        <div className="mb-4">
          <span className="display-5 fw-bold">₹{price}</span>
          <span className="text-muted">/{duration}</span>
        </div>
        <ul className="list-unstyled mb-4">
          {features.map((feature, index) => (
            <li key={index} className="mb-3 d-flex align-items-center">
              <div className="me-2 text-primary">{feature.icon}</div>
              <span>{feature.text}</span>
            </li>
          ))}
        </ul>
        <Button variant="outline-primary" className="w-100 rounded-pill">Select Plan</Button>
      </Card.Body>
    </Card>
  );
};

const PlansSection: React.FC = () => {
  const plans = [
    {
      title: "Basic Plan",
      subtitle: "(Monday)",
      price: "1299",
      duration: "7 days",
      features: [
        { icon: <Apple />, text: "5 types of fruit" },
        { icon: <Salad />, text: "1 salad" },
        { icon: <AlignJustify />, text: "3 dry fruits" }
      ]
    },
    {
      title: "Premium Plan",
      price: "2199",
      duration: "9 days",
      features: [
        { icon: <Apple />, text: "4 types of fruit" },
        { icon: <Salad />, text: "1 salad" },
        { icon: <Carrot />, text: "1 vegetable" },
        { icon: <AlignJustify />, text: "3 dry fruits" }
      ]
    },
    {
      title: "Weekday Premium",
      price: "649",
      duration: "plan",
      highlight: "Sunday Holiday",
      features: [
        { icon: <Apple />, text: "Fresh fruits on weekdays" },
        { icon: <Salad />, text: "Variety of options" },
        { icon: <AlignJustify />, text: "Premium quality" }
      ]
    }
  ];

  return (
    <section id="plans" className="py-5 my-5">
      <Container>
        <div className="text-center mb-5">
          <h2 
            className="section-heading display-5 fw-bold"
            data-aos="fade-up"
          >
            Our Subscription Plans
          </h2>
          <p 
            className="lead text-muted"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Choose the perfect plan for your healthy lifestyle
          </p>
        </div>
        <Row className="g-4">
          {plans.map((plan, index) => (
            <Col key={index} md={4} sm={12} data-aos="fade-up" data-aos-delay={200 + index * 100}>
              <PlanCard
                title={plan.title}
                price={plan.price}
                duration={plan.duration}
                highlight={plan.highlight}
                features={plan.features}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default PlansSection;