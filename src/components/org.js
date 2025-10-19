import React from 'react';

const Org = () => {
    return (
        <div className="org global__py pt-0">
            <div className="container p-sm-0">
                <div className="row">
                    <div className="col-12 col-md-9 col-lg-7 text-center m-auto service__m" data-aos="fade-down"
                        data-aos-duration="1000">
                        <h2 className="global__heading m-0">Support Us
                        </h2>
                        <p className="org__desc global__desc mt-3 mb-0">Making a Real Difference in the Andes
                            <br /><br />
                            Warriors of Peace is dedicated to providing direct aid to vulnerable communities in the Andes. We believe that true peace begins with meeting basic human needs, and warmth is fundamental to survival in harsh mountain conditions.</p>
                    </div>
                </div>
                <div className="row align-items-xl-center">
                    <div className="col-lg-6" data-aos="fade-left" data-aos-duration="1000">
                        <ul>
                            <li className="org__li">
                                <div className="org__li-img">
                                    <img className="org__li-img--icon" src="/assets/img/campain.svg" alt="" />
                                </div>
                                <div className="">
                                    <h3 className="org__li-name">Direct Impact</h3>
                                    <p className="org__desc global__desc mt-2 mb-0">Every donation goes directly to purchasing and distributing coats to families in need.</p>
                                </div>
                            </li>
                            <li className="org__li">
                                <div className="org__li-img">
                                    <img className="org__li-img--icon" src="/assets/img/donation.svg" alt="" />
                                </div>
                                <div className="">
                                    <h3 className="org__li-name">Community Partnerships</h3>
                                    <p className="org__desc global__desc mt-2 mb-0">We work closely with local leaders to ensure effective distribution and long-term support.</p>
                                </div>
                            </li>
                            <li className="org__li">
                                <div className="org__li-img">
                                    <img className="org__li-img--icon" src="/assets/img/money.svg" alt="" />
                                </div>
                                <div className="">
                                    <h3 className="org__li-name">Sustainable Solutions</h3>
                                    <p className="org__desc global__desc mt-2 mb-0">We focus on building lasting relationships and addressing long-term community needs.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-6 d-none d-sm-block mt-5 mt-lg-0" data-aos="fade-right" data-aos-duration="1000">
                        <img className="img-fluid" src="/assets/img/draw-img.png" alt="image" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Org;