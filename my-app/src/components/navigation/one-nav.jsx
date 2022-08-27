import React from 'react';
import { NavLink } from 'react-router-dom';

import homeList from "../../assets/home-32px.png";

const OneNav = ({myClass, destination, text, style}) => {
    return (
        <>
            <NavLink
            className={myClass}
            to={destination}
            style={style}
            >
                <img src={homeList} alt="" />    
            </NavLink>
        </>
    );
};

export default OneNav;