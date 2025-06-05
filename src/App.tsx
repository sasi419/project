import React, { useEffect } from 'react';
import AOS from 'aos';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import PlansSection from './components/PlansSection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className="app">
      <Header />
      <main>
        <HeroBanner />
        <PlansSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;