import React from 'react';
import ViewWrapper from '../components/view-wrapper/view-wrapper';

const About = () => {
    return (
        <div className="container-about">
            <ViewWrapper>
                <h1>A propos</h1>
                <p>Bio</p>
                <p>Je me nomme Buffe Christophe, suite à un parcours scolaire discutable je me suis retrouvé dans l'horeca.</p>
                <p>Secteur dans lequel j'ai évolué pendant six années.</p>
                <p>Lorsque le Covid est arrivé j'ai décidé de me réorienté professionnellement et de changer de vie.</p>
                <p>Me voilà aujourd'hui dans l'univers du web developement.</p>
                <p>J'ai commencé le code à taton il y'a 1 ans en solo puis j'ai attaqué quelques formations en ligne via le centre de formation techno-futur. Ensuite je me suis lancé dans une formation à becode pour une durée de 9 mois qui se sont conclus par 3 mois de stage à inseetu.</p>
                <p>Lors de mon stage, un projet m'a été confié. Aidé par deux codeurs talentueux (Pierre et Thomas) j'ai appris énormément sur react.</p>
                <p>Me voilà désormais prêt à déveloper mes compétences en solitaire et en formation.</p>
            </ViewWrapper>
        </div>
    );
};

export default About;