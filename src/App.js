import React from 'react'
import Navbar from './components/NavBar';
import Hero from './components/Hero';
import Description from './components/Description'
import PhotoGallery from './components/PhotoGallery';
import Menu from './components/Menu';
import Footer from './components/Footer';
import BotFooter from './components/botFooter';

function App() {
  return (
    <div className='overflow-x-hidden '>
      <Navbar />
      <Hero/>
      <Description />
      <PhotoGallery/>
      <Menu/>
      <Footer/>
      <BotFooter/>
    </div>
  );
}

export default App;
