import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ThemeColor } from '../../App';

const V1Details = () => {
    const theme = useContext(ThemeColor);
    const [user, setUser] = useState({});
    const { userId } = useParams();

    console.log(theme);
    
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