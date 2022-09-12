import React, {useState} from 'react';

import ViewWrapper from '../components/view-wrapper/view-wrapper';

import TwoSide from '../components/home/Two-side';

const Home = () => {
    const [currentIndex, setIndex] = useState(0)

    return (
        <div className="container-home">
            <ViewWrapper>
                <TwoSide />
            </ViewWrapper>
        </div>
    );
};

export default Home;