import React from 'react';
import { CheckCircleIcon, } from '@heroicons/react/24/solid';
const Feature = ({ feature }) => {
    return (
        <div className='flex items-center'>
            <CheckCircleIcon className='text-green-500 size-4'></CheckCircleIcon>
            <p className='ml-2'>{feature}</p>
        </div>
    );
};

export default Feature;