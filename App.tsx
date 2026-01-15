
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Founder from './components/Founder';
import TrustHub from './components/TrustHub';
import Works from './components/Works';
import MortgageCalculator from './components/MortgageCalculator';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatAssistant from './components/ChatAssistant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <TrustHub />
        <Works />
        <MortgageCalculator />
        <Founder />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
      <ChatAssistant />
    </div>
  );
};

export default App;
