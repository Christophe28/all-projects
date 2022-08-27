import React from 'react';

import BreadcrumbTrail from '../components/view-wrapper/breadcrumb-trail';
import ViewWrapper from '../components/view-wrapper/view-wrapper';

const AllProjects = () => {
    return (
        <div>
            <ViewWrapper>
                <BreadcrumbTrail>
                    <section>
                        <h1 style={{textAlign: "center"}}>Mes projets</h1>
                    </section>
                </BreadcrumbTrail>
            </ViewWrapper>
        </div>
    );
};

export default AllProjects;