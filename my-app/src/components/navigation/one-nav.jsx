import React from 'react';
import { NavLink } from 'react-router-dom';

const OneNav = ({myClass, destination, text, style}) => {
    return (
        <>
            <NavLink
            className={myClass}
            to={destination}
            style={style}
            >
                {text}
            </NavLink>
        </>
    );
};

export default OneNav;