import React from 'react';

const Footer = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <>
            <div className="footer">
                <div className="container p-sm-0">
                    <div className="row justify-content-between">
                        <div className="col-12 col-md-6 col-lg-4 col-xl-3 d-flex flex-column justify-content-between">
                            <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
                                <img className="img-fluid" src="/assets/img/WOP.svg" alt="logo" style={{ height: '70px', width: 'auto' }} />
                            </a>
                            <div className="footer__social">
                                <ul className="footer__social-ul">
                                    <li>
                                        <a className="footer__social-link" href="https://www.facebook.com/"><i
                                            className="fa-brands fa-facebook"></i></a>
                                    </li>
                                    <li>
                                        <a className="footer__social-link" href="https://linkedin.com/"><i
                                            className="fa-brands fa-linkedin-in"></i></a>
                                    </li>
                                    <li>
                                        <a className="footer__social-link" href="https://www.instagram.com/"><i
                                            className="fa-brands fa-instagram"></i></a>
                                    </li>
                                    <li>
                                        <a className="footer__social-link" href="https://twitter.com/"><i
                                            className="fa-brands fa-twitter"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 col-xl-2 d-md-flex justify-content-center my-5 my-md-0">
                            <div className="">
                                <h4 className="footer__sub">Navigation</h4>
                                <ul className="footer__list">
                                    <li>
                                        <a className="footer__list-item" href="#" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a className="footer__list-item" href="#" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>
                                            Who We Are
                                        </a>
                                    </li>
                                    <li>
                                        <a className="footer__list-item" href="#" onClick={(e) => { e.preventDefault(); scrollToSection('campaigns'); }}>
                                            Campaigns
                                        </a>
                                    </li>
                                    <li>
                                        <a className="footer__list-item" href="#" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>
                                            Services
                                        </a>
                                    </li>
                                    <li>
                                        <a className="footer__list-item" href="#" onClick={(e) => { e.preventDefault(); scrollToSection('team'); }}>
                                            Team
                                        </a>
                                    </li>
                                    <li>
                                        <a className="footer__list-item" href="#" onClick={(e) => { e.preventDefault(); scrollToSection('volunteer'); }}>
                                            Volunteer
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 col-xl-2 mb-5 mb-md-0 mt-md-5 mt-lg-0">
                            <div className="">
                                <h4 className="footer__sub">Get Involved</h4>
                                <ul className="footer__list">
                                    <li>
                                        <a className="footer__list-item" href="#" onClick={(e) => { e.preventDefault(); scrollToSection('campaigns'); }}>
                                            Support Our Campaigns
                                        </a>
                                    </li>
                                    <li>
                                        <a className="footer__list-item" href="#" onClick={(e) => { e.preventDefault(); scrollToSection('volunteer'); }}>
                                            Become a Volunteer
                                        </a>
                                    </li>
                                    <li>
                                        <a className="footer__list-item" href="#" onClick={(e) => { e.preventDefault(); scrollToSection('campaigns'); }}>
                                            Coats for the Andes
                                        </a>
                                    </li>
                                    <li>
                                        <a className="footer__list-item" href="#" onClick={(e) => { e.preventDefault(); scrollToSection('campaigns'); }}>
                                            Emergency Relief Fund
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4 mt-xl-0">
                            <p className="global__desc footer__desc m-0">Warriors of Peace is dedicated to providing direct aid and fostering long-term change in vulnerable communities. Together, we can bring warmth, dignity, and hope to those who need it most.</p>
                        </div>
                    </div>
                    <hr className="footer__border" />
                    <div className="row">
                        <div className="col-12 text-center">
                            <p className="footer__bottom">Copyright © 2025 Warriors of Peace. All rights reserved. | Bringing Hope One Coat at a Time</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;