  import React, { useEffect, useState } from 'react'
  import Navbar from '../Components/Navbar'
  import H_Section_01 from '../Sections/HomePageSections/H_Section_01'
  import H_Section_02 from '../Sections/HomePageSections/H_Section_02'
import H_Section_03 from '../Sections/HomePageSections/H_Section_03'
import CoinsRain from '../Components/CoinsRain'
import H_Section_05 from '../Sections/HomePageSections/H_Section_05'
import H_Section_06 from '../Sections/HomePageSections/H_Section_06'

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
      <H_Section_01 />
      <H_Section_02 />
      <H_Section_03 />
      <H_Section_05/>
      <H_Section_06/>
    </>
    )
  }

  export default HomePage