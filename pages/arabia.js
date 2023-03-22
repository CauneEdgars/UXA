import React, { Component } from 'react';
import Header from '../components/Arabia/Header';
import MainBanner from '../components/Arabia/MainBanner';
import HowItWorks from '../components/Arabia/HowItWorks';
import Footer from '../components/Arabia/Footer';

class Arabia extends Component {
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

export default Arabia;