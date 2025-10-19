import React from 'react';

const Service = () => {
    return (
        <div id="services" className="service global__py pt-0">
            <div className="container p-sm-0">
                <div className="row">
                    <div className="col-12 col-md-9 col-lg-6 text-center m-auto service__m" data-aos="fade-down"
                        data-aos-duration="1000">
                        <h2 className="global__heading m-0">Our Features Services</h2>
                        <p className="about__desc global__desc mt-3 mb-0">We believe that we can save more life with you.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 pe-md-4">
                        <div className="service__card service__card-linear" data-aos="fade-left" data-aos-duration="1000">
                            <div className="global__icon service__card-icon">
                                <img src="/assets/img/donation.svg" alt="image" style={{height: "32px", width: "32px"}} />
                            </div>
                            <div className="">
                                <h3 className="service__card-heading global__heading">Give Donation</h3>
                                <p className="service__card-desc global__desc mt-3 mb-0">The evidence is clear. The ability to
                                    learn to
                                    read is single significant factor potential. Became a volunteer people
                                    and the community.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 ps-md-4">
                        <div className="service__card service__card-linear mb-0" data-aos="fade-right" data-aos-duration="1000">
                            <div className="global__icon service__card-icon">
                                <img src="/assets/img/hands-2.svg" alt="image" style={{height: "32px", width: "32px"}} />
                            </div>

                            <div className="">
                                <h3 className="service__card-heading global__heading">Become Volunteer</h3>
                                <p className="service__card-desc global__desc mt-3 mb-0">The evidence is clear. The ability to
                                    learn to
                                    read is single significant factor potential. Became a volunteer people
                                    and the community.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service;