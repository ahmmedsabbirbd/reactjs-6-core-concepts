import React from 'react';
import { useNavigate } from 'react-router-dom';

const User = (props) => {
    const { id, name, username } = props.user;
    const navigate = useNavigate();

    return (
        <div>
           <p>Name: {name}</p>
           <p>username: {username}</p>
           <button onClick={()=> navigate('/data/'+id)}>Read More</button>
        </div>
    );
};

export default User;