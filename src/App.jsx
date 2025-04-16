import React from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Marque from './components/Marque';


function App() {
  return (
    <div className='w-full h-screen text-white'>
      <Navbar />
      <LandingPage />
      <Marque />
    </div>
  )
}

export default App;