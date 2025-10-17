import React, { useEffect, useState } from 'react';
import { FaFacebookSquare, FaInstagram, FaTwitter, FaLinkedin, FaYoutube, FaEnvelope, FaMapMarkerAlt, FaSearch, FaBars } from 'react-icons/fa';

import logoMobile from '../assets/images/logo-wop-scaled.png';
import logo from '../assets/images/logo-wop-scaled.png';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
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

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', handleNavClick);
    });

    const handleMobileMenuToggle = (e) => {
      e.preventDefault();
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleMobileMenuClose = (e) => {
      e.preventDefault();
      setIsMobileMenuOpen(false);
    };

    const mobileMenuToggle = document.querySelector('.canvas-menu.gva-offcanvas .dropdown-toggle');
    const mobileMenuClose = document.querySelector('.control-close-mm');
    const mobileMenuOverlay = document.getElementById('gva-overlay');

    if (mobileMenuToggle) {
      mobileMenuToggle.addEventListener('click', handleMobileMenuToggle);
    }

    if (mobileMenuClose) {
      mobileMenuClose.addEventListener('click', handleMobileMenuClose);
    }

    if (mobileMenuOverlay) {
      mobileMenuOverlay.addEventListener('click', handleMobileMenuClose);
    }

    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', handleNavClick);
      });
      
      if (mobileMenuToggle) {
        mobileMenuToggle.removeEventListener('click', handleMobileMenuToggle);
      }
      
      if (mobileMenuClose) {
        mobileMenuClose.removeEventListener('click', handleMobileMenuClose);
      }
      
      if (mobileMenuOverlay) {
        mobileMenuOverlay.removeEventListener('click', handleMobileMenuClose);
      }
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="wp-site-header header-builder-frontend header-position-absolute">
      <div id="gva-overlay" className={isMobileMenuOpen ? 'open' : ''}></div>
      
      <div className="header-mobile header_mobile_screen">
        <div className="topbar-mobile">
          <div className="row">
            <div className="col-xl-6 col-xxl-6 col-lg-6 col-md-6 col-sm-6 col-6 topbar-left">
              <ul className="socials-2">
                <li><FaFacebookSquare /></li>
                <li><FaInstagram /></li>
                <li><FaTwitter /></li>
                <li><FaYoutube /></li>
                <li><FaLinkedin /></li>
              </ul>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 topbar-right">
              <div className="content-inner topbar-information">
              </div>
            </div>
          </div>
        </div>
        <div className="header-mobile-content">
          <div className="header-content-inner clearfix">
            <div className="header-left">
              <div className="logo-mobile">
                <img src={logoMobile} alt="Warriors of Peace" />
              </div>
            </div>
            <div className="header-right">
              <div className="canvas-mobile">
                <div className="canvas-menu gva-offcanvas">
                  <span className="dropdown-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}><FaBars /></span>
                </div>
                <div className={`gva-offcanvas-content mobile ${isMobileMenuOpen ? 'open' : ''}`}>
                  <div className="top-canvas">
                    <img src={logoMobile} alt="Warriors of Peace" />
                    <span className="control-close-mm" onClick={() => setIsMobileMenuOpen(false)}>×</span>
                  </div>
                  <div className="wp-sidebar sidebar">
                    <div id="gva-mobile-menu" className="navbar-collapse">
                      <ul id="menu-main-menu" className="gva-nav-menu gva-mobile-menu">
                        <li><a href="#home" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Home</a></li>
                        <li><a href="#who-we-are" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Who We Are</a></li>
                        <li><a href="#our-impact" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Our Impact</a></li>
                        <li><a href="#campaigns" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Campaigns</a></li>
                        <li><a href="#events" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Events</a></li>
                        <li><a href="#volunteer" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Volunteer</a></li>
                        <li><a href="#" className="btn-theme" onClick={() => setIsMobileMenuOpen(false)}>Donate Now</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header_default_screen">
        <div className="header-builder-inner">
          <div className="header-main-wrapper">
            <div data-elementor-type="wp-post" data-elementor-id="994" className="elementor elementor-994">
              <section className="elementor-section elementor-top-section elementor-element elementor-element-722373e elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="722373e" data-element_type="section" data-settings={{"background_background":"classic"}}>
                <div className="elementor-container elementor-column-gap-default">
                  <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-1207888" data-id="1207888" data-element_type="column">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-element elementor-element-03c86a1 elementor-icon-list--layout-inline elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="03c86a1" data-element_type="widget" data-widget_type="icon-list.default">
                        <div className="elementor-widget-container">
                          <ul className="elementor-icon-list-items elementor-inline-items">
                            <li className="elementor-icon-list-item elementor-inline-item">
                              <span className="elementor-icon-list-icon">
                                <FaEnvelope aria-hidden="true" />
                              </span>
                              <span className="elementor-icon-list-text">support@example.com</span>
                            </li>
                            <li className="elementor-icon-list-item elementor-inline-item">
                              <span className="elementor-icon-list-icon">
                                <FaMapMarkerAlt aria-hidden="true" />
                              </span>
                              <span className="elementor-icon-list-text">250 Main Street, 2nd Floor, USA</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-20755f6" data-id="20755f6" data-element_type="column">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-element elementor-element-075940f e-grid-align-right elementor-widget__width-auto elementor-shape-rounded elementor-grid-0 elementor-widget elementor-widget-social-icons" data-id="075940f" data-element_type="widget" data-widget_type="social-icons.default">
                        <div className="elementor-widget-container">
                          <div className="elementor-social-icons-wrapper elementor-grid">
                            <span className="elementor-grid-item">
                              <span className="elementor-icon elementor-social-icon elementor-social-icon-twitter">
                                <FaTwitter />
                              </span>
                            </span>
                            <span className="elementor-grid-item">
                              <span className="elementor-icon elementor-social-icon elementor-social-icon-facebook">
                                <FaFacebookSquare />
                              </span>
                            </span>
                            <span className="elementor-grid-item">
                              <span className="elementor-icon elementor-social-icon elementor-social-icon-instagram">
                                <FaInstagram />
                              </span>
                            </span>
                            <span className="elementor-grid-item">
                              <span className="elementor-icon elementor-social-icon elementor-social-icon-youtube">
                                <FaYoutube />
                              </span>
                            </span>
                            <span className="elementor-grid-item">
                              <span className="elementor-icon elementor-social-icon elementor-social-icon-linkedin">
                                <FaLinkedin />
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="elementor-section elementor-top-section elementor-element elementor-element-c40b646 gv-sticky-menu elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="c40b646" data-element_type="section">
                <div className="elementor-container elementor-column-gap-default">
                  <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-6dec4c0" data-id="6dec4c0" data-element_type="column">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <section className="elementor-section elementor-inner-section elementor-element elementor-element-23cb8cc elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="23cb8cc" data-element_type="section">
                        <div className="elementor-container elementor-column-gap-default">
                          <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-5b0560c" data-id="5b0560c" data-element_type="column">
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div className="elementor-element elementor-element-76b328d elementor-widget elementor-widget-gva-logo" data-id="76b328d" data-element_type="widget" data-widget_type="gva-logo.default">
                                <div className="elementor-widget-container">
                                  <div className="gva-element-gva-logo gva-element">
                                    <div className="gsc-logo text-left">
                                      <img src={logo} alt="Home" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-48d7460" data-id="48d7460" data-element_type="column">
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div className="elementor-element elementor-element-f7d3ab6 elementor-widget elementor-widget-gva-navigation-menu" data-id="f7d3ab6" data-element_type="widget" data-widget_type="gva-navigation-menu.default">
                                <div className="elementor-widget-container">
                                  <div className="gva-element-gva-navigation-menu gva-element">
                                    <div className="gva-navigation-menu menu-align-left">
                                      <div className="menu-main-menu-container">
                                        <ul id="menu-2340052896" className="gva-nav-menu gva-main-menu">
                                          <li><a href="#home" className="nav-link">Home</a></li>
                                          <li><a href="#who-we-are" className="nav-link">Who We Are</a></li>
                                          <li><a href="#our-impact" className="nav-link">Our Impact</a></li>
                                          <li><a href="#campaigns" className="nav-link">Campaigns</a></li>
                                          <li><a href="#events" className="nav-link">Events</a></li>
                                          <li><a href="#volunteer" className="nav-link">Volunteer</a></li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-aa0009a" data-id="aa0009a" data-element_type="column">
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div className="d-flex align-items-center justify-content-end gap-3">
                                {/* <div className="elementor-element elementor-element-732cb76 elementor-widget__width-auto elementor-widget elementor-widget-gva-search-box" data-id="732cb76" data-element_type="widget" data-widget_type="gva-search-box.default">
                                  <div className="elementor-widget-container">
                                    <div className="gva-element-gva-search-box gva-element">
                                      <div className="style-1 widget gsc-search-box">
                                        <div className="content-inner">
                                          <div className="main-search gva-search">
                                            <span className="control-search">
                                              <FaSearch aria-hidden="true" />
                                            </span>
                                            <div className="gva-search-content search-content">
                                              <div className="search-content-inner">
                                                <div className="content-inner">
                                                  <form method="get" className="searchform gva-main-search" action="#">
                                                    <div className="gva-search">
                                                      <input name="s" maxLength="40" className="form-control input-large input-search" type="text" size="20" placeholder="Search..." />
                                                      <span className="input-group-addon input-large btn-search">
                                                        <input type="submit" className="las" value="&#xf002;" readOnly />
                                                      </span>
                                                    </div>
                                                  </form>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div> */}
                                <div className="elementor-element elementor-element-ea04d1a elementor-widget__width-auto elementor-widget elementor-widget-gva_user" data-id="ea04d1a" data-element_type="widget" data-widget_type="gva_user.default">
                                  <div className="elementor-widget-container">
                                    <div className="gva-element-gva_user gva-element">
                                      <div className="gva-user" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                        <a href="#" className="btn-theme" style={{fontSize: '14px', whiteSpace: 'nowrap', minWidth: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', lineHeight: '1'}}>Donate Now</a>
                                      </div>
                                    </div>
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
        </div>
      </div>
    </header>
  );
}

export default Header;