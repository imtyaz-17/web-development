import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const postDetails = useLoaderData();
    const { id, title, body, userId } = postDetails;
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/friend/${userId}`)
    }
    return (
        <div>
            <h2>Details about Post: {id}</h2>
            <p>{title}</p>
            <p><small>{body}</small></p>
            <button onClick={handleNavigate}>Get the Author</button>
        </div>
    );
};

export default PostDetails;