import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    const phones = useLoaderData();
    return (
        <div>
            <h2>All Phone</h2>
            <h5>Phones {phones.length}</h5>
            {
                phones.map(phone => <li><Link to={`/phones/${phone.id}`}>{phone.name}</Link></li>)
            }
        </div>
    );
};

export default Home;