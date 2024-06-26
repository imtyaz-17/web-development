import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://dragon-news-server-rouge-six.vercel.app/news-categories')
            .then(resp => resp.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <h4>All Category:</h4>
            <div>
                {
                    categories.map(category => <p key={category.id}><Link to={`/category/${category.id}`}>{category.name}</Link></p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;