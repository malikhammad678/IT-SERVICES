import React from 'react'
import './Newsletter.css'
import {motion} from 'framer-motion'
const Newsletter = () => {
  return (
    <div className='news'>
      <div className="layer"></div>
      <div className="content">
        <motion.h2
        
        initial={{y:20, opacity:0}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.5}}
        viewport={{once:true, amount:0.5}}

        >OUR NEWSLETTER</motion.h2>
        <motion.p
        
        initial={{y:20, opacity:0}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.5, delay:0.3}}
        viewport={{once:true, amount:0.5}}

        >Stay updated with the latest news and exclusive insights—delivered straight to your inbox!</motion.p>
        <motion.form action="#"
        
        initial={{y:20, opacity:0}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.5, delay:0.6}}
        viewport={{once:true, amount:0.5}}


        >
            <input type="email" placeholder='Email here' />
            <button type='submit'>Suscribe</button>
        </motion.form>
      </div>
    </div>
  )
}

export default Newsletter
