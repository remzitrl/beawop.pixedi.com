import React from 'react';

const About = () => {
    return (
        <div id="about" className="about global__py">
            <div className="container p-sm-0">
                <div className="row">
                    <div className="col-6 my-auto my-xl-0">
                        <div className="d-none d-lg-flex gap-4" data-aos="fade-right" data-aos-duration="1000">
                            <div className="about__image">
                                <img className="img-fluid" src="/assets/img/add-1.png" alt="image" />
                            </div>
                            <div className="about__image">
                                <img className="img-fluid" src="/assets/img/hands.webp" alt="image" />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-9 col-lg-6" data-aos="fade-left" data-aos-duration="1000">
                        <h2 className="about__heading global__heading">
                            Making a Difference in the Andes
                        </h2>
                        <p className="about__desc global__desc mb-3">Warriors of Peace (Guerradores de Paz) is a nonprofit dedicated to providing direct aid and fostering long-term change in vulnerable communities. Founded on the principles of peace and service, our first mission is focused on the Andes, where families endure freezing winters with little protection.</p>
                        <p className="about__desc global__desc m-0">We believe that true peace begins with meeting basic human needs — and warmth is a fundamental one. Through the generosity of our supporters, we aim to distribute 1,000 coats this season and build a foundation for future projects.</p>
                        <div className="">
                            <ul className="about__list">
                                <li>
                                    <img className="cases__card-range--dollar p-1 me-2" src="/assets/img/check.svg" alt="icon" />
                                    <span className="global__desc m-0">
                                        Direct aid to vulnerable communities
                                    </span>
                                </li>
                                <li>
                                    <img className="cases__card-range--dollar p-1 me-2" src="/assets/img/check.svg" alt="icon" />
                                    <span className="global__desc m-0">
                                        Focused on Andes region
                                    </span>
                                </li>
                                <li>
                                    <img className="cases__card-range--dollar p-1 me-2" src="/assets/img/check.svg" alt="icon" />
                                    <span className="global__desc m-0">
                                        Building foundation for future projects
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;