import React from 'react';

import OneNav from './one-nav';

import logoHome from '../../assets/home-32px.png';
import logoLetter from '../../assets/letter-32px.png';
import logoUser from '../../assets/user.png';
import logoSuitcase from '../../assets/suitcase-32px.png';

const Navigation = () => {

    const activeStyle = (isActive) => {
        const navStyle = {
            color: isActive ? "fff" : "#545e6f",
            textDecoration: isActive ? "" : "none"
        }
        return navStyle
    }

    return (
        <div className="container-navigation">
            <section>
                <ul>
                    <li className="li-home">
                        <OneNav 
                            myClass={"navigation-a"}
                            destination={"/"}
                            style={({ isActive }) => activeStyle(isActive)}
                            navIcon={logoHome}
                            description={"logo maison"}
                        />
                    </li>
                    <li className="li-about">
                        <OneNav 
                            myClass={"navigation-a"}
                            destination={"/about"}
                            style={({ isActive }) => activeStyle(isActive)}
                            navIcon={logoUser}
                            description={"logo à propos"}
                        />
                    </li>
                    <li className="li-contact">
                        <OneNav 
                            myClass={"navigation-a"}
                            destination={"/contact"}
                            style={({ isActive }) => activeStyle(isActive)}
                            navIcon={logoLetter}
                            description={"logo contact"}
                        />
                    </li>    
                    <li className="li-projects">
                        <OneNav
                            myClass={"navigation)a"}
                            destination={"/projects"} //Ne doit pas rester à contact
                            style={({ isActive }) => activeStyle(isActive)} 
                            navIcon={logoSuitcase}
                            description={"logo travail"}
                        />
                    </li>       
                </ul>
            </section>
        </div>
    );
};

export default Navigation;