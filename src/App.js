import React from 'react'
import Navbar from './components/NavBar';
import Hero from './components/Hero';
import Description from './components/Description'
import PhotoGallery from './components/PhotoGallery';
import Menu from './components/Menu';

function App() {
  return (
    <div className='overflow-x-hidden '>
      <Navbar />
      <Hero/>
      <Description />
      <PhotoGallery/>
    </div>
  );
}

export default App;
