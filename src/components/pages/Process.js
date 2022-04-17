import React from 'react';
import './Pages.css';

const Process = () => {
    return (
        <React.Fragment>

            <div className="container pt-5">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h3>Our Work Process</h3>
                        <div className="mx-auto" style={{ maxWidth: '550px' }}>
                            <p className="text-muted px-5 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sit assumenda doloremque numquam vitae deserunt. Non minima eius asperiores architecto quo, vitae eum soluta reiciendis corporis doloribus adipisci est sunt?</p>
                        </div>

                        <div class="ratio ratio-21x9">
                            <iframe src="https://www.youtube.com/embed/WwsNXwWdl7o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>

                    </div>
                </div>

            </div>

        </React.Fragment>
    )
}

export default Process;