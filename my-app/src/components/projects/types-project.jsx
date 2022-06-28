import React from 'react';
import { NavLink } from 'react-router-dom';

const TypesProjects = ({ myEvent }) => {
    return (
        <div className="container-projects">
            <section className="big-project">
                <NavLink
                to="/big-projects"
                >
                    Gros projets
                </NavLink>
            </section>

            <section className="soft-project">
                <NavLink
                to="/soft-projects"
                >
                    Petit projets
                </NavLink>
            </section>

            <section className="on-working">
                <NavLink
                to="/on-working"
                >
                    Projets en cours
                </NavLink>
            </section>
        </div>
    );
};

export default TypesProjects;