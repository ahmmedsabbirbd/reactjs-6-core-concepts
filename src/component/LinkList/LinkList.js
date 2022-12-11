import React from 'react';
import { NavLink } from 'react-router-dom';

const LinkList = (props) => {
    const {text, link} = props.links;

    return (
        <li>
            <NavLink to={link}
                activeClassName={({ isActive }) =>
                isActive ? 'active' : undefined
                }
            >
                {text}
            </NavLink>
        </li>
    );
};

export default LinkList;