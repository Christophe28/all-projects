import React from 'react';
import { projects } from '../config/config';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const MyCarousel = () => {

    return (
        <div className="container-carousel">
            <Carousel 
                autoPlay 
                interval={6000} 
                infiniteLoop 
                thumbWidth={120} 
                showIndicators={false} 
                showStatus={false}
            >
                {
                    projects.map((project, index) => (
                        <div className="my-carousel" key={project.name}>
                            <img src={project.picture} className="img-carousel" alt="projects" />
                            <div className="overlay">
                                <h2 className="overlay_title">
                                    {project.name}
                                </h2>
                                <p className="overlay_text">
                                    {project.description}
                                </p>
                            </div>
                            <div className="view-project">
                                <a href={project.url}>Voir le site</a>
                            </div>
                        </div>
                    ))
                }
            </Carousel>
        </div>
    );
};

export default MyCarousel;