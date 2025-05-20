import React from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Marque from './components/Marque';
import About from './components/About';
import Eyes from './components/Eyes';
import Featured from './components/Featured';
import Cards from './components/Cards';
import Footer from './components/Footer';
import LocomotiveScroll from 'locomotive-scroll'; // FROM THIS SITE --> https://scroll.locomotive.ca/docs#/


function App() {

  const locomotiveScroll = new LocomotiveScroll();


  return (
    <div className='w-full h-screen text-black'>
      <Navbar />
      <LandingPage />
      <Marque />
      <About />
      <Eyes />
      <Featured />
      <Cards />
      <Footer />
    </div>
  )
}

export default App;