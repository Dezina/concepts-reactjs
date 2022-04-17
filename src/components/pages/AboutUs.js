import { Typography } from 'antd';
import {
    ProjectOutlined, ClockCircleOutlined, StarOutlined, HeartOutlined
} from '@ant-design/icons';
import "antd/dist/antd.css";

import React from 'react';
import './Pages.css';
import signature from '../../images/sign.png';

const { Title } = Typography;

const AboutUs = () => {
    return (
        <React.Fragment className="about-bg-color">
            <div className="container-fluid about-header pt-5">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h3 className="text-white">Company Name</h3>
                        <div className="mx-auto" style={{ maxWidth: '550px' }}>
                            <p className="text-white px-5 py-3 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sit assumenda doloremque numquam vitae deserunt. Non minima eius asperiores architecto quo, vitae eum soluta reiciendis corporis doloribus adipisci est sunt?</p>

                        </div>


                    </div>

                </div>
            </div>

            <div className="container-fluid" style={{ backgroundColor: "rgb(25, 207, 168)", textAlign: "left" }}>

                <div className="row no-gutters">

                    <div className="col-md-3 pt-5">
                        <div class="main-div">
                            <div class="item1">
                                <ProjectOutlined style={{ fontSize: '100px', color: '#fff' }} />
                            </div>
                            <div class="item2">
                                <Title level={5} style={{ color: '#fff' }}>548</Title>
                                <Title level={5} style={{ color: '#fff' }}>Projects Completed</Title>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 pt-5">
                        <div class="main-div">
                            <div class="item1">
                                <ClockCircleOutlined style={{ fontSize: '100px', color: '#fff' }} />
                            </div>
                            <div class="item2">
                                <Title level={5} style={{ color: '#fff' }}>1465</Title>
                                <Title level={5} style={{ color: '#fff' }}>Working Hours</Title>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 pt-5">
                        <div class="main-div">
                            <div class="item1">
                                <StarOutlined style={{ fontSize: '100px', color: '#fff' }} />
                            </div>
                            <div class="item2">
                                <Title level={5} style={{ color: '#fff' }}>612</Title>
                                <Title level={5} style={{ color: '#fff' }}>Positive Feedbacks</Title>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 pt-5">
                        <div class="main-div">
                            <div class="item1">
                                <HeartOutlined style={{ fontSize: '100px', color: '#fff' }} />
                            </div>
                            <div class="item2">
                                <Title level={5} style={{ color: '#fff' }}>735</Title>
                                <Title level={5} style={{ color: '#fff' }}>Happy Clients</Title>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="container-fluid about-bg pt-5">
                <div className="row">
                    <div className="col-md-6"></div>
                    <div className="col-md-6 text-center">
                        <h3>About Us</h3>
                        {/* <div className="me-auto" style={{ maxWidth: '550px' }}> */}
                        <p className="text-muted px-5 py-3 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sit assumenda doloremque numquam vitae deserunt. Non minima eius asperiores architecto quo, vitae eum soluta reiciendis corporis doloribus adipisci est sunt?</p>

                        <img src={signature} alt="" width="150px" height="70px" />
                        {/* </div> */}


                    </div>

                </div>
            </div>

        </React.Fragment>
    )
}

export default AboutUs;