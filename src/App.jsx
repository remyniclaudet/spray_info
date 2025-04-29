import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import Contact from './components/Contact';
import './App.css';
import Footer from './components/Footer';
import { initScrollAnimations } from './animation';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    initScrollAnimations();
  }, []);
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Services />
      <Team />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;