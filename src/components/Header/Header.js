import React from 'react';
import LinkList from '../LinkList/LinkList';

const Header = () => {
    const links = [
        {
            text: 'Data',
            link:'data'
        },
        {
            text: 'V1',
            link: 'v1'
        },
        {
            text: 'V2',
            link: 'v2'
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