import React from 'react'
import { FaEnvelope, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'

const Footer = () => {
  return (
   <footer className='footer'>
    <div className='footer-container'>
        <div className='footer-about'>
            <h2 className='footer-logo'>MyPortfolio</h2>
            <p>
                Showcasing my skills,creativity, and projects.
            </p>
        </div>

        <div className='footer-contact'>
            <h3>Contact Me</h3>
            <ul>
                <li><FaEnvelope/> info@example.com</li>
                <li><FaPhone/>+91 9898989898</li>
                <li><FaMapMarkedAlt/>New delhi, India</li>
            </ul>
        </div>

        <div className='footer-social'>
            <h3>Follow Me</h3>
            <div className='social-footer'>
            <a href="#"><FaFacebook/></a>
            <a href="#"><FaGithub/></a>
            <a href="#"><FaLinkedin/></a>
            <a href="#"><FaInstagram/></a>
            </div>
        </div>
    </div>

    <div className='footer-bottom'>
        <p>&copy; 2025 MyPortfolio. All rights reserved.</p>
    </div>
   </footer>
  )
}

export default Footer
