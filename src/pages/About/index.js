import React from 'react'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faHtml5, faCss3, faJsSquare, faGitAlt, faNpm } from '@fortawesome/free-brands-svg-icons'

const About = () => {
  return (
    <div className='container about'>
      <div className='text-about'>
        <h1>About</h1>
        <p>Hi! I'm Augusto, I'm currently based in Bologna, Italy, and I'm a front end developer.
          <br />
          You can learn more about the projects I'm working on in the section below.
          <br />
          Feel free to contact me to ask for a collaboration!
        </p>
      </div>

      <div className='stage-cube-cont'>
        <div className='cubespinner'>
          <div className='face1'>
            <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
          </div>
          <div className='face2'>
            <FontAwesomeIcon icon={faHtml5} color='#F06529' />
          </div>
          <div className='face3'>
            <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
          </div>
          <div className='face4'>
            <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
          </div>
          <div className='face5'>
            <FontAwesomeIcon icon={faGitAlt} color='#EC4D28' />
          </div>
          <div className='face6'>
            <FontAwesomeIcon icon={faNpm} color='#CC3534' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About