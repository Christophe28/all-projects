import React from 'react';

import ViewWrapper from '../components/view-wrapper/view-wrapper';
import BreadcrumbTrail from '../components/view-wrapper/breadcrumb-trail';

const About = () => {
    return (
        <div className="container-about">
            <ViewWrapper>
                <BreadcrumbTrail>
                {/* <BreadcrumbTest> */}
                    {/* <section> */}
                        <h1>About Me</h1>
                    {/* </section> */}
                {/* </BreadcrumbTest> */}
                </BreadcrumbTrail>
            </ViewWrapper>
        </div>
    );
};

export default About;