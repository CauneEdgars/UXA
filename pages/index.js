import React, { Component } from 'react';
import Header from '../components/English/Header';
import MainBanner from '../components/English/MainBanner';
import HowItWorks from '../components/English/HowItWorks';
import Footer from '../components/English/Footer';

class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <MainBanner />
                <HowItWorks />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Index;