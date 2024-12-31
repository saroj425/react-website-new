import React, { useState } from 'react'
import {motion} from 'framer-motion'
import {FaBars, FaHome, FaProjectDiagram, FaTimes, FaTools, FaUser} from 'react-icons/fa'
import './App.css'
const Navbar = () => {
    const[isOpen,setIsOpen]=useState(false)

    const navLinks=[
        {name:"HOME",icon:<FaHome/>},
        {name:"ABOUT",icon:<FaUser/>},
        {name:"SKILLS",icon:<FaTools/>},
        {name:"PROJECTS",icon:<FaProjectDiagram/>},

    ]
  return (
    <div className='navbar'>

      <div className='menu-icon' onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes/> : <FaBars/>}
        
        </div>

      <div className={`nav-right ${isOpen ? "open" : ""}`}>
        {navLinks.map((link,index) =>(
            <motion.a
              href={`#${link.name.toLowerCase()}`}
              key={index}
              className='nav-link'
              initial={{opacity:0,y:-20}}
              animate={{opacity:1,y:0}}
              transition={{durtion:0.4,delay:index * 0.2}}
              whileHover={{scale:1.1}}
              whileTap={{scale:0.9}}
            >
                <span className='icon'>{link.icon}</span>
                <span className='right-part'>{link.name}</span>
            </motion.a>
        ))}
      </div>
    </div>
  )
}

export default Navbar
