import React from 'react';

import TypesProjects from '../components/projects/types-project';
import ViewWrapper from '../components/view-wrapper/view-wrapper';

const Home = () => {
    return (
        <div className="container-home">
            <ViewWrapper>
                <h1>Portefolio</h1>
                <TypesProjects
                    myEvent={() => {console.log("yo")}}
                />           
            </ViewWrapper>
        </div>
    );
};

export default Home;