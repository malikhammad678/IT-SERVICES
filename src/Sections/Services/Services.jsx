import React from 'react'
import './Services.css'
import  { motion } from 'framer-motion'
const Services = () => {
  return (
    <section className='services' id='services'>
      <motion.h3
      
      initial={{y:30,opacity:0}}
      whileInView={{y:0,opacity:1}}
      transition={{duration:0.5}}
      viewport={{once:true}}
      
      >OUR SERVICES</motion.h3>
      <motion.p className='subtitle'
      
      initial={{y:30,opacity:0}}
      whileInView={{y:0,opacity:1}}
      transition={{duration:0.5,delay:0.3}}
      viewport={{once:true}}
      
      >Our customer-centric approach means that we work closely with our clients to understand their unique needs and challenges. We are dedicated to providing high-quality services that drive business success and enhance operational efficiency.</motion.p>

      <div className="box_container">
        <motion.div className="box"
        initial={{ scale: 0.5 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0 }}
        viewport={{once:true}}
        
        >
        <i class='bx bx-windows'></i>
        <h4>Application management</h4>
        <p>Application management
        helps you create, manage, deploy, and monitor applications to a range of different devices that you manage. Deploy, update, and manage Microsoft 365 Apps from the Configuration Manager console. Additionally, Configuration Manager integrates with the Microsoft Store for Business and Education to deliver cloud-based apps.</p>
        </motion.div>
        <motion.div className="box"
        
        initial={{ opacity:0, scale: 0.5 }}
        whileInView={{ opacity:1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{once:true, amount:0.5}}
        >
        <i class='bx bxl-windows'></i>
        <h4>OS deployment</h4>
        <p>Deploy an in-place upgrade of Windows, or capture and deploy OS images. Image deployment can use PXE, multicast, or bootable media. It can also help redeploy existing devices using Windows Autopilot.</p>
        </motion.div>
        <motion.div className="box"
        
        initial={{ opacity:0, scale: 0.5 }}
        whileInView={{ opacity:1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{once:true, amount:0.5}}
        >
        <i class='bx bx-window-alt'></i>
        <h4>Software updates</h4>
        <p>Manage, deploy, and monitor software updates in the organization. Integrate with Windows Delivery Optimization and other peer caching technologies to help control network usage.</p>
        </motion.div>
        <motion.div className="box"
        initial={{ opacity:0, scale: 0.5 }}
        whileInView={{ opacity:1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{once:true, amount:0.5}}

        >
        <i class='bx bxs-user'></i>
        <h4>Co-management</h4>
        <p>Co-management is one of the primary ways to attach your existing Configuration Manager deployment to the Microsoft 365 cloud. It enables you to concurrently manage Windows devices by using both Configuration Manager and Microsoft Intune. Co-management lets you cloud-attach your existing investment in Configuration Manager by adding new functionality like conditional access.</p>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
