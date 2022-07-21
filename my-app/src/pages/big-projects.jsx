import React from 'react';
import { NavLink } from 'react-router-dom';

import ViewWrapper from '../components/view-wrapper/view-wrapper';

const BigProjects = () => {
    return (
        <div className="container-big-projects">
            <ViewWrapper>
                Gros projets
                <NavLink
                    to="//christophe28.github.io/configurator/"
                >
                    <p>Configurateur inseetu</p>
                </NavLink>
                
            </ViewWrapper>
        </div>
    );
};

export default BigProjects;