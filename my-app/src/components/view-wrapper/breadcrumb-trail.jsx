import React from 'react';
import { NavLink } from 'react-router-dom';

import bg from "../../assets/bg_lol.jpeg";

const BreadcrumbTrail = ({ children }) => {
    return (
        <div className="container-breadcrumb-trail">
            <div>
                <img src={bg} alt="Moi" />
                <section className="round-full-top"></section>
                             
                <ul>
                    <li>
                        <section className="all-purpose-bar"></section>
                        <NavLink
                            to={"/"}
                            className={"breadcrumb-list"}
                            >
                            HOME
                        </NavLink>
                            <section className="all-purpose-bar"></section>
                    </li>
                    <li>
                        <NavLink
                            to={"/about"}
                            className={"breadcrumb-list"}
                        >
                            ABOUT ME
                        </NavLink>
                            <section className="all-purpose-bar"></section>
                    </li>
                    <li>
                        <NavLink
                            to={"/contact"}
                            className={"breadcrumb-list"}
                            >
                            CONTACT
                        </NavLink>
                            <section className="all-purpose-bar"></section>
                    </li>
                    <li>
                        <NavLink
                            to={"/projects"}
                            className={"breadcrumb-list"}
                            >
                            PROJECTS
                        </NavLink>
                            <section className="all-purpose-bar"></section>
                    </li>
                </ul>
            </div>
            {children}   
        </div>
    );
};

export default BreadcrumbTrail;