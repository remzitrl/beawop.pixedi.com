import React from 'react';

const Blog = () => {
    return (
        <div className="gallery global__py pb-0" style={{ marginBottom: '280px' }}>
            <div className="container p-sm-0">
                <div className="row">
                    <div className="col-12 col-md-9 col-lg-7 text-center m-auto" data-aos="fade-down" data-aos-duration="1000">
                        <h3 className="global__text">Our Gallery</h3>
                        <h2 className="global__heading">Celebrating community through events and shared experiences.
                        </h2>
                    </div>
                </div>
                <div className="row align-items-stretch">
                    <div className="col-12 col-md-6 gallery__body-two d-flex" data-aos="fade-right" data-aos-duration="1000">
                        <div className="mb-4 mb-md-0 w-100">
                            <div className="gallery__body-layer-no-click d-block h-100">
                                <img className="img-fluid w-100 gallery__body-two--img" src="/assets/img/gal1.webp" alt="image" style={{height: '100%', objectFit: 'cover'}} />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 gallery__body-two d-flex" data-aos="fade-left" data-aos-duration="1000">
                        <div className="row w-100">
                            <div className="col-12 col-sm-6 mb-4 mb-md-0">
                                <div className="gallery__body-layer-no-click d-block h-100">
                                    <img className="img-fluid w-100 gallery__body-two--img" src="/assets/img/gal2.webp" alt="image" style={{height: '100%', objectFit: 'cover'}} />
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 mb-4 mb-md-1">
                                <div className="gallery__body-layer-no-click d-block h-100">
                                    <img className="img-fluid w-100 gallery__body-two--img" src="/assets/img/gal3.webp" alt="image" style={{height: '100%', objectFit: 'cover'}} />
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 mt-md-3 mt-xxl-4">
                                <div className="gallery__body-layer-no-click d-block h-100">
                                    <img className="img-fluid w-100 gallery__body-two--img" src="/assets/img/gal4.webp" alt="image" style={{height: '100%', objectFit: 'cover'}} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;