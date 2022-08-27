import React from 'react';

import OneNav from './one-nav';

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
                        />
                    </li>
                    <li className="li-about">
                        <OneNav 
                            myClass={"navigation-a"}
                            destination={"/about"}
                            style={({ isActive }) => activeStyle(isActive)}
                        />
                    </li>
                    <li className="li-contact">
                        <OneNav 
                            myClass={"navigation-a"}
                            destination={"/contact"}
                            style={({ isActive }) => activeStyle(isActive)}
                        />
                    </li>    
                    <li className="li-projects">
                        <OneNav
                            myClass={"navigation)a"}
                            destination={"/contact"} //Ne doit pas rester à contact
                            style={({ isActive }) => activeStyle(isActive)} 
                        />
                    </li>       
                </ul>
            </section>
        </div>
    );
};

export default Navigation;