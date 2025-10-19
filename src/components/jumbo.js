import React from 'react';

const Jumbo = () => {
    return (
        <>
            <header className="hero__four">
                <div className="container p-sm-0">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-12 col-lg-6 position-relative">
                            <div className="d-flex align-items-center">
                                <img className="hero__two-i" src="/assets/img/8start.svg" alt="icon" />
                                <h4 className="global__rise">Raise your Hand to the right place
                                </h4>
                            </div>
                            <h1 className="global__title global__title-dark">Change the world by helping the people</h1>
                            <p className="global__desc">Crowdfunding is a way to raise money for an individual or organization
                                by collecting donations through family, friends
                                strangers and more.</p>
                            <div className="hero__four-element">
                                <a href="donate.html" className="global__btn">Get Started
                                    <i className="fa-solid fa-arrow-up-long global__btn-arrow"></i>
                                </a>
                                <img className="img-fluid d-none d-lg-block" src="/assets/img/element-2.png" alt="image" />
                            </div>
                        </div>
                        <div className="col-12 col-md-6 d-none d-lg-block position-relative">
                            <div className="swiper mySwiper hero__four-slider">
                                <div className="swiper-wrapper hero__four-slider--wrap">
                                    <div className="swiper-slide hero__four-slider--img hero__four-slider--brt">
                                        <img className="img-fluid" src="/assets/img/add-img-2.png" alt="image" />
                                    </div>
                                    <div className="swiper-slide hero__four-slider--img hero__four-slider--brb">
                                        <img className="img-fluid" src="/assets/img/add-img.png" alt="image" />
                                    </div>
                                    <div className="swiper-slide hero__four-slider--img hero__four-slider--brt">
                                        <img className="img-fluid" src="/assets/img/header-img-2.png" alt="image" />
                                    </div>
                                    <div className="swiper-slide hero__four-slider--img hero__four-slider--brb">
                                        <img className="img-fluid" src="/assets/img/header-img-3.png" alt="image" />
                                    </div>
                                </div>
                                <div className="swiper-pagination"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Jumbo;