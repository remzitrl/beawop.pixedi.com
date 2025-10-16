import React from 'react';
import { FaClock, FaMapMarkerAlt } from 'react-icons/fa';

import event4 from '../assets/wp-content/uploads/2021/03/event-4-600x450.jpg';
import event1 from '../assets/wp-content/uploads/2021/03/event-1-600x450.jpg';
import event3 from '../assets/wp-content/uploads/2021/03/event-3-600x450.jpg';

const Events = () => {
  return (
    <section id="events" className="elementor-section elementor-top-section elementor-element elementor-element-20fb29d elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="20fb29d" data-element_type="section" data-settings={{background_background:"classic"}}>
      <div className="elementor-container elementor-column-gap-default">
        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-23b8b87" data-id="23b8b87" data-element_type="column">
          <div className="elementor-widget-wrap elementor-element-populated">
            <section className="elementor-section elementor-inner-section elementor-element elementor-element-1a829fc elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="1a829fc" data-element_type="section">
              <div className="elementor-container elementor-column-gap-default">
                <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-440c957" data-id="440c957" data-element_type="column">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-8c29be4 animated-fast elementor-widget elementor-widget-gva-heading-block" data-id="8c29be4" data-element_type="widget" data-settings={{_animation:"fadeInUp"}} data-widget_type="gva-heading-block.default">
                      <div className="elementor-widget-container">
                        <div className="gva-element-gva-heading-block gva-element">   
                          <div className="align-left style-1 widget gsc-heading box-align-left auto-responsive">
                            <div className="content-inner">
                              <div className="sub-title">
                                <span className="tagline">Our Mission</span>
                                <span className="shadow-text">Events</span>
                              </div>

                              <h2 className="title">
                                <span>Join Our Warriors of Peace Events</span>
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-250f3af elementor-hidden-mobile" data-id="250f3af" data-element_type="column">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-c230d10 elementor-widget__width-auto elementor-widget elementor-widget-html" data-id="c230d10" data-element_type="widget" data-widget_type="html.default">
                      <div className="elementor-widget-container">
                        <a className="btn-theme" href="#">Join Our Mission</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="elementor-element elementor-element-1bc0005 elementor-widget elementor-widget-gva-events" data-id="1bc0005" data-element_type="widget" data-widget_type="gva-events.default">
              <div className="elementor-widget-container">
                <div className="gva-element-gva-events gva-element">
                  <div className="event-layout-list clearfix">
                    <div className="gva-content-items">
                      <div className="event-list-item">
                        <div className="tribe-event-list-block clearfix">
                          <div className="tribe-event-left">
                            <div className="content-inner">
                              <div className="tribe-events-event-image">
                                <a href="#" tabIndex="-1">
                                  <img loading="lazy" decoding="async" width="600" height="450" src={event4} className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="Winter Coat Distribution" />
                                </a>
                              </div>
                              <div className="tribe-start-date">
                                <div className="day">15</div>
                                <div className="month">Dec</div>
                              </div>
                              <div className="tribe-events-event-cost hidden">
                                <span className="ticket-cost">Free</span>
                              </div>
                            </div>
                          </div>

                          <div className="tribe-event-right clearfix">
                            <div className="content-inner">
                              <div className="tribe-events-event-meta">
                                <div className="author location">
                                  <span className="tribe-event-schedule-details">
                                    <span className="icon"><FaClock /></span>
                                    <span className="tribe-event-date-start">15 Dec, 2024 @ 9:00 am</span>
                                  </span>

                                  <span className="tribe-events-venue-details">
                                    <span className="icon"><FaMapMarkerAlt /></span>
                                    Cusco, Peru
                                    <abbr title="Peru">PE</abbr>
                                    <a className="tribe-events-gmap" href="#" title="Click to view a Google Map" target="_blank" rel="noreferrer noopener">+ Google Map</a>
                                  </span>
                                </div>
                              </div>

                              <h3 className="tribe-events-list-event-title">
                                <a className="tribe-event-url" href="#" title="Winter Coat Distribution" rel="bookmark">
                                  Winter Coat Distribution - Cusco
                                </a>
                              </h3>

                              <div className="entry-summary">
                                Join us in distributing warm coats to families in the Andes mountains. Help bring warmth and hope to vulnerable communities during the harsh winter months.
                              </div>
                            </div>

                            <div className="event-action">
                              <a className="btn-border" href="#">
                                <span>Volunteer</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="event-list-item">
                        <div className="tribe-event-list-block clearfix">
                          <div className="tribe-event-left">
                            <div className="content-inner">
                              <div className="tribe-events-event-image">
                                <a href="#" tabIndex="-1">
                                  <img loading="lazy" decoding="async" width="600" height="450" src={event1} className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="Fundraising Gala" />
                                </a>
                              </div>
                              <div className="tribe-start-date">
                                <div className="day">22</div>
                                <div className="month">Dec</div>
                              </div>
                              <div className="tribe-events-event-cost hidden">
                                <span className="ticket-cost">Free</span>
                              </div>
                            </div>
                          </div>

                          <div className="tribe-event-right clearfix">
                            <div className="content-inner">
                              <div className="tribe-events-event-meta">
                                <div className="author location">
                                  <span className="tribe-event-schedule-details">
                                    <span className="icon"><FaClock /></span>
                                    <span className="tribe-event-date-start">22 Dec, 2024 @ 7:00 pm</span> - <span className="tribe-event-time">11:00 pm</span>
                                  </span>

                                  <span className="tribe-events-venue-details">
                                    <span className="icon"><FaMapMarkerAlt /></span>
                                    Lima, Peru
                                    <abbr title="Peru">PE</abbr>
                                    <a className="tribe-events-gmap" href="#" title="Click to view a Google Map" target="_blank" rel="noreferrer noopener">+ Google Map</a>
                                  </span>
                                </div>
                              </div>

                              <h3 className="tribe-events-list-event-title">
                                <a className="tribe-event-url" href="#" title="Fundraising Gala" rel="bookmark">
                                  Warriors of Peace Fundraising Gala
                                </a>
                              </h3>

                              <div className="entry-summary">
                                Join us for an elegant evening of dinner, music, and inspiring stories from our work in the Andes. Help us raise funds for our winter aid programs.
                              </div>
                            </div>

                            <div className="event-action">
                              <a className="btn-border" href="#">
                                <span>Buy Tickets</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="event-list-item">
                        <div className="tribe-event-list-block clearfix">
                          <div className="tribe-event-left">
                            <div className="content-inner">
                              <div className="tribe-events-event-image">
                                <a href="#" tabIndex="-1">
                                  <img loading="lazy" decoding="async" width="600" height="450" src={event3} className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="Volunteer Orientation" />
                                </a>
                              </div>
                              <div className="tribe-start-date">
                                <div className="day">05</div>
                                <div className="month">Jan</div>
                              </div>
                              <div className="tribe-events-event-cost hidden">
                                <span className="ticket-cost">Free</span>
                              </div>
                            </div>
                          </div>

                          <div className="tribe-event-right clearfix">
                            <div className="content-inner">
                              <div className="tribe-events-event-meta">
                                <div className="author location">
                                  <span className="tribe-event-schedule-details">
                                    <span className="icon"><FaClock /></span>
                                    <span className="tribe-event-date-start">5 Jan, 2025 @ 10:00 am</span> - <span className="tribe-event-time">2:00 pm</span>
                                  </span>

                                  <span className="tribe-events-venue-details">
                                    <span className="icon"><FaMapMarkerAlt /></span>
                                    Online Event
                                    <abbr title="Virtual">Virtual</abbr>
                                    <a className="tribe-events-gmap" href="#" title="Online Event" target="_blank" rel="noreferrer noopener">+ Join Online</a>
                                  </span>
                                </div>
                              </div>

                              <h3 className="tribe-events-list-event-title">
                                <a className="tribe-event-url" href="#" title="Volunteer Orientation" rel="bookmark">
                                  Volunteer Orientation Session
                                </a>
                              </h3>

                              <div className="entry-summary">
                                Learn about our mission, volunteer opportunities, and how you can make a difference in the Andes. Perfect for new volunteers and supporters.
                              </div>
                            </div>

                            <div className="event-action">
                              <a className="btn-border" href="#">
                                <span>Register</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Events;