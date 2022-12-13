import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const V1 = () => {
    const [users, setUsers] = useState([]);
    useEffect(()=> {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(data=> setUsers(data.data))
    }, [])
    return (
        <div>
            {
                users.map(user=> <Link key={user.id} to={`${user.id}`}>{user.id}</Link>)
            }
            <Outlet></Outlet>
        </div>
    );
};

export default V1;