import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper ,SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import BreadcrumbTrail from '../components/view-wrapper/breadcrumb-trail';
import ViewWrapper from '../components/view-wrapper/view-wrapper';

import { projects } from '../config/config';

const AllProjects = () => {

    return (
        <div>
            <ViewWrapper>
                <BreadcrumbTrail>
                    <section className="container-my-projects" >
                        <h1 style={{textAlign: "center"}}>PortFolio</h1>
                        {
                            projects.map((project) => (
                                <section className="img-content" key={project.name}>
                                    <div className="img-container hover">
                                        <span>
                                            <h3>{project.name}</h3>
                                            <a href={project.url}>
                                                <p>{project.description}</p>
                                            </a>
                                        </span>
                                        <img src={project.picture} alt="my-projects" />    
                                    </div>
                                    <div className="view-project">
                                        <a href={project.url}>Voir le site</a>
                                    </div>
                                </section>
                            ))
                        }
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={50}
                            slidesPerView={3}
                            navigation
                            pagination={{clickable: true}}
                            scrollbar={{draggable: true}}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log("slide change")}
                        >
                            <div className="swiper">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">Div1</div>
                                    <div className="swiper-slide">Div2</div>
                                    <div className="swiper-slide">Div3</div>
                                </div>
                                <div className="swiper-pagination"></div>
                                <div className="swiper-button-prev"></div>
                                <div className="swiper-button-next"></div>
                                <div className="swiper-scrollbar"></div>
                            </div>
                        </Swiper>
                    </section>
                </BreadcrumbTrail>
            </ViewWrapper>
        </div>
    );
};

export default AllProjects;