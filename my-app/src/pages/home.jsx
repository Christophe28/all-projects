import React from 'react';

import ViewWrapper from '../components/view-wrapper/view-wrapper';
import LeftSide from '../components/home/Left-side';
import RightSide from '../components/home/right-side';
// import TypesProjects from '../components/projects/types-project';

const Home = () => {
    return (
        <div className="container-home">
            <ViewWrapper>
                <div className="container-sides">
                    <LeftSide />
                    <RightSide />
                </div>  
            </ViewWrapper>
        </div>
    );
};

export default Home;