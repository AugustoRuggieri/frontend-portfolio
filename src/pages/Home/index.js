import React from 'react';
import './index.scss';
import logo from '../../assets/logo.png';

const Home = () => {
  return (
    <div className='container home-page'>
      <div className='header'>
        <div className='text home'>
          <h1>Augusto Ruggieri</h1>
          <h3>web developer</h3>
        </div>

        <div className='photo'>
          <img src={logo} alt='photo' />
        </div>
      </div>

      <div className='slogan-container'>
          <span>
            <p>design</p>
          </span>
          <span>
            <p>develop</p>
          </span>
          <span>
            <p>improve</p>
          </span>
        </div>
    </div>
  )
}

export default Home