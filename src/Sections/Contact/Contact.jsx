import React from 'react'
import './Contact.css'
import { motion } from 'framer-motion'
import { Mail, Phone, Pin, Timer } from 'lucide-react'
import Swal from 'sweetalert2'
const Contact = () => {



  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    formData.append("access_key", "");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {

    Swal.fire({
        title: "Message sent successfully!",
        icon: "success"
    });
    event.target.reset();
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!"
      });
    }
  };

  return (
    <section className='contact' id='contact'>
       <motion.h3
       

       initial={{y:30,opacity:0}}
      whileInView={{y:0,opacity:1}}
      transition={{duration:0.5}}
      viewport={{once:true}}

       >CONTACT US</motion.h3>
       <motion.p className='subtitle'
       
       initial={{y:30,opacity:0}}
      whileInView={{y:0,opacity:1}}
      transition={{duration:0.5,delay:0.3}}
      viewport={{once:true}}
       
       >Join us at Memeng and discover how our SCCM and Intune services can transform your IT management. Together, we can create a more efficient, secure, and productive environment for your organization. Let’s embark on this journey towards innovation and success!</motion.p>
       <div className="container">
        
        <motion.div className="business"
        

        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1,delay:0.5}}
        viewport={{once:true}}

        
        >
          <h2>Business Hours</h2>
          <div className="flex">
            <Timer size={30} className='icon' />
            <p>Mon - Fri. 8am to 5pm</p>
          </div>
          <div className="flex">
            <Timer size={30} className='icon' />
            <p>Sat. <span>Closed</span></p>
          </div>
          <div className="flex">
            <Timer size={30} className='icon' />
            <p>Sun. <span>Closed</span></p>
          </div>
        </motion.div>

        <motion.div className="form"

        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1,delay:0.8}}
        viewport={{once:true}}

        
        >
          <h2>Drop us a Line</h2>
          <form  onSubmit={onSubmit}>
            <div className="input_container">
              <input type="text" placeholder='Name' name='name' required />
              <input type="text" placeholder='Email' name='email' required />
            </div>
            <textarea name="message" placeholder='Message' className='msg' id=""></textarea>
            <button type='submit'>Submit</button>
          </form>
        </motion.div>

       </div>
    </section>
  )
}

export default Contact
