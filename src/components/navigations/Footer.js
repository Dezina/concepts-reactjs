import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <React.Fragment>
            <section className="footer">

                <div class="card border-0" style={{ width: '300px', display: 'inline-block' }}>
                    <div class="card-body">
                        <p><strong>Pirol Design Inc.</strong></p>
                        <p>&copy; 2017 Piroll. All Rights Reserved</p>
                        <p>Designed by robirurk</p>
                        <p style={{ visibility: 'hidden' }}>.</p>
                    </div>
                </div>

                <div class="card border-0" style={{ width: '200px', display: 'inline-block', marginTop: '10px' }}>
                    <div class="card-body">
                        <p>hello@pirolltheme.com</p>
                        <p>+44 987 065 908</p>
                        <p style={{ visibility: 'hidden' }}>.</p>
                        <p style={{ visibility: 'hidden' }}>.</p>
                    </div>
                </div>

                <div class="card border-0" style={{ width: '200px', display: 'inline-block' }}>
                    <div class="card-body">
                        <p>Projects</p>
                        <p>About</p>
                        <p>Services</p>
                        <p>Career</p>
                    </div>
                </div>


                <div class="card border-0" style={{ width: '200px', display: 'inline-block' }}>
                    <div class="card-body">
                        <p>News</p>
                        <p>Events</p>
                        <p>Contact</p>
                        <p>Legals</p>
                    </div>
                </div>


                <div class="card border-0" style={{ width: '200px', display: 'inline-block' }}>
                    <div class="card-body">
                        <p>Facebook</p>
                        <p>Twitter</p>
                        <p>Instagram</p>
                        <p>Dribble</p>
                    </div>
                </div>

            </section>

        </React.Fragment>
    )
}

export default Footer;