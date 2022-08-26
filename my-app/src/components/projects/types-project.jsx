import React from 'react';

import OneNav from '../navigation/one-nav';

import naturePicture from "../../assets/nature-chill.png";
import trainPicture from "../../assets/train-chill.png";
import townDestroy from "../../assets/ville-en-ruine.jpg";

const TypesProjects = () => {
    
    return (
        <div className="container-projects">
            <section className="big-project">
                <div className="layer">
                    <OneNav
                    destination={"/big-projects"}
                    text={<img src={naturePicture} alt="Panorama nature"/>} 
                    />
                </div>
                <p>Gros projets</p>
            </section>

            <section className="soft-project">
                <div className="layer">
                    <OneNav
                    destination={"/soft-projects"} 
                    text={<img src={townDestroy} alt="fille qui regarde au loin une ville détruite"/>}
                    />
                </div>
                <p>Petits projets perso</p>
            </section>

            <section className="on-working">
                <div className="layer">
                   <OneNav 
                   destination={"/on-working"}
                   text={<img src={trainPicture} alt="Fille qui attend que le train passe" />} 
                   /> 
                </div>
                <p>Projets en cours</p>
            </section>
        </div>
    );
};

export default TypesProjects;