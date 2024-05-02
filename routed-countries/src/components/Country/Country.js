import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Country = () => {
    const country = useLoaderData()[0];
    return (
        <div>
            <h2>{country.name.common}</h2>
        </div>
    );
};

export default Country;