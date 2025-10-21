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
                                <h4 className="global__rise">Share Your Warmth - Donate a Lightly Used Coat Today
                                </h4>
                            </div>
                            <h1 className="global__title global__title-dark">Fighting Cold with Kindness</h1>
                            <p className="global__desc">
                                We’re collecting coats and donations to bring warmth and hope to families in the Andes.
                                Every jacket, coat, or small gift helps someone face the cold with comfort and care.
                            </p>
                            <div className="hero__four-element">
                                <a href="#" className="global__btn">Donate a Coat
                                    <i className="fa-solid fa-arrow-up-long global__btn-arrow"></i>
                                </a>
                                <img className="img-fluid d-none d-lg-block" src="/assets/img/element-2.png" alt="image" />
                            </div>
                        </div>
                        <div className="col-12 col-md-6 d-none d-lg-block position-relative">
                            <div className="swiper mySwiper hero__four-slider">
                                <div className="swiper-wrapper hero__four-slider--wrap">
                                    <div className="swiper-slide hero__four-slider--img hero__four-slider--brt">
                                        <img className="img-fluid" src="/assets/img/Slider-1.webp" alt="image" />
                                    </div>
                                    <div className="swiper-slide hero__four-slider--img hero__four-slider--brb">
                                        <img className="img-fluid" src="/assets/img/Slider-2.webp" alt="image" />
                                    </div>
                                    <div className="swiper-slide hero__four-slider--img hero__four-slider--brt">
                                        <img className="img-fluid" src="/assets/img/Slider-3.webp" alt="image" />
                                    </div>
                                    <div className="swiper-slide hero__four-slider--img hero__four-slider--brb">
                                        <img className="img-fluid" src="/assets/img/Slider-4.webp" alt="image" />
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