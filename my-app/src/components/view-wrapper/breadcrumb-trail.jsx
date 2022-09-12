import React from 'react';
import { NavLink } from 'react-router-dom';

import pictureMe from "../../assets/portfolio-picture-me.jpeg";

const BreadcrumbTrail = ({ children }) => {
    const activeStyle = (isActive) => {
        const navStyle = {
            color: isActive ? "white" : "fff",
            textDecoration: isActive ? "" : "none"
        }
        return navStyle
    }

    return (
        <div className="container-columns">
            <div className="container-breadcrumb">
                <img src={pictureMe} alt="Moi" />
                <ul>
                    <section className="round-full-top"></section>  
                    <div>
                        <section className="all-purpose-bar-top"></section>           
                    </div>
                    <li>
                        <NavLink
                            to={"/"}
                            style={({isActive}) => activeStyle(isActive)}
                            >
                            HOME
                        </NavLink>
                        <section className="all-purpose-bar"></section>
                    </li>
                    <li>
                        <NavLink
                            to={"/about"}
                            style={({isActive}) => activeStyle(isActive)}
                        >
                            ABOUT ME
                        </NavLink>
                        <section className="all-purpose-bar"></section>
                    </li>
                    
                    <li>
                        <NavLink
                            to={"/contact"}
                            style={({isActive}) => activeStyle(isActive)}
                            >
                            CONTACT
                        </NavLink>
                        <section className="all-purpose-bar"></section>
                    </li>
                    <li>
                        <NavLink
                            to={"/projects"}
                            style={({isActive}) => activeStyle(isActive)}
                            >
                            PROJECTS
                        </NavLink>
                        <section className="all-purpose-bar"></section>
                    </li>
                </ul>
            </div>

            <div className="container-breadcrumb-children">
                {children}
            </div>
        </div>
    );
};

export default BreadcrumbTrail;