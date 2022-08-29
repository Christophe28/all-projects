import React from 'react';
import { NavLink } from 'react-router-dom';

const OneNav = ({ destination, style, navIconActive, navIcon, description}) => {

    return (
        <>
            <NavLink
            to={destination}
            style={style}
            >
                {({isActive}) => {
                    if(isActive === true) {
                        return <img src={navIconActive} alt={description} />
                    }
                    if(isActive === false) {
                        return <img src={navIcon} alt={description} />
                    }
                }}
            </NavLink>
        </>
    );
};

export default OneNav;