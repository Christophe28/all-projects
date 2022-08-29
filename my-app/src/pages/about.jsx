import React from 'react';

import ViewWrapper from '../components/view-wrapper/view-wrapper';
import BreadcrumbTrail from '../components/view-wrapper/breadcrumb-trail';

import { hardSkills } from '../config/config';

const About = () => {
    console.log(hardSkills);
    return (
        <div className="container-about">
            <ViewWrapper>
                <BreadcrumbTrail>
                    <h1>ABOUT ME</h1>
                    <p className="present-me">Je suis <strong>Christophe Buffe</strong> Web développeur junior/front-end</p>
                    <p className="all-about-me">Grand passioné de l'apprentissage, je suis souvent en quête d'enrichissement intélectuel. J'essaye au maximum de m'instruire et que chaque journée soit productive, peut importe l'aspect. J' m'intéresse particulièrement aux échecs, à la musique, et aux sports. Actuellement j'apprend donc la théorie des échecs, le violons en autodidacte, en ce qui concerne le sport j'en ai pratiqués énorméments et faire la liste serait inappropiré. En ce qui concerne le code, je suis un fan inconditionnel de React! </p>
                    <section>
                        {
                            hardSkills.map((hardSkill) => (
                                <div className="hardSkill name">
                                    <p>{hardSkill.name}</p>
                                </div>
                            ))
                        }
                    </section>
                </BreadcrumbTrail>
            </ViewWrapper>
        </div>
    );
};

export default About;