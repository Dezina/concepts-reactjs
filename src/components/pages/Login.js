import React, { Component } from 'react';
import axios from 'axios';
import './Pages.css';

export default class Login extends Component {
    constructor(props) {
        super(props)
        const token = localStorage.getItem("token")
        let loggedIn = true
        if (token == null) {
            loggedIn = false
        }

        this.state = {
            email: '',
            password: ''
        }

        this.onChange = this.onChange.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitForm(e) {
        e.preventDefault();
        const { email, password } = this.state

        // let user = localStorage.getItem(email);

        console.log(this.state);
        axios({
            method: 'post',
            url: `http://localhost:5000/users/login`,
            headers: {},
            data: {
                email: email, // This is the body part
                password: password
            }
        }).then(res => {
            console.log(res.data);
            ///localStorage.getItem(email);
            localStorage.setItem('user', JSON.stringify(res.data));
            window.location = 'http://localhost:3000/Jobs';
        }).catch(err => {
            console.log(err);
        })

    }

    render() {

        return (
            <React.Fragment>
                <section className="login">
                    <div className="container">
                        <div className="row">

                            <div className="col-md-6 col-md-offset-3">
                                <h3 className="text-center text-muted p-5">Login</h3>
                                <form onSubmit={this.submitForm}>

                                    <div className="form-group col-md-12 p-2">
                                        <label htmlFor="">Username</label>
                                        <input
                                            type="text"
                                            name="email"
                                            id="email"
                                            value={this.state.email}
                                            onChange={this.onChange}
                                            required
                                            placeholder="Email"
                                            className="form-control"
                                        />
                                    </div>

                                    <div className="form-group col-md-12 p-2">
                                        <label htmlFor="">Password</label>
                                        <input
                                            type="password"
                                            name="password"
                                            id="password"
                                            value={this.state.password}
                                            onChange={this.onChange}
                                            required
                                            placeholder="Password"
                                            className="form-control"
                                        />
                                    </div>

                                    <div className="form-group col-md-12 p-2">
                                        <input type="submit" className="btn btn-success" value="Login" />
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </section>

            </React.Fragment>
        );
    }
}
