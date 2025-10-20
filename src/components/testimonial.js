import React from 'react';

const Testimonial = () => {
    return (
        <div className="testimonial">
            <div className="container p-sm-0">
                <div className="row">
                    <div className="col-12 col-md-9 col-lg-6 text-center m-auto" data-aos="fade-down" data-aos-duration="1000">
                        <h3 className="global__text">Testimonials</h3>
                        <h2 className="global__heading">What people say's about us</h2>
                    </div>
                </div>

                <div className="testimonial__body">
                    <div className="testimonial__body-slider">
                        <div className="">
                            <div className="testimonial__card">
                                <div className="">
                                    <ul className="testimonial__card-ul">
                                        <li><i className="fa-solid fa-star"></i></li>
                                        <li><i className="fa-solid fa-star"></i></li>
                                        <li><i className="fa-solid fa-star"></i></li>
                                        <li><i className="fa-solid fa-star"></i></li>
                                        <li><i className="fa-solid fa-star"></i></li>
                                    </ul>
                                </div>
                                <p className="global__desc testimonial__card-desc">
                                    Warriors of Peace (Guerradores de Paz) is an incredible organization making a real difference in vulnerable communities. Their mission in the Andes, providing warmth to families facing harsh winters shows the power of compassion in action.
                                    Grounded in peace and service, they’re not just offering coats; they’re building hope and connection. I’m proud to support their work and highly recommend getting involved with this inspiring cause.
                                </p>
                                <div className="mt-auto">
                                    <div className="d-flex align-items-center">
                                        <img className="img-fluid" src="/assets/img/per2.webp" alt="user" />
                                        <div className="ps-3">
                                            <h4 className="testimonial__card-name">Nicole Navarro</h4>
                                            <span className="testimonial__card-type">Executive Director - Ocean Reef Chamber of Commerce</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="testimonial__card">
                                <div className="">
                                    <ul className="testimonial__card-ul">
                                        <li><i className="fa-solid fa-star"></i></li>
                                        <li><i className="fa-solid fa-star"></i></li>
                                        <li><i className="fa-solid fa-star"></i></li>
                                        <li><i className="fa-solid fa-star"></i></li>
                                        <li><i className="fa-solid fa-star"></i></li>
                                    </ul>
                                </div>
                                <p className="testimonial__card-desc global__desc">
                                    I’m proud to support Warriors of Peace and their mission. I’ve personally donated several coats and have seen firsthand how their work brings warmth and hope to families who need it most. It’s inspiring to see such dedication turn simple acts of giving into real impact.
                                </p>
                                <div className="mt-auto">
                                    <div className="d-flex align-items-center">
                                        <img className="img-fluid" src="/assets/img/per1.webp" alt="user" />
                                        <div className="ps-3">
                                            <h4 className="testimonial__card-name">Christina Sarmiento</h4>
                                            <span className="testimonial__card-type">Director - Pixedi Media Agency</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;