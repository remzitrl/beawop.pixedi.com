import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FaHandsHelping, FaUsers, FaThermometerHalf, FaGraduationCap, FaHeart, FaRocket, FaQuoteLeft } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import testimonial1 from '../assets/wp-content/uploads/2021/09/testimonial-1.jpg';
import testimonial2 from '../assets/wp-content/uploads/2021/09/testimonial-2.jpg';
import testimonial3 from '../assets/wp-content/uploads/2021/09/testimonial-3.jpg';

function Explore() {
    return (
        <>
            <section className="elementor-section elementor-top-section elementor-element elementor-element-e1ff7d0 elementor-section-boxed elementor-section-height-default elementor-section-height-default">
                <div className="elementor-background-video-container elementor-hidden-mobile">
                    <iframe
                        frameBorder="0" 
                        allowFullScreen="" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        id="widget2"
                        className="elementor-background-video-embed"
                        src="https://www.youtube.com/embed/NrmMk1Myrxc?autoplay=1&mute=1&controls=0&rel=0&loop=1&playlist=NrmMk1Myrxc"
                        title="Background Video"
                        width="2541px"
                        height="1431px"
                        maxwidth="none"
                        maxheight="none"
                    ></iframe>
                </div>
                <div className="elementor-background-overlay"></div>
                <div className="elementor-container elementor-column-gap-no">
                    <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-2530a64">
                        <div className="elementor-widget-wrap elementor-element-populated">
                            <div className="elementor-element elementor-element-d1134a2 elementor-widget elementor-widget-gva-heading-block">
                                <div className="elementor-widget-container">
                                    <div className="gva-element-gva-heading-block gva-element">
                                        <div className="align-center style-1 widget gsc-heading box-align-left auto-responsive">
                                            <div className="content-inner">
                                                <div className="sub-title">
                                                    <span className="tagline">Our Impact</span>
                                                </div>

                                                <h2 className="title">
                                                    <span>Together We Can Bring Warmth and Hope to the Andes</span>
                                                </h2>
                                                <div className="title-desc">Join Warriors of Peace in our mission to provide essential aid to vulnerable communities.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="elementor-section elementor-top-section elementor-element elementor-element-e2c6a3b elementor-section-boxed elementor-section-height-default elementor-section-height-default">
                <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-e487cea">
                        <div className="elementor-widget-wrap elementor-element-populated">
                            <div className="elementor-element elementor-element-7bfbe84 elementor-widget elementor-widget-gva_icon_box_group">
                                <div className="elementor-widget-container">
                                    <div className="gva-element-gva_icon_box_group gva-element">
                                        <div className="gsc-icon-box-group layout-carousel swiper-slider-wrapper style-2">
                                            <Swiper
                                                modules={[Navigation, Pagination, Autoplay]}
                                                spaceBetween={30}
                                                slidesPerView={5}
                                                navigation={{
                                                    nextEl: '.swiper-nav-next',
                                                    prevEl: '.swiper-nav-prev',
                                                }}
                                                pagination={{
                                                    el: '.swiper-pagination',
                                                    clickable: true,
                                                }}
                                                autoplay={{
                                                    delay: 3000,
                                                    disableOnInteraction: false,
                                                }}
                                                className="init-carousel-swiper"
                                            >
                                                <SwiperSlide>
                                                    <div className="icon-box-item">
                                                        <div className="icon-box-content">
                                                            <div className="box-icon">
                                                                <FaHandsHelping aria-hidden="true" />
                                                            </div>
                                                            <div className="content-inner">
                                                                <h3 className="title">Emergency Relief</h3>
                                                            </div>
                                                        </div>
                                                        <a href="#" className="link-overlay"></a>
                                                    </div>
                                                </SwiperSlide>

                                                <SwiperSlide>
                                                    <div className="icon-box-item">
                                                        <div className="icon-box-content">
                                                            <div className="box-icon">
                                                                <FaUsers aria-hidden="true" />
                                                            </div>
                                                            <div className="content-inner">
                                                                <h3 className="title">Community Support</h3>
                                                            </div>
                                                        </div>
                                                        <a href="#" className="link-overlay"></a>
                                                    </div>
                                                </SwiperSlide>

                                                <SwiperSlide>
                                                    <div className="icon-box-item">
                                                        <div className="icon-box-content">
                                                            <div className="box-icon">
                                                                <FaThermometerHalf aria-hidden="true" />
                                                            </div>
                                                            <div className="content-inner">
                                                                <h3 className="title">Winter Aid</h3>
                                                            </div>
                                                        </div>
                                                        <a href="#" className="link-overlay"></a>
                                                    </div>
                                                </SwiperSlide>

                                                <SwiperSlide>
                                                    <div className="icon-box-item">
                                                        <div className="icon-box-content">
                                                            <div className="box-icon">
                                                                <FaGraduationCap aria-hidden="true" />
                                                            </div>
                                                            <div className="content-inner">
                                                                <h3 className="title">Education</h3>
                                                            </div>
                                                        </div>
                                                        <a href="#" className="link-overlay"></a>
                                                    </div>
                                                </SwiperSlide>

                                                <SwiperSlide>
                                                    <div className="icon-box-item">
                                                        <div className="icon-box-content">
                                                            <div className="box-icon">
                                                                <FaHeart aria-hidden="true" />
                                                            </div>
                                                            <div className="content-inner">
                                                                <h3 className="title">Healthcare</h3>
                                                            </div>
                                                        </div>
                                                        <a href="#" className="link-overlay"></a>
                                                    </div>
                                                </SwiperSlide>

                                                <SwiperSlide>
                                                    <div className="icon-box-item">
                                                        <div className="icon-box-content">
                                                            <div className="box-icon">
                                                                <FaRocket aria-hidden="true" />
                                                            </div>
                                                            <div className="content-inner">
                                                                <h3 className="title">Future Projects</h3>
                                                            </div>
                                                        </div>
                                                        <a href="#" className="link-overlay"></a>
                                                    </div>
                                                </SwiperSlide>
                                            </Swiper>
                                            <div className="swiper-pagination"></div>
                                            <div className="swiper-nav-next"></div>
                                            <div className="swiper-nav-prev"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Testimonials Section */}
                            <div className="elementor-element elementor-element-1761d42 elementor-widget elementor-widget-gva-heading-block">
                                <div className="elementor-widget-container">
                                    <div className="gva-element-gva-heading-block gva-element">
                                        <div className="align-center style-1 widget gsc-heading box-align-left auto-responsive">
                                            <div className="content-inner">
                                                <div className="sub-title">
                                                    <span className="tagline">Community Voices</span>
                                                    <span className="shadow-text">Testimonials</span>
                                                </div>
                                                <h2 className="title">
                                                    <span>Stories of Impact</span>
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="elementor-element elementor-element-ef504fb dot-number elementor-widget elementor-widget-gva-testimonials">
                                <div className="elementor-widget-container">
                                    <div className="gva-element-gva-testimonials gva-element">
                                        <div className="gsc-testimonial layout-carousel swiper-slider-wrapper style-1">
                                            <div className="swiper-content-inner">
                                                <Swiper
                                                    modules={[Navigation, Pagination, Autoplay]}
                                                    spaceBetween={30}
                                                    slidesPerView={1}
                                                    pagination={{
                                                        el: '.swiper-pagination',
                                                        clickable: true,
                                                    }}
                                                    autoplay={{
                                                        delay: 5000,
                                                        disableOnInteraction: false,
                                                    }}
                                                    className="init-carousel-swiper swiper"
                                                    style={{ height: 'auto', minHeight: '300px' }}
                                                >
                                                <SwiperSlide>
                                                    <div className="testimonial-item style-1">
                                                        <div className="testimonial-content">
                                                            <div className="testimonial-image">
                                                                <img src={testimonial1} alt="Maria Rodriguez" />
                                                            </div>
                                                            <div className="testimonial-content-inner">
                                                                <div className="testimonial-quote">
                                                                    "Warriors of Peace brought warmth to our community when we needed it most. The coats they provided saved many families from the harsh winter."
                                                                </div>
                                                                <div className="testimonial-meta">
                                                                    <div className="testimonial-information">
                                                                        <span className="testimonial-name">Maria Rodriguez,</span>
                                                                        <span className="testimonial-job">Community Leader</span>
                                                                    </div>
                                                                </div>
                                                                <span className="quote-icon"><FaQuoteLeft /></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>

                                                <SwiperSlide>
                                                    <div className="testimonial-item style-1">
                                                        <div className="testimonial-content">
                                                            <div className="testimonial-image">
                                                                <img src={testimonial3} alt="Carlos Mendez" />
                                                            </div>
                                                            <div className="testimonial-content-inner">
                                                                <div className="testimonial-quote">
                                                                    "Their direct approach and genuine care for our people made all the difference. Every donation truly reaches those in need."
                                                                </div>
                                                                <div className="testimonial-meta">
                                                                    <div className="testimonial-information">
                                                                        <span className="testimonial-name">Carlos Mendez,</span>
                                                                        <span className="testimonial-job">Volunteer</span>
                                                                    </div>
                                                                </div>
                                                                <span className="quote-icon"><FaQuoteLeft /></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>

                                                <SwiperSlide>
                                                    <div className="testimonial-item style-1">
                                                        <div className="testimonial-content">
                                                            <div className="testimonial-image">
                                                                <img src={testimonial2} alt="Ana Gutierrez" />
                                                            </div>
                                                            <div className="testimonial-content-inner">
                                                                <div className="testimonial-quote">
                                                                    "Seeing the joy on children's faces when they received their coats was unforgettable. Warriors of Peace brings hope to the Andes."
                                                                </div>
                                                                <div className="testimonial-meta">
                                                                    <div className="testimonial-information">
                                                                        <span className="testimonial-name">Ana Gutierrez,</span>
                                                                        <span className="testimonial-job">Local Teacher</span>
                                                                    </div>
                                                                </div>
                                                                <span className="quote-icon"><FaQuoteLeft /></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                </Swiper>
                                            </div>
                                            <div className="swiper-pagination"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Explore;