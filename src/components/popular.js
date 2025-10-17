import React from 'react';
import { FaHeart } from 'react-icons/fa';

import project1 from '../assets/images/Coats-for-the-Andes.webp';
import project2 from '../assets/images/Emergency-Relief-Fund.webp';
import project3 from '../assets/images/Volunteer-Outreach.webp';
import project4 from '../assets/images/Future-Projects.webp';

const Popular = () => {
  const campaigns = [
    {
      id: 1,
      title: "Coats for the Andes",
      description: "Our flagship project. Help us provide 1,000 coats to vulnerable families in Peru before winter sets in.",
      image: project1,
      category: "Current Campaigns",
      raised: 12500,
      goal: 50000,
      percentRaised: 25.00,
      daysLeft: 45
    },
    {
      id: 2,
      title: "Emergency Relief Fund", 
      description: "A reserve fund to provide immediate assistance for unexpected weather-related emergencies.",
      image: project2,
      category: "Current Campaigns",
      raised: 8000,
      goal: 25000,
      percentRaised: 32.00,
      daysLeft: 60
    },
    {
      id: 3,
      title: "Volunteer Outreach",
      description: "Be a Warrior of Peace! Join our efforts to distribute coats and organize fundraising events",
      image: project3,
      category: "Current Campaigns",
      raised: 5000,
      goal: 15000,
      percentRaised: 33.33,
      daysLeft: 30
    },
    {
      id: 4,
      title: "Future Projects",
      description: "Beyond coats, we plan to expand our efforts to include food security, clean water, and shelter.",
      image: project4,
      category: "Future Projects",
      raised: 2000,
      goal: 100000,
      percentRaised: 2.00,
      daysLeft: 180
    }
  ];

  return (
    <section id="campaigns" className="elementor-section elementor-top-section elementor-element elementor-element-34cd595 elementor-section-boxed elementor-section-height-default elementor-section-height-default">
      <div className="elementor-container elementor-column-gap-default">
        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-2b881d3">
          <div className="elementor-widget-wrap elementor-element-populated">
            
            <div className="elementor-element elementor-element-d340f59 elementor-widget elementor-widget-gva-heading-block">
              <div className="elementor-widget-container">
                <div className="gva-element-gva-heading-block gva-element">
                  <div className="align-center style-1 widget gsc-heading box-align-center auto-responsive">
                    <div className="content-inner">
                      <div className="sub-title">
                        <span className="tagline">Our Campaigns</span>
                        <span className="shadow-text">Make an Impact</span>
                      </div>
                      <h2 className="title">
                        <span>Support Our Mission</span>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="elementor-element elementor-element-c683227 elementor-widget elementor-widget-gva-campaign">
              <div className="elementor-widget-container">
                <div className="gva-element-gva-campaign gva-element">
                  <div className="gsc-campaign layout-grid">
                    <div className="gva-content-items">
                      <div className="lg-block-grid-2 md-block-grid-2 sm-block-grid-1 xs-block-grid-1 xx-block-grid-1">
                        
                        {campaigns.map(campaign => (
                          <div key={campaign.id} className="item-columns">
                            <div className="campaign-block">
                              <div className="campaign-image">
                                <div>
                                  <img loading="lazy" decoding="async" width="1100" height="820" src={campaign.image} alt={campaign.title} />
                                </div>
                                <div className="overlay"></div>
                                <div className="campaign_loved_html">
                                  <div className="love_this_campaign" data-campaign-id={campaign.id}>
                                    <FaHeart />
                                  </div>
                                </div>
                                <div className="campaign-categories" style={{borderRadius: '10px'}}>
                                  <span className="posted_in">
                                    <span>{campaign.category}</span>
                                  </span>
                                </div>
                              </div>

                              <div className="campaign-content">
                                <div className="campaign-title clearfix">
                                  <h4 className="title">
                                    <span>{campaign.title}</span>
                                  </h4>
                                </div>

                                <div className="campaign-description">
                                  {campaign.description}
                                </div>

                                <div className="campaign-raised clearfix">
                                  <div className="campaign-total_raised">
                                    <span className="label-raised">Raised: </span>
                                    <span className="value-raised">${campaign.raised}</span>
                                  </div>
                                  <div className="campaign-percent_raised">{campaign.percentRaised}%</div>
                                </div>

                                <div className="campaign-progress clearfix">
                                  <div className="progress">
                                    <div className="progress-bar" style={{width: `${campaign.percentRaised}%`}}>
                                      <span className="percentage"></span>
                                    </div>
                                  </div>
                                </div>

                                <div className="campaign-goal">
                                  <span className="label-goal">Goal:</span>
                                  <span className="value-goal">${campaign.goal}</span>
                                </div>

                                <div className="campaign-bottom" style={{borderRadius: '15px'}}>
                                  <div className="content-inner">
                                    <div className="camapign-time_remaining">
                                      <div className="campaign-time-remaining">
                                        <span className="info-value time-remaining-desc">{campaign.daysLeft}</span>
                                        <span className="info-label time-remaining-name">Days Left</span>
                                      </div>
                                    </div>
                                    <div className="campaign-link">
                                      <a className="link-content" href="#">Donate</a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}

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

export default Popular;