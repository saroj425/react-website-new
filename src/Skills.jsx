import React from 'react'
import { FaCss3, FaHtml5, FaJsSquare, FaNodeJs, FaReact } from 'react-icons/fa'
import {motion} from 'framer-motion'
const Skills = () => {
    const skills=[
        {name:'HTML',level:'90%',color:'#e44d26',icon:<FaHtml5/>},
        {name:'CSS',level:'80%',color:'#2965f1',icon:<FaCss3/>},
        {name:'JavaScript',level:'70%',color:'#f0db4f',icon:<FaJsSquare/>},
        {name:'React',level:'50%',color:'#61dafb',icon:<FaReact/>},
        {name:'Node.js',level:'60%',color:'#68a063',icon:<FaNodeJs/>},
        {name:'Node.js',level:'90%',color:'#68a063',icon:<FaNodeJs/>},

    ]
  return (
   <section id="skills" className='skills-section'>
     <motion.div
       className='skills-left'
       initial={{opacity:0,x:-100}}
       animate={{opacity:1,x:0}}
       transition={{duration:1}}
     >
        <h2 className='skills-title'>My Skills</h2>
        <p className='skills-description'>I am a passionate web developer with a solid understanding of frontend and backend technologies.
          Over the years, I have honed my skills in building interactive and responsive web applications.
       </p>
       <p className='skills-extra-description'>
        Here are some of the core skills I have gained through hands on experinece.
       </p>
       <ul className='skills-list'>
        <li>Frontend Develoment:HTML,CSS,JavaScript,React</li>
        <li>Backend Develoment:Node.js,Express.js</li>
        <li>Database Management:MongoDB,SQL</li>
        <li>Version Control:Git,Github</li>
        <li>UI/UX:Figma,Adobe XD</li>
       </ul>
     </motion.div>

     <motion.div
        className='skills-right'
        initial={{opacity:0,x:100}}
        animate={{opacity:1,x:0}}
        transition={{duration:1}}
     >
         <div className='skills-cards'>
            {skills.map((skill,index)=>(
                <motion.div 
                  key={index}
                  className='skill-card'
                  initial={{opacity:0,y:50}}
                  animate={{opacity:1,y:0}}
                  transition={{duration:0.5,delay:index * 0.2}}
                >
                    <div className='card-icon'>{skill.icon}</div>
                    <div className='card-content'><h3>{skill.name}</h3></div>
                    <div className='progress-bar'>
                        <div className='bar' style={{width:skill.level,backgroundColor:skill.color}}></div>
                    </div>
                </motion.div>
            ))}
         </div>
     </motion.div>

     <div className='skills-background'></div>
   </section>
  )
}

export default Skills
