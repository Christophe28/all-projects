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
                        </section>
                    </section>
                </BreadcrumbTrail>
            </ViewWrapper>
        </div>
    );
};

export default AllProjects;