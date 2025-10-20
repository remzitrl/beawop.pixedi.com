
import React from 'react';

const Join = () => {
    return (
        <div id="volunteer" className="join">
            <div className="container p-sm-0">
                <div className="row">
                    <div className="card join__card">
                        <img src="/assets/img/BG-Element.png" className="img-fluid join__card-img" alt="image" />
                        <div className="card-img-overlay join__card-layer">
                            <div className="col-11 col-md-7">
                                <h3 className="join__text global__text">Become a volenteer</h3>
                                <h2 className="join__heading global__heading">Every donation supports not just immediate relief but also the building of resilient communities.
                                </h2>
                                <button className="join__card-layer--btn global__btn">Join Us</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Join;