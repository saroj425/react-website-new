import React from 'react'
import {motion} from 'framer-motion'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
const About = () => {
  return (
    <section id="about" className='about-section'>
        <div className='about-text'>
            <motion.h2
              className='about-title'
              initial={{opacity:0,x:-100}}
              animate={{opacity:1,x:0}}
              transition={{duration:1}}
            >About Me</motion.h2>
            <motion.p 
             className='about-description'
             initial={{opacity:0,y:50}}
              animate={{opacity:1,y:0}}
              transition={{delay:0.5,duration:1}}
             
            >
                I am passionate web developer with a strong interest in building moderen websites.
            </motion.p>

            <motion.p
              className='about-details'
              initial={{opacity:0,y:50}}
              animate={{opacity:1,y:0}}
              transition={{delay:0.5,duration:1}}
            >

                <p><strong>Skills:</strong> React,Node.js,MongoDB,JavaScript,CSS,HTML</p>
                <p><strong>Experience:</strong>3+ years of web develoment,building dynamic websites.</p>
            </motion.p>
            <div className='about-social'>
                <a href="" target="_blank"><FaGithub/></a>
                <a href="" target="_blank"><FaLinkedin/></a>
                <a href="" target="_blank"><FaInstagram/></a>
            </div>
        </div>

        <div className='about-image'>
            <motion.img
              src="img.png"
              className='about-img'
              initial={{opacity:0,scale:0.8}}
              animate={{opacity:1,scale:1}}
              transition={{delay:0.5,duration:1.5}}
            >

            </motion.img>
        </div>
    </section>
  )
}

export default About
