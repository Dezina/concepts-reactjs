import { Carousel } from 'antd';
import React from 'react';


const contentStyle = {
    height: '100px',
    // lineHeight: '200px',
    color: '#fff',
    textAlign: 'center'
};
const nameStyle = {
    height: '100px',
    // lineHeight: '20px',
    color: '#fff',
    textAlign: 'center'

}

const Testimonial = () => {
    return (
        <React.Fragment>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 bg-colored testimonial">

                        <Carousel autoplay style={{ paddingTop: '70px', height: '260px' }}>
                            <div>
                                <h3 style={contentStyle}>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
                                    Ratione dicta nostrum porro vel assumenda laudantium laboriosam consequatur exercitationem. Consequatur, quisquam blanditiis. Ad expedita suscipit placeat modi corporis nulla, velit facere."</h3>
                                <h4 style={nameStyle}>James Smith</h4>
                            </div>

                            <div>
                                <h3 style={contentStyle}>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione dicta nostrum porro vel assumenda laudantium laboriosam consequatur exercitationem. Consequatur, quisquam blanditiis. Ad expedita suscipit placeat modi corporis nulla, velit facere."</h3>
                                <h4 style={nameStyle}>Maria Rodriguez</h4>
                            </div>
                            <div>
                                <h3 style={contentStyle}>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione dicta nostrum porro vel assumenda laudantium laboriosam consequatur exercitationem. Consequatur, quisquam blanditiis. Ad expedita suscipit placeat modi corporis nulla, velit facere."</h3>
                                <h4 style={nameStyle}>Thomas Anderson</h4>
                            </div>

                        </Carousel>
                    </div>

                    <div className="col-md-2" style={{ backgroundColor: "#fff" }}>
                        <img className="p-3" alt="example" src="https://www.tagtoday.net/hs-fs/hubfs/iponweb%20logo.png?width=256&name=iponweb%20logo.png" />

                    </div>
                    <div className="col-md-2" style={{ backgroundColor: "#fff" }}>
                        <img className="p-3" alt="example" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEl3tM7ofijBzOOeKN2vI1lcw-cy1xARofOi1mWdkmtU6lCBf2ac31kX2z6yb9HbBSEwo&usqp=CAU" />
                    </div>
                    <div className="col-md-2" style={{ backgroundColor: "#fff" }}>
                        <img className="p-3" alt="example" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzwIMzkmQbrTlodjAK3BbeKHaFylkRNUGdwg&usqp=CAU" />

                    </div>
                    <div className="col-md-2" style={{ backgroundColor: "#fff" }}>
                        <img className="p-3" alt="example" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv6_VgyLsFIt1EDwYV-0p5P0qm9PlEq7Dxww&usqp=CAU" />
                    </div>

                </div>
            </div>

        </React.Fragment>
    )
}

export default Testimonial;