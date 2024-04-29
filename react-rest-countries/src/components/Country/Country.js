import React from 'react';
import './Country.css';
const Country = (props) => {
    const { name, flags, area, region } = props.country;
    return (
        <div className='country'>
            <h2>Name: {name.common} </h2>
            <img src={flags.png} alt="" />
            <h4>Area: {area}</h4>
            <p><small>Region: {region}</small></p>
        </div>
    );
};

export default Country;