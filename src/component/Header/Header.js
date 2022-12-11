import React from 'react';
import { Link } from 'react-router-dom';
import LinkList from '../LinkList/LinkList';

const Header = () => {
    const links = [
        {
            text: 'Home',
            link:'home'
        },
        {
            text: 'About',
            link: 'about'
        },
        {
            text: 'Contact',
            link: 'contact'
        }
    ];

    return (
        <div>
            <nav>
                <ul>
                    {
                       links.map(link => <LinkList key={link.link} links={link}></LinkList>) 
                    }
                </ul>
            </nav>
        </div>
    );
};

export default Header;