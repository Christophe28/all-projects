import React from 'react';
import { NavLink } from 'react-router-dom';

const OneNav = ({myClass, destination, style, navIcon, description}) => {
    return (
        <>
            <NavLink
            className={myClass}
            to={destination}
            style={style}
            >
                <img src={navIcon} alt={description} />    
            </NavLink>
        </>
    );
};

export default OneNav;