  import React, { useEffect, useState } from 'react'
  import Navbar from '../Components/Navbar'
  import H_Section_01 from '../Sections/HomePageSections/H_Section_01'
  import H_Section_02 from '../Sections/HomePageSections/H_Section_02'
import H_Section_03 from '../Sections/HomePageSections/H_Section_03'
import CoinsRain from '../Components/CoinsRain'
import H_Section_05 from '../Sections/HomePageSections/H_Section_05'
import H_Section_06 from '../Sections/HomePageSections/H_Section_06'
import H_Section_07 from '../Sections/HomePageSections/H_Section_07'
import H_Section_08 from '../Sections/HomePageSections/H_Section_08'
import Footer from '../Components/Footer'

  const HomePage = () => {
     const [showRain, setShowRain] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowRain(false);
    }, 4500);

    return () => clearTimeout(timer);
  }, []);
    return (
     <>
      {showRain && <CoinsRain/>}
      <Navbar/>
     <section id="home"><H_Section_01 /></section>
      <section id="about"><H_Section_02 /></section>
      <section id="services"><H_Section_03 /></section>
      <section id="roadmap"><H_Section_05 /></section>
      <section id="mentors"><H_Section_06 /></section>
      <H_Section_07/>
      <H_Section_08/>
      <Footer/>
    </>
    )
  }

  export default HomePage