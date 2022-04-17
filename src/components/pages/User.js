import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Pages.css';
import "react-big-calendar/lib/css/react-big-calendar.css";
import {
    Nav,
    Tab,
    Col,
    Row,
    Container,
  } from "react-bootstrap";
import Card from 'react-bootstrap/Card'
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Posts from './Posts';
import Comments from './Comments';
import Todos from './Todos';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const style = {
    tab: {
        border: "2px ridge #fff",
        margin: "5px",
        color: "#000",
        font: "18px bold",
        backgroundColor: "yellow"
    }
}

const User = (props) => {

    const [profile, setProfile] = useState([])
    const [show, setShow] = useState(true)
    const userId = props.match.params.id

    useEffect(() => {
        getUserDetails();
    }, [])

    const getUserDetails = () => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((res) => {
            setProfile(res.data)
        })
        .catch((err) => {
            console.log("error", err)
        })
    }

        return (
        <React.Fragment>
        <section className="admin">
        <div className="container">
        <div className="row">
        <div className='col-md-12'>
        <Grid container spacing={2}>
        <Grid item xs={12}>
        <Item style={{backgroundColor: "#7353ff"}}>

        <Tab.Container id="left-tabs-example" defaultActiveKey="profile">
        <Row>
            <Col sm={3}>
            <Nav variant="pills" className="flex-column">
                <Nav.Item style={style.tab}>
                <Nav.Link eventKey="profile">Profile</Nav.Link>
                </Nav.Item>
                <Nav.Item style={style.tab}>
                <Nav.Link eventKey="posts">Posts</Nav.Link>
                </Nav.Item>
                <Nav.Item style={style.tab}>
                <Nav.Link eventKey="comments" disabled>Comments</Nav.Link>
                </Nav.Item>
                <Nav.Item style={style.tab}>
                <Nav.Link eventKey="todos">Todos</Nav.Link>
                </Nav.Item>
                <Nav.Item style={style.tab}>
                <Nav.Link eventKey="likes">Likes</Nav.Link>
                </Nav.Item>
                <Nav.Item style={style.tab}>
                <Nav.Link eventKey="notifications">Notifications</Nav.Link>
                </Nav.Item>
                <Nav.Item style={style.tab}>
                <Nav.Link eventKey="settings">Settings</Nav.Link>
                </Nav.Item>
            </Nav>
            </Col>
            <Col sm={9}>
            <Tab.Content>
                <Tab.Pane eventKey="profile">
                  <Container>
                  <Row>
                    <Col md={6}>
                    <Card style={{ backgroundColor: '#fff' }}>
                    <Card.Body>
                        <Card.Title>{profile.name}</Card.Title>
                        <Card.Text>
                        <span>Username: {profile.username}</span><br/>
                        <span>Email: {profile.email}</span><br/>
                        <span>Phone No.: {profile.phone}</span>
                        </Card.Text>
                        <Button variant="primary" disabled>Website - {profile.website}</Button>
                    </Card.Body>
                    </Card>
                    </Col>
                    <Col md={6}>
                    <Card style={{ backgroundColor: '#fff' }}>
                    <Card.Body>
                    <Card.Title>Address</Card.Title>
                        {
                            profile && profile.address && profile.company? (
                            <Card.Text>
                            <span>Suite: {profile.address.suite}</span><br/>
                            <span>Street: {profile.address.street}</span><br/>
                            <span>City: {profile.address.city}</span><br/>
                            <span>Zipcode: {profile.address.zipcode}</span>
                            </Card.Text>
                            ): (
                            ""
                            )
                        }
                        {
                            profile && profile.company? (
                            <Button variant="primary" disabled>Work - {profile.company.name}</Button>
                            ):(
                            ""
                            )
                        }
                    </Card.Body>
                    </Card>
                    </Col>
                    </Row>
                    
                </Container>
                </Tab.Pane>
                <Tab.Pane eventKey="posts">
                  <Posts userId={userId} />
                </Tab.Pane>
                <Tab.Pane eventKey="comments">
                  <Comments userId={userId} />
                </Tab.Pane>
                <Tab.Pane eventKey="todos">
                  <Todos userId={userId} />
                </Tab.Pane>
            </Tab.Content>
            </Col>
        </Row>
        </Tab.Container>
        </Item>
        </Grid>
        </Grid>
        </div>
        
        </div>
        </div>
        </section>

</React.Fragment>
)
}

export default User;