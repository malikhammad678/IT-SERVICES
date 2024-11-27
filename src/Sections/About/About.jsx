import React, { useEffect } from 'react'
import './About.css'
import wave from '../../assets/wave3.png'
import {  motion } from 'framer-motion'
const About = () => {
  return (
    <section className='about' id='about'>
      <motion.h3
      
      initial={{y:30,opacity:0}}
      whileInView={{y:0,opacity:1}}
      transition={{duration:0.5}}
      viewport={{once:true}}

      >ABOUT US</motion.h3>
      <motion.p className='subtitle'
      
      initial={{y:30,opacity:0}}
      whileInView={{y:0,opacity:1}}
      transition={{duration:0.5,delay:0.3}}
      viewport={{once:true}}
      
      >Welcome to Memeng, your premier destination for cutting-edge IT management solutions specializing in SCCM (System Center Configuration Manager) and Microsoft Intune services. Our mission is to empower organizations with the tools and expertise they need to streamline their IT operations, enhance security, and optimize user experiences.</motion.p>
      <div className="box_container">
        <motion.div className="box"
        
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{once:true, amount:0.5}}

        >
            <h2>Our Vision</h2>
            <p>At Memeng, we recognize that every business is unique, with its own set of challenges and requirements. Our team of skilled professionals is dedicated to delivering tailored solutions that meet your specific needs. With extensive experience in both SCCM and Intune, we are committed to providing comprehensive services that encompass installation, configuration, deployment, and ongoing support</p>
        </motion.div>
        <motion.div className="box box2"
        
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay:0.2 }}
        viewport={{once:true, amount:0.5}}
        >
            <h2>Our History</h2>
            <p>Over a decade of experience in IT infrastructure and systems management, our founder has built a reputation for his expertise in problem resolution and enterprise-level support. He possesses a robust background in server builds, infrastructure support, and the installation, configuration, and troubleshooting of SCCM infrastructures. His extensive knowledge spans various product lines, including Dell and HP, as well as virtualization technologies such as VMware ESXi, Hyper-V, and VirtualBox.He holds multiple certifications, including Microsoft Certified Solutions Associate and CompTIA Security+, and has undergone extensive training in Microsoft System Center and VMware technologies. His experience includes working in professional service environments where he has honed his skills in application packaging, device enrollment via Intune, and end-to-end management of IT infrastructures</p>
        </motion.div>
        <motion.div className="box"
        
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay:0.4 }}
        viewport={{once:true, amount:0.5}}

        >
            <h2>Our Values</h2>
            <p>At Memeng, we recognize that every business is unique, with its own set of challenges and requirements. Our team of skilled professionals is dedicated to delivering tailored solutions that meet your specific needs. With extensive experience in both SCCM and Intune, we are committed to providing comprehensive services that encompass installation, configuration, deployment, and ongoing support.</p>
        </motion.div>
      </div>

      <img src={wave} className='wave' alt="" />
    </section>
  )
}

export default About
