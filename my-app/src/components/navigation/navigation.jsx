import React from 'react';
import { NavLink } from 'react-router-dom';

import OneNav from './one-nav';

const Navigation = () => {

    const activeStyle = (isActive) => {
        const navStyle = {
            color: isActive ? "fff" : "#545e6f",
            textDecoration: isActive ? "" : "none"
        }
        return navStyle
    }
    const navStyle = {
        backgroundColor: "blue"
    }

    return (
        <div className="container-navigation">
            <OneNav 
            myClass={"navigation-a"}
            destination={"/"}
            text={"Acceuil"}
            style={({ isActive }) => activeStyle(isActive)}
            />

            <OneNav 
            myClass={"navigation-a"}
            destination={"/about"}
            text={"à propos"}
            style={({ isActive }) => activeStyle(isActive)}
            />

            <OneNav 
            myClass={"navigation-a"}
            destination={"/contact"}
            text={"Contact"}
            style={({ isActive }) => activeStyle(isActive)}
            />
        </div>
    );
};

export default Navigation;