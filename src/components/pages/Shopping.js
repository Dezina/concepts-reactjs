import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import './Pages.css';
import "react-big-calendar/lib/css/react-big-calendar.css";
import {
    Nav,
    Tab,
    Col,
    Modal,
    Row,
    Form,
    Container,
  } from "react-bootstrap";

import { Calendar, momentLocalizer } from 'react-big-calendar'
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useHistory } from "react-router-dom";
import Posts from './Posts';
import Comments from './Comments';
import Todos from './Todos';

const localizer = momentLocalizer(moment);

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Shopping = () => {
let history = useHistory();
    const [backup, setBackup] = useState([])
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [category, setCategory] = useState("")

    useEffect(() => {
        getCategories();
    }, [])

    const getCategories = () => {
        axios.get(`https://fakestoreapi.com/products/categories`)
        .then((res) => {
            setCategories(res.data)
        })
        .catch((err) => {
            console.log("error", err)
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(category==="Select products category" || category==="") {
            alert("Please enter the category to search")
        }
        else if(category!==""){
            getProducts();
        }
    }
    const getProducts = () => {
        axios.get(`https://fakestoreapi.com/products`)
        .then((res) => {
            setBackup(res.data)
            let filteredProducts = (res.data).filter(items => items.category === category)
            setProducts(filteredProducts)
        })
        .catch((err) => {
            console.log("error", err)
        })
    }
    const productDetails = (productId) => {
            history.push({
                pathname: '/Products',
                search: '?query=products',
                state: productId
            });
    }

        return (
        <React.Fragment>
            <section className="admin">
           
            <div className="container">

        <div className="row">
        <div className="col-md-12 text-center">
            <h3 className="text-white">Select categories</h3>
            <div className="mx-auto">
            <Grid container spacing={2}>
            {
                categories.map(cat => (
                <Grid item xs={3}>
                <Item style={{backgroundColor: "green", color: "#fff"}}>
                {cat}
                </Item>
                </Grid>
                ))
            }
            </Grid>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Item style={{backgroundColor: "yellow"}}>
                    <input type="text"
                    placeholder="Search product categories"
                    name= "search"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    />
                    &nbsp;&nbsp;
                    <input type="submit" value="Find products"/>
                    </Item>
                </Grid>
                </Grid>
            </form> 
           
            <Grid container spacing={2}>
                        {
                          products && products.length > 0 ? (
                            products.map((item) => (
                                <Grid item xs={3} 
                                style={{padding: "30px", cursor: "pointer"}} 
                                onClick={()=>productDetails(item.id)}>
                                <div className='text-center' style={{height: "85px"}}>{item.title}</div>
                                <img src={item.image} width="120px" height="120px" style={{border: "1px ridge gray"}} />
                                </Grid>
                            ))
                          ):
                          (
                              ""
                          )
                        }
            </Grid>     
            </div>
            </div>
        
        </div>
        </div>
        </section>

</React.Fragment>


)
}

export default Shopping