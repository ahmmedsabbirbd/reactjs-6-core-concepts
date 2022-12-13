import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleUser = () => {
    const [user, setUser] = useState({});
    const { UserId } = useParams();

    useEffect(()=>{
        axios(`https://jsonplaceholder.typicode.com/users/${UserId}`)
        .then(data=> setUser(data.data))
    }, [user])

    const {name, email, phone, website, company} = user;

    return (
        <div>
            <p>{name}</p>
            <p>{email}</p>
            <p>{phone}</p>
            <p>{website}</p>
            <p>Company Name : {user?.company?.name}</p>
        </div>
    );
};

export default SingleUser;