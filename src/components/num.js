
import React from 'react';

const Num = () => {
    return (
        <div className="num">
            <div className="container p-sm-0">
                <div className="num__body">
                    <div className="">
                        <h4 className="num__body-digit"><span className="num__counter">6500</span>+</h4>
                        <p className="num__body-text">Donation</p>
                    </div>
                    <div className="">
                        <h4 className="num__body-digit">$<span className="num__counter">60</span>+</h4>
                        <p className="num__body-text">Found Raised</p>
                    </div>
                    <div className="">
                        <h4 className="num__body-digit"><span className="num__counter">250</span> </h4>
                        <p className="num__body-text">Volunteer</p>
                    </div>
                    <div className="">
                        <h4 className="num__body-digit"><span className="num__counter">110</span></h4>
                        <p className="num__body-text">project</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Num;