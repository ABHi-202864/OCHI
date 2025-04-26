import React from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Marque from './components/Marque';
import About from './components/About';
import Eyes from './components/Eyes';
import Featured from './components/Featured';


function App() {
  return (
    <div className='w-full h-screen text-black'>
      <Navbar />
      <LandingPage />
      <Marque />
      <About />
      <Eyes />
      <Featured />
    </div>
  )
}

export default App;