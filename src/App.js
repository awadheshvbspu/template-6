import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Contact from './component/Contact';
import Header from './component/Header';
import Works from './component/Works';
import Feature from './component/Feature';
import Testimonial from './component/Testimonial';
import Pricing from './component/Pricing';
import Blog from './component/Blog';
import DownloadApp from './component/DownloadApp';

function App() {
  return (
    <>
      <div className='bg-color-primary text-color-white tracking-wider'>
        <Navbar/>
        <Header/>
        <Works/>
        <Feature/>
        <Testimonial/>
        <Pricing/>
        <Blog/>
        <DownloadApp/>
        <Contact/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
