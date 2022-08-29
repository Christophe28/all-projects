import React from 'react';
import LeftSide from './Left-side';
import RightSide from './right-side';

const TwoSide = ({ setState, currentState }) => {
    return (
        <div className="container-sides">
            <LeftSide
                setState={setState}
                currentState={currentState} 
            />
            <RightSide />
        </div>
    );
};

export default TwoSide;