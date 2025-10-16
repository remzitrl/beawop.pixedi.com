import React from 'react';
import Jumbo from './jumbo';
import Popular from './popular';
import Why from './why';
import Explore from './explore';
import Events from './events';
import More from './more';
import Header from './header';


const Main = () => {
    return (
        <div className="wrapper-page">
            <Header />
            <div id="page-content">
                <section id="wp-main-content" className="clearfix main-page">
                    <div className="main-page-content">
                        <div className="content-page">
                            <div id="wp-content" className="wp-content clearfix">
                                <div data-elementor-type="wp-post" data-elementor-id="999" className="elementor elementor-999">
                                    <section className="elementor-section elementor-top-section elementor-element elementor-element-396a7e6 elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="396a7e6" data-element_type="section">
                                        <div className="elementor-container elementor-column-gap-default">
                                            <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-efbcfb5" data-id="efbcfb5" data-element_type="column">
                                                <div className="elementor-widget-wrap elementor-element-populated">
                                                    <div className="elementor-element elementor-element-0713032 elementor-widget elementor-widget-gva-template_content" data-id="0713032" data-element_type="widget" data-widget_type="gva-template_content.default">
                                                        <div className="elementor-widget-container">
                                                            <div data-elementor-type="wp-page" data-elementor-id="29" className="elementor elementor-29">
                                                                <Jumbo />
                                                                <Popular />
                                                                <Why />
                                                                <Explore />
                                                                <Events />
                                                                <More />
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
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Main;