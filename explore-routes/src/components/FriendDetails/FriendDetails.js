import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData();
    return (
        <div>
            <h1>Details About: {friend.name}</h1>
            <p>Call him/her: {friend.phone}</p>
        </div>
    );
};

export default FriendDetails;