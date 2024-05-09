import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <div className='header'>
            <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to='/home'>Home</NavLink>
            <NavLink to='/friends'>Friends</NavLink>
            <NavLink to='/posts'>Posts</NavLink>
            <NavLink to='/about'>About</NavLink>
            {/* <a href="/home">Home</a>
            <a href="/about">About</a> */}
        </div >
    );
};

export default Header;