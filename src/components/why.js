import React from 'react';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';

import image7 from '../assets/images/pic-2.webp';

const Why = () => {
  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-c087dfb elementor-section-boxed elementor-section-height-default elementor-section-height-default">
      <div className="elementor-container elementor-column-gap-default">
        <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-1682cab order-xxl-1 order-xl-1 order-2">
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-07149fa elementor-widget elementor-widget-gva-heading-block">
              <div className="elementor-widget-container">
                <div className="gva-element-gva-heading-block gva-element">
                  <div className="align-left style-1 widget gsc-heading box-align-left auto-responsive">
                    <div className="content-inner">
                      <div className="sub-title">
                        <span className="tagline">Why Support Us?</span>
                        <span className="shadow-text">Support Us</span>
                      </div>

                      <h2 className="title">
                        <span>Making a Real Difference in the Andes</span>
                      </h2>
                      <div className="title-desc">Warriors of Peace is dedicated to providing direct aid to vulnerable communities in the Andes. We believe that true peace begins with meeting basic human needs, and warmth is fundamental to survival in harsh mountain conditions.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="elementor-element elementor-element-3943d3f elementor-position-left icon-box-left elementor-view-default elementor-mobile-position-top elementor-vertical-align-top elementor-widget elementor-widget-icon-box">
              <div className="elementor-widget-container">
                <div className="elementor-icon-box-wrapper">
                  <div className="elementor-icon-box-icon">
                    <span className="elementor-icon">
                      <FaCheckCircle aria-hidden="true" />
                    </span>
                  </div>

                  <div className="elementor-icon-box-content">
                    <h3 className="elementor-icon-box-title">
                      <span>Direct Impact</span>
                    </h3>
                    <p className="elementor-icon-box-description">
                      Every donation goes directly to purchasing and distributing coats to families in need.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="elementor-element elementor-element-4c09b01 elementor-position-left icon-box-left elementor-view-default elementor-mobile-position-top elementor-vertical-align-top elementor-widget elementor-widget-icon-box">
              <div className="elementor-widget-container">
                <div className="elementor-icon-box-wrapper">
                  <div className="elementor-icon-box-icon">
                    <span className="elementor-icon">
                      <FaCheckCircle aria-hidden="true" />
                    </span>
                  </div>

                  <div className="elementor-icon-box-content">
                    <h3 className="elementor-icon-box-title">
                      <span>Community Partnerships</span>
                    </h3>
                    <p className="elementor-icon-box-description">
                      We work closely with local leaders to ensure effective distribution and long-term support.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="elementor-element elementor-element-b63fd1a elementor-position-left icon-box-left elementor-view-default elementor-mobile-position-top elementor-vertical-align-top elementor-widget elementor-widget-icon-box">
              <div className="elementor-widget-container">
                <div className="elementor-icon-box-wrapper">
                  <div className="elementor-icon-box-icon">
                    <span className="elementor-icon">
                      <FaCheckCircle aria-hidden="true" />
                    </span>
                  </div>

                  <div className="elementor-icon-box-content">
                    <h3 className="elementor-icon-box-title">
                      <span>Sustainable Solutions</span>
                    </h3>
                    <p className="elementor-icon-box-description">
                      We focus on building lasting relationships and addressing long-term community needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="elementor-element elementor-element-2999159 elementor-widget elementor-widget-html">
              <div className="elementor-widget-container">
                <a href="#" className="btn-theme">
                  Join Our Mission
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-ddb15fa order-xxl-2 order-xl-2 order-1">
          <div className="elementor-widget-wrap elementor-element-populated">
            <section className="elementor-section elementor-inner-section elementor-element elementor-element-0845aeb elementor-section-boxed elementor-section-height-default elementor-section-height-default">
              <div className="elementor-container elementor-column-gap-default">
                <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-add8c4f">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-c93448d elementor-widget elementor-widget-gva-image-content">
                      <div className="elementor-widget-container">
                        <div className="gva-element-gva-image-content gva-element">
                          <div className="gsc-image-content skin-v3">
                            <div className="image">
                              <img 
                                decoding="async" 
                                width="545" 
                                height="547" 
                                src={image7} 
                                className="attachment-full size-full wp-image-1143" 
                                alt="" 
                                sizes="(max-width: 545px) 100vw, 545px"
                              />
                            </div>
                            <div className="shape-1"></div>
                            <div className="shape-2"></div>
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
  );
}

export default Why;