import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const Pricing = () => {
    const pricingOptions = [
        {
            id: 1, name: 'Free', price: 0, features: [
                'Awesome Feature',
                'Extra Feature',
                'Unnecessary Feature',
                'Will never use Feature',
            ]
        },
        {
            id: 2, name: 'Medium', price: 9.99, features: [
                'Everything on Free',
                'Extra Feature',
                'Unnecessary Feature',
                'Will never use Feature',
            ]
        },
        {
            id: 3, name: 'Premium', price: 19.99, features: [
                'Everything on Premium',
                'Extra Feature',
                'Unnecessary Feature',
                'Will never use Feature',
            ]
        },
    ]
    return (
        <div>
            <h2 className='text-5xl font-bold bg-indigo-300 text-white p-10'>Best Pricing</h2>
            <div className='grid md:grid-cols-3 gap-3 mt-4'>
                {
                    pricingOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>

        </div>
    );
};

export default Pricing;