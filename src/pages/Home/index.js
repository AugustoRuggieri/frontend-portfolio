import React from 'react';
import './index.scss';
import logo from '../../assets/logo.png';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className='container home-page'>
        <div className='header'>
          <div className='text-home'>
            <h1>Augusto Ruggieri</h1>
            <h3>web developer</h3>
            <div>
              <NavLink to='/contact'>
                <button>
                  contact me
                </button>
              </NavLink>
            </div>
          </div>

          <div className='photo'>
            <img src={logo} alt='augusto' />
          </div>


        </div>

        <div className='slogan-container'>
          <span className='slogan1'>
            <p>design</p>
          </span>
          <span className='slogan2'>
            <p>develop</p>
          </span>
          <span className='slogan3'>
            <p>improve</p>
          </span>
        </div>
      </div>
      <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    </>
  )
}

export default Home