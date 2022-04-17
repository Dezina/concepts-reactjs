import { Card } from 'antd';
import {
    SketchOutlined, RadarChartOutlined, MobileOutlined, PlayCircleOutlined,
    GlobalOutlined, StarOutlined, AntDesignOutlined, DropboxOutlined
} from '@ant-design/icons';
import "antd/dist/antd.css";

import React from 'react'
import './Pages.css';

const gridStyle = {
    width: '25%',
    textAlign: 'center',
};

const { Meta } = Card;

const Services = () => {
    return (
        <React.Fragment>

            <div className="container-fluid bg-light pt-5">
                <div className="row">
                    <div className="col-md-12 col-sm-4">

                        <Card>
                            <Card.Grid style={gridStyle}>

                                <SketchOutlined style={{ fontSize: '50px', color: 'gray' }} />
                                <Meta title="UI/UX Design" description=" Totam possimus porro est architecto expedita eveniet ipsa rem autem cum iste dignissimos, qui necessitatibus sunt, maxime voluptatibus quas! Ratione, ipsum cum?" />
                            </Card.Grid>
                            <Card.Grid style={gridStyle}>
                                <RadarChartOutlined style={{ fontSize: '50px', color: 'gray' }} />
                                <Meta title="Web Development" description=" Totam possimus porro est architecto expedita eveniet ipsa rem autem cum iste dignissimos, qui necessitatibus sunt, maxime voluptatibus quas! Ratione, ipsum cum?" /></Card.Grid>
                            <Card.Grid style={gridStyle}>
                                <MobileOutlined style={{ fontSize: '50px', color: 'gray' }} />
                                <Meta title="App/Mobile" description=" Totam possimus porro est architecto expedita eveniet ipsa rem autem cum iste dignissimos, qui necessitatibus sunt, maxime voluptatibus quas! Ratione, ipsum cum?" /></Card.Grid>
                            <Card.Grid style={gridStyle}>
                                <PlayCircleOutlined style={{ fontSize: '50px', color: 'gray' }} />
                                <Meta title="Game Design" description=" Totam possimus porro est architecto expedita eveniet ipsa rem autem cum iste dignissimos, qui necessitatibus sunt, maxime voluptatibus quas! Ratione, ipsum cum?" /></Card.Grid>

                            <Card.Grid style={gridStyle}>
                                <GlobalOutlined style={{ fontSize: '50px', color: 'gray' }} />
                                <Meta title="SEO" description=" Totam possimus porro est architecto expedita eveniet ipsa rem autem cum iste dignissimos, qui necessitatibus sunt, maxime voluptatibus quas! Ratione, ipsum cum?" />
                            </Card.Grid>
                            <Card.Grid style={gridStyle}>
                                <StarOutlined style={{ fontSize: '50px', color: 'gray' }} />
                                <Meta title="Photography" description=" Totam possimus porro est architecto expedita eveniet ipsa rem autem cum iste dignissimos, qui necessitatibus sunt, maxime voluptatibus quas! Ratione, ipsum cum?" />
                            </Card.Grid>
                            <Card.Grid style={gridStyle}>
                                <AntDesignOutlined style={{ fontSize: '50px', color: 'gray' }} />
                                <Meta title="Graphic Design" description=" Totam possimus porro est architecto expedita eveniet ipsa rem autem cum iste dignissimos, qui necessitatibus sunt, maxime voluptatibus quas! Ratione, ipsum cum?" />
                            </Card.Grid>
                            <Card.Grid style={gridStyle}>
                                <DropboxOutlined style={{ fontSize: '50px', color: 'gray' }} />
                                <Meta title="Illustrations" description=" Totam possimus porro est architecto expedita eveniet ipsa rem autem cum iste dignissimos, qui necessitatibus sunt, maxime voluptatibus quas! Ratione, ipsum cum?" />
                            </Card.Grid>
                        </Card>

                    </div>

                </div>
            </div>
        </React.Fragment>
    )
}

export default Services;