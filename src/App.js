// import logo from './logo.svg';
import React from 'react';
import './App.css';
import './responsive.css'
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Skills from './components/Skills';

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Skills/>
    </>
  );
}

export default App;
