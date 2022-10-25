import React from 'react'
import { NavLink } from 'react-router-dom'
import './index.scss'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuIcon from '@mui/icons-material/Menu';

const Sidebar = () => {

    var activeDropDown = false;

    const showDropDownMenu = (e) => {
        activeDropDown = !activeDropDown
        document.getElementById('dropdown-menu').style.display = activeDropDown ? 'block' : 'none'
        document.getElementById('nav-bar').style.height = activeDropDown ? '240px' : '60px'
    }

    return (
        <div id='nav-bar'>
            <div className='dropdown-icon' onTouchStart={(e) => showDropDownMenu(e)}>
                <MenuIcon />
            </div>
            <div id='dropdown-menu'>
                <ul>
                    <NavLink to='/'><li>Home</li></NavLink>
                    <NavLink to='/about'><li>About</li></NavLink>
                    <NavLink to='/contact'><li>Contacts</li></NavLink>
                </ul>
            </div>
            <nav>
                <NavLink to='/' className='nav-link'>
                    <HomeIcon className='icon' />
                    <span>
                        <p className='slide-text'>Home</p>
                    </span>
                </NavLink>
                <NavLink to='/about' className='nav-link'>
                    <PersonIcon className='icon' />
                    <span>
                        <p className='slide-text'>About</p>
                    </span>
                </NavLink>
                <NavLink to='/contact' className='nav-link'>
                    <MailOutlineIcon className='icon' />
                    <span>
                        <p className='slide-text'>Contacts</p>
                    </span>
                </NavLink>
            </nav>
            <ul className='ext-links'>
                <li>
                    <a target='_blank' href='https://www.linkedin.com/in/augusto-ruggieri-13b54459/' className='nav-link'>
                        <LinkedInIcon className='icon' />
                        <span>
                            <p className='slide-text'>
                                LinkedIn
                            </p>
                        </span>
                    </a>
                </li>
                <li>
                    <a target='_blank' href='https://github.com/AugustoRuggieri' className='nav-link'>
                        <GitHubIcon className='icon' />
                        <span>
                            <p className='slide-text'>
                                GitHub
                            </p>
                        </span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar