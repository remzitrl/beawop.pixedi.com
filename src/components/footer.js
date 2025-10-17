import React, { useEffect } from 'react';
import { FaArrowRight, FaTwitter, FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

import logoWhite from '../assets/images/logo-wop-scaled.png';

const Footer = () => {
  useEffect(() => {
    // Smooth scrolling for navigation links
    const handleNavClick = (e) => {
      const target = e.target.closest('.nav-link');
      if (target) {
        e.preventDefault();
        const targetId = target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    // Add event listeners to all nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', handleNavClick);
    });

    // Cleanup
    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', handleNavClick);
      });
    };
  }, []);
  return (
    <footer id="wp-footer" className="clearfix">
        <div className="footer-main">
            <div data-elementor-type="wp-post" data-elementor-id="866" className="elementor elementor-866">
                <section className="elementor-section elementor-top-section elementor-element elementor-element-d01ae78 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="d01ae78" data-element_type="section" data-settings={{background_background:"classic"}}>
                    <div className="elementor-background-overlay"></div>
                    <div className="elementor-container elementor-column-gap-default">
                        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-13d26d1" data-id="13d26d1" data-element_type="column">
                            <div className="elementor-widget-wrap elementor-element-populated">
                                <section className="elementor-section elementor-inner-section elementor-element elementor-element-53c1d72 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="53c1d72" data-element_type="section">
                                    <div className="elementor-container elementor-column-gap-default">
                                        <div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-629b3e4" data-id="629b3e4" data-element_type="column">
                                            <div className="elementor-widget-wrap elementor-element-populated">
                                                <div className="elementor-element elementor-element-3864ba1 elementor-widget elementor-widget-gva-logo" data-id="3864ba1" data-element_type="widget" data-widget_type="gva-logo.default">
                                                    <div className="elementor-widget-container">
                                                        <div className="gva-element-gva-logo gva-element">
                                                            <div className="gsc-logo text-left">
                                                                <a className="site-branding-logo" href="#" title="Home" rel="Home">
                                                                    <img src={logoWhite} alt="Home" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="elementor-element elementor-element-6a03186 elementor-widget elementor-widget-text-editor" data-id="6a03186" data-element_type="widget" data-widget_type="text-editor.default">
                                                    <div className="elementor-widget-container">
                                                        <p>Warriors of Peace is dedicated to providing direct aid and fostering long-term change in vulnerable communities. Together, we can make a difference in the Andes.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-2afad77" data-id="2afad77" data-element_type="column">
                                            <div className="elementor-widget-wrap elementor-element-populated">
                                                <div className="elementor-element elementor-element-f2add0a elementor-widget elementor-widget-heading" data-id="f2add0a" data-element_type="widget" data-widget_type="heading.default">
                                                    <div className="elementor-widget-container">
                                                        <h2 className="elementor-heading-title elementor-size-default">Our Campaigns</h2>
                                                    </div>
                                                </div>
                                                <div className="elementor-element elementor-element-f6b7a25 elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="f6b7a25" data-element_type="widget" data-widget_type="icon-list.default">
                                                    <div className="elementor-widget-container">
                                                        <ul className="elementor-icon-list-items">
                                                            <li className="elementor-icon-list-item">
                                                                <a href="#campaigns" className="nav-link">
                                                                    <span className="elementor-icon-list-text">Coats for the Andes</span>
                                                                </a>
                                                            </li>
                                                            <li className="elementor-icon-list-item">
                                                                <a href="#campaigns" className="nav-link">
                                                                    <span className="elementor-icon-list-text">Emergency Relief Fund</span>
                                                                </a>
                                                            </li>
                                                            <li className="elementor-icon-list-item">
                                                                <a href="#volunteer" className="nav-link">
                                                                    <span className="elementor-icon-list-text">Volunteer Outreach</span>
                                                                </a>
                                                            </li>
                                                            <li className="elementor-icon-list-item">
                                                                <a href="#campaigns" className="nav-link">
                                                                    <span className="elementor-icon-list-text">Future Projects</span>
                                                                </a>
                                                            </li>
                                                            <li className="elementor-icon-list-item">
                                                                <a href="#events" className="nav-link">
                                                                    <span className="elementor-icon-list-text">Community Events</span>
                                                                </a>
                                                            </li>
                                                            <li className="elementor-icon-list-item">
                                                                <a href="#our-impact" className="nav-link">
                                                                    <span className="elementor-icon-list-text">Impact Stories</span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-09b1e60" data-id="09b1e60" data-element_type="column">
                                            <div className="elementor-widget-wrap elementor-element-populated">
                                                <div className="elementor-element elementor-element-1e1e4ae elementor-widget elementor-widget-heading" data-id="1e1e4ae" data-element_type="widget" data-widget_type="heading.default">
                                                    <div className="elementor-widget-container">
                                                        <h2 className="elementor-heading-title elementor-size-default">Organization</h2>
                                                    </div>
                                                </div>
                                                <div className="elementor-element elementor-element-8d95033 elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="8d95033" data-element_type="widget" data-widget_type="icon-list.default">
                                                    <div className="elementor-widget-container">
                                                        <ul className="elementor-icon-list-items">
                                                            <li className="elementor-icon-list-item">
                                                                <a href="#who-we-are" className="nav-link">
                                                                    <span className="elementor-icon-list-text">About Us</span>
                                                                </a>
                                                            </li>
                                                            <li className="elementor-icon-list-item">
                                                                <a href="#events" className="nav-link">
                                                                    <span className="elementor-icon-list-text">Latest Events</span>
                                                                </a>
                                                            </li>
                                                            <li className="elementor-icon-list-item">
                                                                <a href="#our-impact" className="nav-link">
                                                                    <span className="elementor-icon-list-text">Our Impact</span>
                                                                </a>
                                                            </li>
                                                            <li className="elementor-icon-list-item">
                                                                <a href="#campaigns" className="nav-link">
                                                                    <span className="elementor-icon-list-text">How It Works</span>
                                                                </a>
                                                            </li>
                                                            <li className="elementor-icon-list-item">
                                                                <a href="#contact" className="nav-link">
                                                                    <span className="elementor-icon-list-text">Contact Us</span>
                                                                </a>
                                                            </li>
                                                            <li className="elementor-icon-list-item">
                                                                <a href="#volunteer" className="nav-link">
                                                                    <span className="elementor-icon-list-text">Get Involved</span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-f9536bf" data-id="f9536bf" data-element_type="column">
                                            <div className="elementor-widget-wrap elementor-element-populated">
                                                <div className="elementor-element elementor-element-be09eb6 elementor-widget elementor-widget-heading" data-id="be09eb6" data-element_type="widget" data-widget_type="heading.default">
                                                    <div className="elementor-widget-container">
                                                        <h2 className="elementor-heading-title elementor-size-default">Contact</h2>
                                                    </div>
                                                </div>
                                                <div className="elementor-element elementor-element-d17cd2d elementor-view-stacked elementor-position-left elementor-vertical-align-middle icon-box-left elementor-shape-circle elementor-mobile-position-top elementor-widget elementor-widget-icon-box" data-id="d17cd2d" data-element_type="widget" data-widget_type="icon-box.default">
                                                    <div className="elementor-widget-container">
                                                        <div className="elementor-icon-box-wrapper">
                                                            <div className="elementor-icon-box-icon">
                                                                <span className="elementor-icon">
                                                                    <FaPhone />
                                                                </span>
                                                            </div>
                                                            <div className="elementor-icon-box-content">
                                                                <h3 className="elementor-icon-box-title">
                                                                    <span>Phone Number</span>
                                                                </h3>
                                                                <p className="elementor-icon-box-description">+1 (555) 123-4567</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="elementor-element elementor-element-e16a445 elementor-view-stacked elementor-position-left elementor-vertical-align-middle icon-box-left elementor-shape-circle elementor-mobile-position-top elementor-widget elementor-widget-icon-box" data-id="e16a445" data-element_type="widget" data-widget_type="icon-box.default">
                                                    <div className="elementor-widget-container">
                                                        <div className="elementor-icon-box-wrapper">
                                                            <div className="elementor-icon-box-icon">
                                                                <span className="elementor-icon">
                                                                    <FaEnvelope />
                                                                </span>
                                                            </div>
                                                            <div className="elementor-icon-box-content">
                                                                <h3 className="elementor-icon-box-title">
                                                                    <span>Email Address</span>
                                                                </h3>
                                                                <p className="elementor-icon-box-description">info@warriorsofpeace.org</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="elementor-element elementor-element-fd5ab33 elementor-view-stacked elementor-position-left elementor-vertical-align-middle icon-box-left elementor-shape-circle elementor-mobile-position-top elementor-widget elementor-widget-icon-box" data-id="fd5ab33" data-element_type="widget" data-widget_type="icon-box.default">
                                                    <div className="elementor-widget-container">
                                                        <div className="elementor-icon-box-wrapper">
                                                            <div className="elementor-icon-box-icon">
                                                                <span className="elementor-icon">
                                                                    <FaMapMarkerAlt />
                                                                </span>
                                                            </div>
                                                            <div className="elementor-icon-box-content">
                                                                <h3 className="elementor-icon-box-title">
                                                                    <span>Locations</span>
                                                                </h3>
                                                                <p className="elementor-icon-box-description">Lima, Peru & New York, USA</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section className="elementor-section elementor-inner-section elementor-element elementor-element-22d5bd6 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="22d5bd6" data-element_type="section" data-settings={{background_background:"classic"}}>
                                    <div className="elementor-container elementor-column-gap-default">
                                        <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-2adf408" data-id="2adf408" data-element_type="column">
                                            <div className="elementor-widget-wrap elementor-element-populated">
                                                <div className="elementor-element elementor-element-33680e7 elementor-widget elementor-widget-text-editor" data-id="33680e7" data-element_type="widget" data-widget_type="text-editor.default">
                                                    <div className="elementor-widget-container">
                                                        <div>© 2025 Warriors of Peace. All Rights Reserved</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-2c39be1" data-id="2c39be1" data-element_type="column">
                                            <div className="elementor-widget-wrap elementor-element-populated">
                                                <div className="elementor-element elementor-element-716da3e elementor-shape-circle e-grid-align-right e-grid-align-mobile-center elementor-grid-0 elementor-widget elementor-widget-social-icons" data-id="716da3e" data-element_type="widget" data-widget_type="social-icons.default">
                                                    <div className="elementor-widget-container">
                                                        <div className="elementor-social-icons-wrapper elementor-grid">
                                                            <span className="elementor-grid-item">
                                                                <a className="elementor-icon elementor-social-icon elementor-social-icon-twitter elementor-repeater-item-bb4b3ef" href="#" target="_blank" rel="noreferrer">
                                                                    <span className="elementor-screen-only">Twitter</span>
                                                                    <FaTwitter />
                                                                </a>
                                                            </span>
                                                            <span className="elementor-grid-item">
                                                                <a className="elementor-icon elementor-social-icon elementor-social-icon-facebook elementor-repeater-item-b32881d" href="#" target="_blank" rel="noreferrer">
                                                                    <span className="elementor-screen-only">Facebook</span>
                                                                    <FaFacebook />
                                                                </a>
                                                            </span>
                                                            <span className="elementor-grid-item">
                                                                <a className="elementor-icon elementor-social-icon elementor-social-icon-instagram elementor-repeater-item-e9775fc" href="#" target="_blank" rel="noreferrer">
                                                                    <span className="elementor-screen-only">Instagram</span>
                                                                    <FaInstagram />
                                                                </a>
                                                            </span>
                                                            <span className="elementor-grid-item">
                                                                <a className="elementor-icon elementor-social-icon elementor-social-icon-youtube elementor-repeater-item-a3e3df5" href="#" target="_blank" rel="noreferrer">
                                                                    <span className="elementor-screen-only">YouTube</span>
                                                                    <FaYoutube />
                                                                </a>
                                                            </span>
                                                            <span className="elementor-grid-item">
                                                                <a className="elementor-icon elementor-social-icon elementor-social-icon-linkedin elementor-repeater-item-1450104" href="#" target="_blank" rel="noreferrer">
                                                                    <span className="elementor-screen-only">Linkedin</span>
                                                                    <FaLinkedin />
                                                                </a>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </footer>
  );
};

export default Footer;