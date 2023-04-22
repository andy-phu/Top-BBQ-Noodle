import React from 'react'
import Navbar from './components/NavBar'
import Hero from './components/Hero'
import Description from './components/Description'
import PhotoGallery from './components/PhotoGallery';


function App() {
  return (
    <div className='overflow-x-hidden '>
      <Navbar />
      <Hero />
      <Description />
      <PhotoGallery/>
    </div>
  );
}

export default App;
