import React from 'react';
import Navbar from './Component/NavBar';
import Home from './Component/Home';
import About from './Component/About';
import Projects from './Component/Projetcs';
import Contact from './Component/Contact';
import Footer from './Component/Footer';


const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
