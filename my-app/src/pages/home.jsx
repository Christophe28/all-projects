import React from 'react';

import TypesProjects from '../components/projects/types-project';
import ViewWrapper from '../components/view-wrapper/view-wrapper';

const Home = () => {
    return (
        <div className="container-home">
            <ViewWrapper>
                <h1>Développeur Web</h1>
                <h1>Deploiement</h1>
                <TypesProjects/>       
            </ViewWrapper>
        </div>
    );
};

export default Home;