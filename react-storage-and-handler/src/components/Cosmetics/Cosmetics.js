import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';


const Cosmetics = () => {
    // const cosmetics = [
    //     { id: 1, name: 'lipstick', price: 200 },
    //     { id: 2, name: 'nail polish', price: 500 },
    //     { id: 3, name: 'Toner', price: 400 },
    //     { id: 4, name: 'Mirror', price: 100 },
    //     { id: 5, name: 'Brightener', price: 300 },
    // ]

    const [cosmetics, setCosmetics] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(resp => resp.json())
            .then(data => setCosmetics(data))
    }, [])
    return (
        <div>
            <h1>Cosmetics World</h1>
            {
                cosmetics.map(cosmetic => <Cosmetic key={cosmetic._id} cosmetic={cosmetic}></Cosmetic>)
            }
            <p>total: </p>
        </div>
    );
};

export default Cosmetics;