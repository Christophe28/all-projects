import React from 'react';
import { NavLink } from 'react-router-dom';
import ViewWrapper from '../components/view-wrapper/view-wrapper';

const OnProgress = () => {
    return (
        <div>
            <ViewWrapper>
                <h1>Toujours en cours</h1>

                <NavLink
                to="//christophe28.github.io/randomType"
                >
                    randomType Pkm
                </NavLink>
            </ViewWrapper>
        </div>
    );
};

export default OnProgress;