import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './MenuBar.css';
import Cart from '../pages/Cart';

export default class MenuBar extends Component {
    
    constructor(props) {
        super(props);
    }
    logout() {
        localStorage.removeItem('user');
        window.location = 'http://localhost:3000';
    }

    render() {
        console.log("this.props.count", this.props.count)
        let user;
        let logout;
        let login;
        let signup;

        if (localStorage.getItem('user')) {
            user = JSON.parse(localStorage.getItem('user')).data;
            console.log(user);
            logout = <li>
                <Link onClick={this.logout}>
                    {/* <span className="label label-primary">{user.email}&nbsp;&nbsp;</span> */}
                    Logout</Link>
            </li>
        }
        else {
            logout = "";
            login = <li><a href="/Login">Login</a></li>
            signup = <li><a href="/Signup">Signup</a></li>
        }
        return (

            <nav className="header">
                <div className="nav-wrapper">
                    <a className="logo" href='/'> <img src={logo} alt="" width="50px" heig5t="50px" /></a>
                    <input className="menu-btn" type="checkbox" id="menu-btn" />
                    <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>

                    <ul className="menu">
                        <li><a href='/Cart'><Cart count={this.props.count}/></a></li>
                        <li><a href="/Shopping">Shopping</a></li>
                        <li><a href="/">Home</a></li>
                        <li><a href="/AboutUs">About</a></li>
                        <li><a href="http://localhost:3000/#work">Work</a></li>
                        <li><a href="http://localhost:3000/#process">Process</a></li>
                        <li><a href="http://localhost:3000/#services">Services</a></li>
                        <li><a href="http://localhost:3000/#testimonials">Testimonials</a></li>
                        <li><a href="/Calender">Calender</a></li>
                        <li><a href="/React">React</a></li>
                        <li><a href="/ContactUs">Contact</a></li>
                        
                        {signup}
                        {login}
                        {logout}
                    </ul>
                </div>
            </nav>

        );
    }
}
