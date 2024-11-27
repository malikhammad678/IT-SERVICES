import React from 'react'
import Navbar from './Sections/Navbar/Navbar'
import Home from './Sections/Home/Home'
import About from './Sections/About/About'
import Services from './Sections/Services/Services'
import Newsletter from './Sections/Newsletter/Newsletter'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import Contact from './Sections/Contact/Contact'
import Location from './Sections/Location/Location'
import Footer from './Sections/Footer/Footer'

const App = () => {

    useEffect(() => {
      AOS.init({
        duration: 800, 
        easing: "ease-in-out",
      });
    }, []);
  return (
    <>
     <Navbar />
     <Home />
     <About />
     <Services />
     <Newsletter />
     <Contact />
     <Location />
     <Footer />
    </>
  )
}

export default App
