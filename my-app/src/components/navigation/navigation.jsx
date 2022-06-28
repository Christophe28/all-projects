import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="container-navigation">
            <NavLink
            to="/"
            style={({ isActive }) => ({
                color: isActive ? "fff" : "#545e6f"
            })}
            >
                Accueil
            </NavLink>

            <NavLink
            to="/about"
            style={({ isActive }) => ({
                color: isActive ? "fff" : "#545e6f"
            })}
            >
                à propos
            </NavLink>
        </div>
    );
};

export default Navigation;