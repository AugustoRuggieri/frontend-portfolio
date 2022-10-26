import React from 'react'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faHtml5, faCss3, faJsSquare, faGitAlt, faNpm } from '@fortawesome/free-brands-svg-icons'

const About = () => {
  return (
    <>
      <div className='container'>
        <div className='about'>
          <div className='text-about'>
            <h1>Hi!</h1>
            <div>
              <p>My name is Augusto, I'm a front end web developer based in <span>Bologna, Italy. </span>
                In 2016 I got a Master's Degree in Cinema and multimedia production,
                then I started working as a <span>copywriter</span>, creating SEO-oriented content for websites.
              </p>
              <br /><br />
              <p>
                Being curious towards computer science and coding,
                after a few years I decided to discover what lies underneath the surface of a website.
                In 2020 I started studying <span>HTML</span>, <span>CSS</span> and <span>Javascript</span> on my own.
                Last year I also took a web development professional training course to learn how to use <span>React.Js.</span>
              </p>
              <br /><br />
              <p>
                Since then, I focused on building and strengthening my skills, preparing myself for my first job in the IT field.
                I work with <span>Visual Studio Code</span>, <span>npm</span>, <span>Firebase</span>, <span>Postman</span>, <span>Bootstrap</span>, <span>Material UI</span> and more.
                I'm looking forward to join a company or a startup where to grow and keep challenging myself.
              </p>
            </div>
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
      </div>

      <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    </>
  )
}

export default About