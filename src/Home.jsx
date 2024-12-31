import React from 'react'
import {motion} from 'framer-motion'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
const Home = () => {
  return (
    <section id="#home" className='hero-section'>
        <div className='content'>
            <motion.h1
             className='hero-title'
             initial={{opacity:0,x:-100}}
             animate={{opacity:1,x:0}}
             transition={{duration:1}}
            >
                Hello, I'm Baljinder Kaur
            </motion.h1>
            <motion.p
             className='hero-description'
             initial={{opacity:0,y:-50}}
             animate={{opacity:1,y:0}}
             transition={{delay:0.5,duration:1}}
            >
              I create innovative web experiences and designs.
            </motion.p>
            <motion.div
             className='buttons'
             initial={{opacity:0}}
             animate={{opacity:1}}
             transition={{delay:1,duration:1}}
            > 
            <button className='cta-button'>Contact Me</button>
            <button className='cta-button2'>View Projects</button>

            </motion.div>
            <motion.div
              className='social-icons'
              initial={{opacity:0}}
              animate={{opacity:1}}
              transition={{delay:1.5,duration:1}}
            >
                <a href="#" className='social-icon'><FaGithub/></a>
                <a href="#" className='social-icon'><FaLinkedin/></a>
                <a href="#" className='social-icon'><FaInstagram/></a>
                <a href="#" className='social-icon'><FaTwitter/></a>
            </motion.div>
        </div>

        <div className='image-container'>
            <motion.img
             src="img.png"
             className='hero-image'
             initial={{opacity:0,scale:0.8}}
              animate={{opacity:1,scale:1}}
              transition={{delay:0.5,duration:1.5}}
            >

            </motion.img>
        </div>
    </section>
  )
}

export default Home
