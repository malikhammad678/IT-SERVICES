import React from 'react'
import './Home.css'
import { motion } from 'framer-motion'
const Home = () => {
  return (
      <section className='home' id='home'>
      <div className="layer"></div>

    <div className="content">
      <motion.h1
      
      initial={{opacity:0}}
      whileInView={{opacity:1, transition:{duration:0.9}}}
      viewport={{once:true}}

      >Endpoint Management Solutions</motion.h1>
      <p>Optimize your software deployment, enhanced security, and improved compilance with our tailored endpoint solutions.</p>
    </div>
    </section>

  )
}

export default Home
