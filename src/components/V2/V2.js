import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import User from '../User/User';

const V2 = () => {
    const [name, setName] = useState(1);
    const [users, setUsers] = useState([]);
    useEffect(()=> {
        axios.get(`https://jsonplaceholder.typicode.com/users/${name}`)
        .then(data=> setUsers(data.data))
    }, [name])

    const userUpdate =(e) => {
        setName(e.target.value)
    }
    console.log(name);

    return (
        <div>
            <p>Search with Name</p>
            <input type="text" onChange={userUpdate} /> 
            <p>{users.id}</p>
            <p>{users.name}</p>
            <Outlet></Outlet>
        </div>
    );
};

export default V2;