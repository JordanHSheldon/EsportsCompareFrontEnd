import React from 'react'
import {FaSignInAlt, FaSignOutAlt,FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='header'>
        <div className='logo'>
            <Link to='/'>EsportsCompare</Link>
            <ul>
                <li>
                    <Link to='/login'>
                        <FaSignInAlt /> Login
                    </Link>
                </li>
                <li>
                    <Link to='/register'>
                        <FaUser /> Login
                    </Link>
                </li>
            </ul>
        </div>
    </header>
  )
}

export default Header