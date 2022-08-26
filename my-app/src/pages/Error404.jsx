import React from 'react';
import { NavLink } from 'react-router-dom';

const Error404 = () => {
    return (
        <div>
            <h1>Error 404 data not found</h1>
            <p>Oups ! Mauvais url, si vous voulez retourner sur la page d'accueil c'est par ici</p>
            <NavLink
                to="/"
            >
                Page d'accueil mon pote!
            </NavLink>
        </div>
    );
};

export default Error404;