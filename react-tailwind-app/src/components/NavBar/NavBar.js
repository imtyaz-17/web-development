import React, { useState } from 'react';
import './NavBar.css';
import NavItem from '../NavItem/NavItem';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
const NavBar = () => {
    const routes = [
        { id: 1, name: 'Home', path: '/home' },
        { id: 2, name: 'Products', path: '/products' },
        { id: 3, name: 'Orders', path: '/orders' },
        { id: 4, name: 'About', path: '/about' },
        { id: 5, name: 'Sign in', path: '/sign-in' },
    ]

    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className='bg-blue-200'>
            <div onClick={() => setMenuOpen(!menuOpen)} className="size-6 md:hidden" >
                {
                    menuOpen ? <XMarkIcon /> : <Bars3Icon />
                }
            </div>
            <ul className={`md:flex md:static bg-blue-200 justify-center absolute duration-500 ease-in ${menuOpen ? 'top-6' : 'top-[-120px]'}`}>
                {
                    routes.map(route => <NavItem key={route.id} route={route}></NavItem>)
                }
            </ul>
        </nav>
    );
};
export default NavBar;