// import logo from './logo.svg';
import React from 'react';
import './App.css';
import './responsive.css'
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Project from './components/Project';

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Skills/>
      <Project projectName1='TextUtils' projectName2='FoodHub Restaurant' projectName3='To Do List'/>
    </>
  );
}

export default App;
