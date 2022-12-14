import React from 'react';
import { NavLink } from 'react-router-dom';

const LinkList = (props) => {
    const {text, link} = props.links;

    return (
        <li>
            <NavLink to={link}
                activeclassname="active"
            >
                {text}
            </NavLink>
        </li>
    );
};

export default LinkList;