import React, {useState, useEffect} from "react";
import axios from "axios";
import {
    Col,
    Row,
    Container,
  } from "react-bootstrap";
import Card from 'react-bootstrap/Card'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HelpIcon from '@mui/icons-material/Help';

const style = {
    title: {
        color: "blue",
        font: "15px",
    },
    status: {
        color: "#000",
        float: "right",
        border: "1px solid green",
        backgroundColor: "lightblue"
    }
}

const Todos = (props) => {

const [todos, setTodos] = useState([])

const userId = props.userId;
useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
    .then((res) => {
        setTodos(res.data)
    })
}, [])

    return (
    <div>
      <Container>
        <Row>
        <Col md={12}>
        {
            todos && todos.map((todo) => (
            <div>
            <Card style={{backgroundColor: "#fff"}}>
                <Card.Body>
                <span style={style.title}>{todo.title}</span>
               {
                   todo.completed === true?(
                    <span style={style.status}>Status: <CheckCircleIcon style={{color: "blue"}}/></span> 
                   ): (
                    <span style={style.status}>Status: <HelpIcon style={{color: "red"}} /></span> 
                   )
               }
                </Card.Body>
            </Card>
            </div>
            ))
        }
        </Col>
        </Row>
        </Container>
    </div>
    )
}

export default Todos;