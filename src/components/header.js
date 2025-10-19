import React from 'react';

const Header = () => {
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
            <nav className="navbar navbar-expand-lg navbar-light bg-white menu menu__scroll">
                <div className="container p-sm-0">
                    <a className="navbar-brand menu__logo p-0 m-0" href="#" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
                        <img className="menu__logo-img" src="/assets/img/WOP.svg" alt="logo" style={{height: '50px', width: 'auto'}} />
                    </a>
                    <button className="navbar-toggler menu__toggle" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <i className="fa-solid fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto menu__list my-3 my-lg-0">
                            <li className="nav-item">
                                <a className="nav-link menu__list-link menu__list-link--active" href="#" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link menu__list-link" href="#" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>Who We Are</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link menu__list-link" href="#" onClick={(e) => { e.preventDefault(); scrollToSection('campaigns'); }}>Campaigns</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link menu__list-link" href="#" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link menu__list-link" href="#" onClick={(e) => { e.preventDefault(); scrollToSection('team'); }}>Team</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link menu__list-link" href="#" onClick={(e) => { e.preventDefault(); scrollToSection('volunteer'); }}>Volunteer</a>
                            </li>
                        </ul>
                        <div className="d-sm-flex d-lg-block gap-4 mt-3 mt-lg-0">
                            <a href="#" className="btn menu__btn menu__btn-up mb-3 mb-lg-0" onClick={(e) => { e.preventDefault(); scrollToSection('campaigns'); }}>Donate</a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;