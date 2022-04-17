import React, { Component } from 'react';
import "../../components/navigations/MenuBar.css";

const styleObject = {
    cart: {
        color: "blue",
        backgroundColor: "yellow",
        float: "right",
        padding: "5px",
        borderRadius: "10px",
        width: "60px"
    }
}
const Cart = (props) => {
        return (
            <div style={styleObject.cart}>
            Cart {props.count}
            </div>
             
        );
}

export default Cart;
