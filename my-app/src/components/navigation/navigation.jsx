import React from 'react';

import OneNav from './one-nav';

import logoHome from '../../assets/home-32px.png';
import logoHomeActive from '../../assets/home-white-32px.png';
import logoLetter from '../../assets/letter-32px.png';
import logoLetterActive from '../../assets/letter-white-32px.png';
import logoUser from '../../assets/user.png';
import logoUserActive from '../../assets/user-white-32px.png';
import logoSuitcase from '../../assets/briefcase-black-32px.png';
import logoSuitcaseActive from '../../assets/briefcase -white-32px.png';

const Navigation = () => {

    return (
        <div className="container-navigation">
            <section>
                <ul>
                    <li className="li-home">
                        <OneNav 
                            destination={"/"}
                            navIcon={logoHome}
                            navIconActive={logoHomeActive}
                            description={"logo maison"}
                        />
                    </li>
                    <li className="li-about">
                        <OneNav 
                            destination={"/about"}
                            navIcon={logoUser}
                            navIconActive={logoUserActive}
                            description={"logo à propos"}
                        />
                    </li>
                    <li className="li-contact">
                        <OneNav 
                            destination={"/contact"}
                            navIcon={logoLetter}
                            navIconActive={logoLetterActive}
                            description={"logo contact"}
                        />
                    </li>    
                    <li className="li-projects">
                        <OneNav
                            destination={"/projects"}
                            navIcon={logoSuitcase}
                            navIconActive={logoSuitcaseActive}
                            description={"logo travail"}
                        />
                    </li>       
                </ul>
            </section>
        </div>
    );
};

export default Navigation;