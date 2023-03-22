import React, { Component } from 'react';
import Link from 'next/link';

class Footer extends Component {
    render() {
        let currentYear = new Date().getFullYear();
        return (
            <footer className="footer-area">
                <div className="container">
                    <div className="select">
                        <div>
                            <span class="english"><Link href="/#">English</Link></span>
                            <span class="arab"><Link href="/arabia">العربية</Link></span>
                        </div>
                        <div>
                            <h6>All Rights Reserved - © 2022</h6>
                        </div>

                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;