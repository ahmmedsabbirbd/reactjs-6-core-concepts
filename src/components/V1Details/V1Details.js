import React from 'react';
import { Outlet, useParams } from 'react-router-dom';

const V1Details = () => {
    const user = useParams();
    return (
        <div>
            Hi
            {
                console.log(user)
            }
            <Outlet></Outlet>
        </div>
    );
};

export default V1Details;