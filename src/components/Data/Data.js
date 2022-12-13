import axios from 'axios';
import React, { useEffect, useState } from 'react'; 
import User from '../User/User';

const Data = () => {
    const [users, setUsers] = useState([]);

    useEffect( ()=> {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(data=> setUsers(data.data))
    }, [])

    return (
        <div>
            <h1>Data</h1>
            {
                users.map(user=> <User key={user.id} user={user}></User>)
            }
        </div>
    );
};

export default Data;