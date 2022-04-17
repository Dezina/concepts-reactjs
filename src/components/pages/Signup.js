import React, { Component } from 'react';
import axios from 'axios';
import './Pages.css';

export default class Signup extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            phone: ''
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
        const { email, password, phone } = this.state
        console.log(this.state);
        axios({
            method: 'post',
            url: `http://localhost:5000/users/signup`,
            // url: `https://mongodbrestapi01.herokuapp.com/rest/api/users/signup`,
            headers: {},
            data: {
                email: email,
                password: password,
                phone: phone,

            }
        }).then(res => {
            console.log('check');
            console.log(res.data);
            //localStorage.getItem(username);
            localStorage.setItem('user', JSON.stringify(res.data));
            window.location = 'http://localhost:3000/Jobs';
        }).catch(err => {
            console.log('This is error');
            console.log(err);
        })

    }

    render() {
        return (
            <React.Fragment>
                <section className="signup">
                    <div className="container">

                        <div className="row">
                            <div className="col-md-6 col-md-offset-3">
                                <h3 className="text-center text-muted p-5">Signup</h3>
                                <form onSubmit={this.submitForm}>

                                    <div className="form-group col-md-12">
                                        <label htmlFor="">Email</label>
                                        <input
                                            type="text"
                                            name="email"
                                            id="email"
                                            value={this.state.email}
                                            onChange={this.onChange}
                                            required
                                            className="form-control"
                                        />
                                    </div>

                                    <div className="form-group col-md-12">
                                        <label htmlFor="">Password</label>
                                        <input
                                            type="password"
                                            name="password"
                                            id="password"
                                            value={this.state.password}
                                            onChange={this.onChange}
                                            required
                                            className="form-control"
                                        />
                                    </div>

                                    <div className="form-group col-md-12">
                                        <label htmlFor="">Phone</label>
                                        <input
                                            type="text"
                                            name="phone"
                                            id="phone"
                                            value={this.state.phone}
                                            onChange={this.onChange}
                                            required
                                            className="form-control"
                                        />
                                    </div>

                                    <div className="form-group">

                                        <input type="submit" className="btn btn-success pull-right" value="Signup" />

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
