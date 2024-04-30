import React from 'react';
import { add, multi } from '../../utilities/calculate';

const Shoes = () => {
    const first = 55;
    const second = 10;
    const multiply = multi(first, second);
    const sum = add(first, second);
    return (
        <div>
            <h3>Shoes!!</h3>
            <p>Stock: {multiply}</p>
            <p>Price:{sum}</p>
        </div>
    );
};

export default Shoes;