import React from 'react';

import LeftSide from '../components/home/Left-side';
import RightSide from '../components/home/right-side';
// import TypesProjects from '../components/projects/types-project';
import ViewWrapper from '../components/view-wrapper/view-wrapper';

const Home = () => {
    return (
        <div className="container-home">
            <ViewWrapper>
                <div className="container-sides">
                    <LeftSide />
                    <RightSide />
                </div>
                {/* <TypesProjects/>    */}        
            </ViewWrapper>
        </div>
    );
};

export default Home;