import React, {useState} from 'react';

import ViewWrapper from '../components/view-wrapper/view-wrapper';

import TwoSide from '../components/home/Two-side';
import About from './about';
import Contact from './contact';
import AllProjects from './All-projects';

const Home = () => {
    const [currentIndex, setIndex] = useState(0)
    const [components, setComponents] = useState([
        <TwoSide 
            setState={setIndex}
            currentState={currentIndex
            }
        />,
        <About />,
        <Contact />,
        <AllProjects />
    ])

    return (
        <div className="container-home">
            <ViewWrapper>
                {components[currentIndex]}
            </ViewWrapper>
        </div>
    );
};

export default Home;