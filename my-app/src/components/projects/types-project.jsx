import React from 'react';
import { NavLink } from 'react-router-dom';

import naturePicture from "../../assets/nature-chill.png";
import trainPicture from "../../assets/train-chill.png";
import townDestroy from "../../assets/ville-en-ruine.jpg";

const TypesProjects = ({ myEvent }) => {
    
    return (
        <div className="container-projects">
            <section className="big-project">
                <div className="layer">
                    <NavLink
                    to="/big-projects"
                    >
                        <img src={naturePicture} alt="Panorama nature" />
                    </NavLink>
                </div>
                <p>Gros projets</p>
            </section>

            <section className="soft-project">
                <div className="layer">
                    <NavLink
                    to="/soft-projects"
                    >
                        <img src={townDestroy} alt="Artwork ganja white night" />
                    </NavLink>
                </div>
                <p>Petits projets perso</p>
            </section>

            <section className="on-working">
                <div className="layer">
                    <NavLink
                    to="/on-working"
                    >
                        <img src={trainPicture} alt="Fille qui attend que le train passe" className="picture-to-rework-dimension"/>
                    </NavLink>
                </div>
                <p>Projets en cours</p>
            </section>
        </div>
    );
};

export default TypesProjects;