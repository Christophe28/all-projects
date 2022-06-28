import React from 'react';
import TypesProjects from '../components/projects/types-project';

const Home = () => {
    return (
        <div className="container-home">
            <h1>Portefolio</h1>

            <TypesProjects
                myEvent={() => {console.log("yo")}}
            />           
        </div>
    );
};

export default Home;