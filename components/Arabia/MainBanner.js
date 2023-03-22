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
                                        <h1>تمارين محلولة في الزمر والحلقات</h1>
                                        <p>يتناول هذا الكتاب الجبر المجرد ويقدم العديد من التمارين المحلولة في مجالي الزمر والحلقات</p>

                                        <Link href="/images/solved_problems_groups_rings.pdf">
                                            <a className="btn btn-primary">تحميل الكتاب</a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-12">
                                    <div className="money-transfer-form">
                                        <img src="/images/arabia_cover_img.jpg"></img>
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