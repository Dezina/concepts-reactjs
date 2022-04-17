import { Progress, Typography, Image } from 'antd';
import {
    ProjectOutlined, ClockCircleOutlined, StarOutlined, HeartOutlined
} from '@ant-design/icons';
import "antd/dist/antd.css";

import React from 'react'
import './Pages.css';

const { Title } = Typography;

const Work = () => {
    return (
        <React.Fragment>
            <div className="container-fluid work-bg pt-5" style={{ height: '450px' }}>
                <div className="row">
                    <div className="col-md-4 col-md-offset-1">

                        <h3 className="py-5 text-start">Professional Skills</h3>

                        <div className="py-2">
                            <p className="text-start"> <Title level={5}>UI/UX Design <span className="px-5">75%</span></Title></p>
                            <Progress percent={75} />
                        </div>
                        <div className="py-2">
                            <p className="text-start">  <Title level={5}>Web Development <span className="px-5">90%</span></Title></p>
                            <Progress percent={90} />
                        </div>
                        <div className="py-2">
                            <p className="text-start"> <Title level={5}>Marketing <span className="px-5">65%</span></Title></p>
                            <Progress percent={65} />
                        </div>

                    </div>
                    <div className="col-md-6">

                    </div>
                </div>
            </div>

            <div className="container" style={{ minHeight: '250px' }}>

                <div className="row no-gutters">

                    <div className="col-md-3 p-5">
                        <div class="main-div">
                            <div class="item1">
                                <ProjectOutlined style={{ fontSize: '100px', color: '#fff' }} />
                            </div>
                            <div class="item2">
                                <Title level={5} style={{ color: '#fff' }} className="ps-2">548</Title>
                                <Title level={5} style={{ color: '#fff' }} className="ps-2">Projects Completed</Title>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 p-5">
                        <div class="main-div">
                            <div class="item1">
                                <ClockCircleOutlined style={{ fontSize: '100px', color: '#fff' }} />
                            </div>
                            <div class="item2">
                                <Title level={5} style={{ color: '#fff' }} className="ps-2">1465</Title>
                                <Title level={5} style={{ color: '#fff' }} className="ps-2">Working Hours</Title>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 p-5">
                        <div class="main-div">
                            <div class="item1">
                                <StarOutlined style={{ fontSize: '100px', color: '#fff' }} />
                            </div>
                            <div class="item2">
                                <Title level={5} style={{ color: '#fff' }} className="ps-2">612</Title>
                                <Title level={5} style={{ color: '#fff' }} className="ps-2">Positive Feedbacks</Title>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 p-5">
                        <div class="main-div">
                            <div class="item1">
                                <HeartOutlined style={{ fontSize: '100px', color: '#fff' }} />
                            </div>
                            <div class="item2">
                                <Title level={5} style={{ color: '#fff' }} className="ps-2">735</Title>
                                <Title level={5} style={{ color: '#fff' }} className="ps-2">Happy Clients</Title>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="container-fluid" style={{ backgroundColor: '#fff' }}>

                <div className="row no-gutters">
                    <div className="col-md-3">
                        <Image.PreviewGroup>
                            <Image
                                width={338}
                                height={338}
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGSEzC2sPD8nPT3QcR8Kqv1ToB1GCMWR036g&usqp=CAU"
                            />
                            <Image
                                width={338}
                                height={338}
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThJTxXvXYzQlHVpGCx2HDTcIw8f0ZqGskTz5iI81boDK4lBjDSRKRaMBzgeoXmT9mSlC4&usqp=CAU"
                            />
                        </Image.PreviewGroup>

                    </div>
                    <div className="col-md-3">
                        <Image.PreviewGroup>
                            <Image
                                width={338}
                                height={338}
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYySahmzY3zd7pUqM_Tdg7P2PPSj_1L8LejxqIG9Tibm7DpZ7ynJZ-jMVwLAe6ET93oxM&usqp=CAU"
                            />
                            <Image
                                width={338}
                                height={338}
                                src="https://static.vecteezy.com/system/resources/previews/000/561/716/non_2x/elegant-blue-car-logo-design-vector.jpg"
                            />
                        </Image.PreviewGroup>
                    </div>
                    <div className="col-md-3">
                        <Image.PreviewGroup>
                            <Image
                                width={338}
                                height={338}
                                src="https://assets-global.website-files.com/5e2701b416b6d176f5007781/5f84fb8dc900df8815dd953f_open-graph.png"
                            />
                            <Image
                                width={338}
                                height={338}
                                src="https://cdn.dribbble.com/users/2774906/screenshots/14434445/media/ed2ff5725e522c1338377e0cb9496c86.png?compress=1&resize=400x300"
                            />
                        </Image.PreviewGroup>
                    </div>
                    <div className="col-md-3">
                        <Image.PreviewGroup>
                            <Image
                                width={338}
                                height={338}
                                src="https://i.pinimg.com/originals/53/42/bd/5342bd4515cce2851b8f006223cfb2f6.png"
                            />
                            <Image
                                width={338}
                                height={338}
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJBGm67x_hgova9U4IcQdd6Peu1MnK3yEu9bP7XxMStsrmaoTLvTTnKk5JyIseej2bdWs&usqp=CAU"
                            />
                        </Image.PreviewGroup>
                    </div>
                </div>

            </div>
        </React.Fragment>
    )
}

export default Work;