import React from 'react';
import './index.scss';

const About = () => {
  return (
    <div className='container about'>
      <div className='text'>
        <h1>About</h1>
        <p>Hi! I'm Augusto, I'm currently based in Bologna, Italy, and I'm a front end developer.
          <br />
          You can learn more about the projects I'm working on in the section below.
          <br />
          Feel free to contact me to ask for a collaboration!
        </p>
        <section>
          My tools:
          <div>
            <span>HTML</span>
            <span>CSS</span>
            <span>Javascript</span>
            <span>React.js</span>
          </div>
        </section>
      </div>

    </div>
  )
}

export default About