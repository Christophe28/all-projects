import React from 'react';

import Navigation from '../navigation/navigation';

const ViewWrapper = ({ children }) => {
    return (
        <div className="container-view-wrapper">
            <Navigation />
            {children}
        </div>
    );
};

export default ViewWrapper;