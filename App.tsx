
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Founder from './components/Founder';
import Works from './components/Works';
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
        <Founder />
        <Works />
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
