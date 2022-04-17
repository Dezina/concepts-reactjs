import React from 'react';
import signature from '../../images/sign.png';

const Section1 = () => {
    return (
        <React.Fragment>
            <section style={{ backgroundColor: "#fff" }}>
                <div className="container pt-5" style={{ height: '350px' }}>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3>About Us</h3>
                            <div className="mx-auto" style={{ maxWidth: '550px' }}>
                                <p className="text-muted px-5 py-3 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sit assumenda doloremque numquam vitae deserunt. Non minima eius asperiores architecto quo, vitae eum soluta reiciendis corporis doloribus adipisci est sunt?</p>

                                <img src={signature} alt="" width="150px" height="70px" />
                            </div>


                        </div>

                    </div>
                </div>

            </section>
        </React.Fragment>
    )
}

export default Section1;