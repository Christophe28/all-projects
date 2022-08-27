import React from 'react';

import BreadcrumbTrail from '../components/view-wrapper/breadcrumb-trail';
import ViewWrapper from '../components/view-wrapper/view-wrapper';

const About = () => {
    return (
        <div className="container-about">
            <ViewWrapper>
                <BreadcrumbTrail>
                    <section>
                        <h1>About Me</h1>
                    </section>
                </BreadcrumbTrail>
            </ViewWrapper>
        </div>
    );
};

export default About;