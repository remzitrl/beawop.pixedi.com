import React from 'react';

const Team = () => {
    return (
        <div id="team" className="team global__py">
            <div className="container p-sm-0">
                <div className="row">
                    <div className="col-12 col-md-9 col-lg-6 text-center m-auto" data-aos="fade-down" data-aos-duration="1000">
                        <h3 className="global__text">our team</h3>
                        <h2 className="global__heading">Our Expert Volunteer</h2>
                    </div>
                </div>

                <div className="team__grid">
                    {/* User 01 */}
                    <div className="team__card">
                        <div className="team__card-head">
                            <img className="img-fluid" src="/assets/img/user-1.png" alt="user image" />
                            <div className="team__card-head--social">
                                <ul className="">
                                    <li><a className="team__card-head--link" href="https://www.facebook.com/"><i className="fa-brands fa-facebook"></i></a></li>
                                    <li><a className="team__card-head--link" href="https://linkedin.com/"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                    <li><a className="team__card-head--link" href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></a></li>
                                    <li><a className="team__card-head--link" href="https://twitter.com/"><i className="fa-brands fa-twitter"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="">
                            <a href="#" className="team__user">Leslie Alexander</a>
                            <p className="team__cate">Volunteer</p>
                        </div>
                    </div>

                    {/* User 02 */}
                    <div className="team__card">
                        <div className="team__card-head">
                            <img className="img-fluid" src="/assets/img/user-2.png" alt="user image" />
                            <div className="team__card-head--social">
                                <ul className="">
                                    <li><a className="team__card-head--link" href="https://www.facebook.com/"><i className="fa-brands fa-facebook"></i></a></li>
                                    <li><a className="team__card-head--link" href="https://linkedin.com/"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                    <li><a className="team__card-head--link" href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></a></li>
                                    <li><a className="team__card-head--link" href="https://twitter.com/"><i className="fa-brands fa-twitter"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="">
                            <a href="#" className="team__user">Marilyn Ramirez</a>
                            <p className="team__cate">Volunteer</p>
                        </div>
                    </div>

                    {/* User 03 */}
                    <div className="team__card">
                        <div className="team__card-head">
                            <img className="img-fluid" src="/assets/img/user-3.png" alt="user image" />
                            <div className="team__card-head--social">
                                <ul className="">
                                    <li><a className="team__card-head--link" href="https://www.facebook.com/"><i className="fa-brands fa-facebook"></i></a></li>
                                    <li><a className="team__card-head--link" href="https://linkedin.com/"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                    <li><a className="team__card-head--link" href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></a></li>
                                    <li><a className="team__card-head--link" href="https://twitter.com/"><i className="fa-brands fa-twitter"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="">
                            <a href="#" className="team__user">Dianne Russell</a>
                            <p className="team__cate">Volunteer</p>
                        </div>
                    </div>

                    {/* User 04 */}
                    <div className="team__card">
                        <div className="team__card-head">
                            <img className="img-fluid" src="/assets/img/user-4.png" alt="user image" />
                            <div className="team__card-head--social">
                                <ul className="">
                                    <li><a className="team__card-head--link" href="https://www.facebook.com/"><i className="fa-brands fa-facebook"></i></a></li>
                                    <li><a className="team__card-head--link" href="https://linkedin.com/"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                    <li><a className="team__card-head--link" href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></a></li>
                                    <li><a className="team__card-head--link" href="https://twitter.com/"><i className="fa-brands fa-twitter"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="">
                            <a href="#" className="team__user">Jenny Wilson</a>
                            <p className="team__cate">Volunteer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team;