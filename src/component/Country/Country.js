import React from 'react';

const Country = ({country}) => {
    const {name, flags} = country;
    
    return (
        <div>
            <h3>Country Name: {name.common}</h3>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Country;