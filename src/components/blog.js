import React from 'react';

const Blog = () => {
    return (
        <div className="gallery global__py pb-0" style={{ marginBottom: '280px' }}>
            <div className="container p-sm-0">
                <div className="row">
                    <div className="col-12 col-md-9 col-lg-7 text-center m-auto" data-aos="fade-down" data-aos-duration="1000">
                        <h3 className="global__text">Our Gallery</h3>
                        <h2 className="global__heading">We create events for children and gather for support
                        </h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6 gallery__body-two" data-aos="fade-right" data-aos-duration="1000">
                        <div className="mb-4 mb-md-0">
                            <a className="gallery__body-layer d-block" data-gall="gallery01" href="assets/img/g-1.png">
                                <img className="img-fluid w-100 gallery__body-two--img" src="assets/img/g-1.png" alt="image" />
                            </a>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 gallery__body-two" data-aos="fade-left" data-aos-duration="1000">
                        <div className="row">
                            <div className="col-12 col-sm-6 mb-4 mb-md-0">
                                <a className="gallery__body-layer d-block" data-gall="gallery01" href="assets/img/g-2.png">
                                    <img className="img-fluid w-100 gallery__body-two--img" src="assets/img/g-2.png" alt="image" />
                                </a>
                            </div>
                            <div className="col-12 col-sm-6 mb-4 mb-md-1">
                                <a className="gallery__body-layer d-block" data-gall="gallery01" href="assets/img/g-3.png">
                                    <img className="img-fluid w-100 gallery__body-two--img" src="assets/img/g-3.png" alt="image" />
                                </a>
                            </div>
                            <div className="col-12 col-sm-12 mt-md-3 mt-xxl-4">
                                <a className="gallery__body-layer d-block" data-gall="gallery01" href="assets/img/g-4.png">
                                    <img className="img-fluid w-100 gallery__body-two--img" src="assets/img/g-4.png" alt="image" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;