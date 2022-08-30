import React from 'react';

import BreadcrumbTrail from '../components/view-wrapper/breadcrumb-trail';
import ViewWrapper from '../components/view-wrapper/view-wrapper';

import { projects } from '../config/config';

const AllProjects = () => {
    return (
        <div>
            <ViewWrapper>
                <BreadcrumbTrail>
                    <section className="container-my-projects">
                        <h1 style={{textAlign: "center"}}>Mes projets</h1>
                        {
                            projects.map((project) => (
                                <section>
                                    <h3>{project.name}</h3>
                                    <img src={project.picture} alt="my-projects" />
                                    <a href={project.url}>
                                        <p>{project.description}</p>
                                    </a>
                                </section>
                            ))
                        }
                    </section>
                </BreadcrumbTrail>
            </ViewWrapper>
        </div>
    );
};

export default AllProjects;