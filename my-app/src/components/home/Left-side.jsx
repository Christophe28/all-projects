import React from 'react';

const LeftSide = () => {
    return (
        <div className="container-left-side">
            <h1>Hi there !</h1>
            <p className="title-paragraph">Je suis <span className="my-name">Christophe</span> </p>
            <p><strong>Web Developeur junior</strong></p>
            <p>J'ai commencé le code il y'a un an et depuis c'est devenu une pation yala je ne sais plus vivre sans coder quel plaisir de travailler dans son jardin ou en étant assis. Je peux parler un peu plus mais je pense que là j'ai assez de mots</p>

            <button type="button" onClick={() => console.log("Je vais bientôt incrémenter le tableau des pages")}>
                More about me
            </button>
        </div>
    );
};

export default LeftSide;