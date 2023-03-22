import React, { Component } from 'react';

class HowItWorks extends Component {
    render() {
        return (
            <section className="how-it-works-area ptb-70">
                <div className="container">
                    <div className="section-title">
                        <h2>About The Author</h2>
                        <div className="bar"></div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-how-it-works">
                                <div className="circle">
                                    <i class="fas fa-search"></i>
                                </div>
                                <h3>Research fields</h3>
                                <p>• Soft Topology</p>
                                <p>• Soft sets, Soft groups</p>
                                <p>• Soft rings, Soft modules</p>
                                <p>• Soft Algebra</p>
                                <p>• Fuzzy Algebra</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-how-it-works">
                                <div className="circle">
                                    <img src="/images/certificate_graphics.png" alt="image" />
                                </div>
                                <h3>Certifications</h3>
                                <p>Obtained Master degree in 1983</p>
                                <p>Obtained PhD degree in Verbal Algebra in 1985</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-how-it-works">
                                <div className="circle">
                                    <i class="fas fa-user"></i>
                                </div>
                                <h3>Job Occupation</h3>
                                <p>Emeritus Professor at the Faculty of Science, Zagazig University - Department of Mathematics</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default HowItWorks;