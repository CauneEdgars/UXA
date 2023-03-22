import React, { Component } from 'react';
import Link from 'next/link';

class MainBanner extends Component {
    render() {
        return (
            <div className="main-banner-section ptb-50">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-12">
                                    <div className="banner-content">
                                        <h1>Solved Problems In Groups & Rings</h1>
                                        <p>This book presents the fuzzy abstract algebra and includes solved problems in two areas (groups & rings)</p>

                                        <Link href="/images/solved_problems_groups_rings.pdf">
                                            <a className="btn btn-primary">Download Book</a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-12">
                                    <div className="money-transfer-form">
                                        <img src="/images/english_cover_img.png"></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainBanner;