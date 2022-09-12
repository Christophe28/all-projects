import React from 'react';

import BreadcrumbTrail from '../components/view-wrapper/breadcrumb-trail';
import ViewWrapper from '../components/view-wrapper/view-wrapper';

import MyCarousel from './My-carousel';

const AllProjects = () => {

    return (
        <div>
            <ViewWrapper>
                <BreadcrumbTrail>
                    <section className="container-my-projects" >
                        <h1 style={{textAlign: "center"}}>PortFolio</h1>
                        <section className="container-carousel">
                        <MyCarousel />
                        {/* {
                            projects.map((project) => (
                                <section className="img-content" key={project.name}>
                                    <div className="img-container hover">
                                        <span>
                                            <h3>{project.name}</h3>
                                            <a href={project.url}>
                                                <p>{project.description}</p>
                                            </a>
                                        </span>
                                        <img src={project.picture} alt="my-projects" />    
                                    </div>
                                    <div className="view-project">
                                        <a href={project.url}>Voir le site</a>
                                    </div>
                                </section>
                            ))
                        } */}
                        </section>
                    </section>
                </BreadcrumbTrail>
            </ViewWrapper>
        </div>
    );
};

export default AllProjects;