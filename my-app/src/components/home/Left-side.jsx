import React from 'react';

const LeftSide = () => {
    return (
        <div className="container-left-side">
            <h1>Bonjour !</h1>
            <p className="title-paragraph">Je suis <span className="my-name">Christophe</span> </p>
            <p><strong>Web Developeur junior</strong></p>
            <p>J'ai commencé le code il y'a deux ans en solo dans ma chambre les rideaux fermé. Après un an de découverte je me suis lancé dans une formation pour gagner en skill. J'ai suivis un parcours à Becode Charleroi ce qui m'a permis d'augmenter mes compétences. Actuellement je cherche un travail en tant que front-end car c'est là que je suis le plus à l'aise, cependant, à terme j'aimerai devenir back-end.</p>

            <button type="button" onClick={() => console.log("Je ne sert à rien")}>
                More about me
            </button>
        </div>
    );
};

export default LeftSide;