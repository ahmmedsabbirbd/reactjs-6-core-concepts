import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const V1Details = () => {
    const [user, setUser] = useState({});
    const { userId } = useParams();
    
    useEffect(()=>{
        axios(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(data=> setUser(data.data))
    }, [userId])

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

export default V1Details;