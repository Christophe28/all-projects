import React from 'react';

import pictureMe from "../../assets/portfolio-picture-me.jpeg";

const RightSide = () => {

    return (
        <div className="container-right-side">
            <img src={pictureMe} alt="La personne à qui appartient le portefolio" />
        </div>
    );
};

export default RightSide;