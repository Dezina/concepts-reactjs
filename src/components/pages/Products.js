import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Pages.css';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useLocation } from "react-router-dom";
import "../../components/navigations/MenuBar.css";
import MenuBar from "../navigations/MenuBar"

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Products = (props) => {
    let location = useLocation();
    const [backup, setBackup] = useState([])
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = () => {
        let id = props.location.state;
        axios.get(`https://fakestoreapi.com/products`)
        .then((res) => {
            console.log("res.data products", res.data)
            setBackup(res.data)
            let filteredProducts = (res.data).filter(items => items.id === id)
            console.log("filteredProducts", filteredProducts)
            setProducts(filteredProducts)
        })
        .catch((err) => {
            console.log("error", err)
        })
    }

    const addToCart = (id) => {
        console.log("addToCart")
        setCart([...cart, id])
    }

        return (
        <React.Fragment>
           <MenuBar count={cart.length}/>
            <section className="admin">
            <div className="container">

        <div className="row">
        <div className="col-md-12 text-center">
            <h3 className="text-white">Products</h3>
            <div className="mx-auto">
            
                        {
                            products.map((item) => (
                                <Grid container spacing={2}>
                                <Grid item xs={6} style={{padding: "30px"}}>
                                <div className='text-center' style={{height: "65px"}}>
                                    <img src={item.image} width="400px" height="400px" style={{border: "1px ridge gray", padding: "10px"}} />
                                </div>
                                
                                <br/>
                                </Grid>
                                 <Grid item xs={6} style={{padding: "30px"}}>
                                 <div className='text-center'>
                                    <Typography>{item.title}</Typography>
                                    <hr/>
                                    <div className='m-3' style={{backgroundColor: "lightblue"}}>Description: {item.description}</div>
                                    <div style={{backgroundColor: "yellow"}}><span className='text-left pe-5'>Price: Rs. {item.price}</span>
                                    <span className='text-right m-2'>Rating: {item.rating.rate}</span></div>
                                </div>
                                <Button 
                                className='mt-3'
                                variant="contained"
                                size="small"
                                onClick={()=>addToCart(item.id)}
                                >Add to cart</Button>
                                 </Grid>      
                                 </Grid> 
                            ))
                        }      
            </div>
            </div>
     
        </div>
        </div>
        
        </section>

</React.Fragment>


)
}

export default Products