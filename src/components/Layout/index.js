import React from 'react';
import './index.scss';
import 'animate.css';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';


const Layout = () => {
    return (
        <div>
            <Sidebar />
            <div className='page'>

                <Outlet />

            </div>
        </div>
    )
}

export default Layout