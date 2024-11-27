import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll';
import { Cross, Menu, X } from 'lucide-react';
const Navbar = () => {


    const [scroll,setScroll] = useState(false);
    const [menu, setMenu] = useState(false)


    useEffect(() => {
       window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            setScroll(true)
        }else{
            setScroll(false)
        }
       })
    },[])


    

  return (
    <>
    <div className='navbar'>
        <div className="upper_head">
        <h3>CALL US: 248-734-1777</h3>
        </div>
        <div className={`header ${scroll ? 'active' : ''}`}>
            <Link to="home" spy={true} smooth={true} duration={500} style={{cursor:'pointer'}} className='logo'>MEMENG</Link>
            <nav className="navbar2">
                <Link className='link' to="home" spy={true} smooth={true} duration={500} activeClass='active'>Home</Link>
                <Link className='link' to="about" spy={true} smooth={true} duration={500}  activeClass='active'>About Us</Link>
                <Link className='link' to="services" spy={true}   smooth={true} duration={500}  activeClass='active'>Services</Link>
                <Link className='link' to="contact" spy={true} offset={-70} smooth={true} duration={500}  activeClass='active'>Contact</Link>
            </nav>
            <i class="bx bx-menu menu" onClick={() => setMenu(true)} ></i>
        </div>
    </div>


     <div className={`responsive_nav ${menu ? 'active' : ''}`} >
     <Link className="link2" to="home" onClick={() => setMenu(false)} spy={true} smooth={true} duration={500} activeClass='active2'>Home</Link>
    <Link className='link2' to="about" onClick={() => setMenu(false)}  spy={true} smooth={true} duration={500}  activeClass='active2'>About Us</Link>
    <Link className='link2' to="services" onClick={() => setMenu(false)}  spy={true}   smooth={true} duration={500}  activeClass='active2'>Services</Link>
    <Link className='link2' to="contact" onClick={() => setMenu(false)}  spy={true} offset={-70} smooth={true} duration={500}  activeClass='active2'>Contact</Link>
    <X size={28} className='cross' onClick={() => setMenu(false)} />
     </div>


    </>
  )
}

export default Navbar
