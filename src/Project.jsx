import React from 'react'
import {motion} from 'framer-motion'
const Project = () => {
    const projects=[
        {
            id:1,
            title:'Portfolio Website',
            description:'A moderen portfolio',
            image:'img.png',
            github:'https://github.com',
            demo:''
        },
        {
            id:2,
            title:'Portfolio Website',
            description:'A moderen portfolio',
            image:'img.png',
            github:'https://github.com',
            demo:''
        },
        {
            id:3,
            title:'Portfolio Website',
            description:'A moderen portfolio',
            image:'img.png',
            github:'https://github.com',
            demo:''
        },
        {
            id:4,
            title:'Portfolio Website',
            description:'A moderen portfolio',
            image:'img.png',
            github:'https://github.com',
            demo:''
        },
        {
            id:5,
            title:'Portfolio Website',
            description:'A moderen portfolio',
            image:'img.png',
            github:'https://github.com',
            demo:''
        },
        {
            id:6,
            title:'Portfolio Website',
            description:'A moderen portfolio',
            image:'img.png',
            github:'https://github.com',
            demo:''
        }
    ]
  return (
   <section id="projects" className='projects-section'>
    <div className='projects-bg'></div>

    <div className='projects-container'>
        <motion.div
          className='projects-header'
          initial={{opacity:0,y:-50}}
          animate={{opacity:1,y:0}}
          transition={{duration:0.6}}
        >
         <h2 className='projects-title'>Projects I've Built</h2>
         <p className='projects-subtitle'>I am a passionate web developer with a solid understanding of frontend and backend technologies.
          Over the years, I have honed my skills in building interactive and responsive web applications.
       </p>
        </motion.div>

        <div className='projects-grid'>
            {projects.map((project) =>(
                <motion.div
                  key={project.id}
                  className='project-card'
                  whileHover={{scale:1.05}}
                  whileTap={{scale:0.95}}
                >

                    <img src={project.image} className='project-image'></img>
                    <div className='project-overlay'>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className='project-links'>
                            <a href={project.github}>Github</a>
                            <a href={project.demo}>Github</a>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    </div>
   </section>
  )
}

export default Project
