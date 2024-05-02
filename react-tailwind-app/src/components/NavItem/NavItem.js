import React from 'react';

const NavItem = ({ route }) => {
    return (
        <li className='mr-12'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default NavItem;