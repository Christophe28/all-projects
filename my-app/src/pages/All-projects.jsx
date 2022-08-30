import React from 'react';

import BreadcrumbTrail from '../components/view-wrapper/breadcrumb-trail';
import ViewWrapper from '../components/view-wrapper/view-wrapper';

import { projects } from '../config/config';

const AllProjects = () => {
    return (
        <div>
            <ViewWrapper>
                <BreadcrumbTrail>
                    <section>
                        <h1 style={{textAlign: "center"}}>Mes projets</h1>

                        {
                            projects.map((project) => (
                                <section>
                                    <a href={project.url}>{project.name}</a>
                                    <img src={project.picture} alt="my-projects" style={{width: "300px"}} />
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