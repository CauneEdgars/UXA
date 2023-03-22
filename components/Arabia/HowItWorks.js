import React, { Component } from 'react';

class HowItWorks extends Component {
    render() {
        return (
            <section className="how-it-works-area ptb-70">
                <div className="container">
                    <div className="section-title">
                        <h2>نبذة عن الكاتب</h2>
                        <div className="bar"></div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-how-it-works">
                                <div className="circle">
                                    <i class="fas fa-search"></i>
                                </div>
                                <h3>المجالات البحثية</h3>
                                <p>• طوبولوجيا لينة</p>
                                <p>• أطقم ناعمة ، مجموعات ناعمة</p>
                                <p>• حلقات ناعمة ، وحدات لينة</p>
                                <p>• الجبر اللين</p>
                                <p>• الجبر الضبابي</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-how-it-works">
                                <div className="circle">
                                    <img src="/images/certificate_graphics.png" alt="image" />
                                </div>
                                <h3>الشهادات</h3>
                                <p>حاصل على ماجستير في عام 1983</p>
                                <p>حاصل على دكتوراه في الجبر الفاظي عام 1985</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-how-it-works">
                                <div className="circle">
                                    <i class="fas fa-user"></i>
                                </div>
                                <h3>العمل</h3>
                                <p>استاذ متفرغ في كلية العلوم جامعة الزقازيق - قسم الرياضيات</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default HowItWorks;