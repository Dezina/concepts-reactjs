import axios from 'axios';

import React, { Component } from 'react';
import './Pages.css';



export default class ContactUs extends Component {

    // ==================== STATES & FUNCTIONS ====================
    constructor(props) {
        super(props)
        this.state = {

            tweets: [],

            name: '',
            username: '',
            password: '',
            userimage: 'https://res.cloudinary.com/practicaldev/image/fetch/s--y7yA7Q_4--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/364578/7e10fbaf-2b95-444a-8425-0fc5b8d91187.jpg',
            tweet: '',
            tweetimg: ''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount() {

        axios.get(`https://react999.herokuapp.com/twitter/tweets`)
            .then((res) => {
                const tweets = res.data;
                this.setState({
                    tweets,

                });
                console.log(tweets);
            })
            .catch((err) => console.log(err));
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const body = {
            name: this.state.name,
            username: this.state.username,
            password: this.state.password,
            userimage: this.state.userimage,
            tweet: this.state.tweet,
            tweetimg: this.state.tweetimg
        };

        axios.post(
            `https://react999.herokuapp.com/twitter/add`,
            body
        )
            .then((result) => {
                alert('Thankyou, we received your message.');
                console.log(result);

            })
            .catch((err) => console.log(err));
    }



    render() {
        return (
            <React.Fragment>
                <section style={{ backgroundColor: "#fff" }}>
                    <div className="container pt-5 bg-light">
                        <div className="row">
                            <div className="col-md-6">
                                <h3 className="ps-5">Contact Info</h3>

                                <p className="text-muted px-5 py-3 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sit assumenda doloremque numquam vitae deserunt. Non minima eius asperiores architecto quo, vitae eum soluta reiciendis corporis doloribus adipisci est sunt?</p>
                                <p className="text-start ps-5"><strong>Address:</strong>&nbsp;&nbsp;&nbsp;<span className="text-muted">New building, Goa, India</span></p>
                                <p className="text-start ps-5"><strong>Phone:</strong>&nbsp;&nbsp;&nbsp;<span className="text-muted">0832-234567</span></p>
                                <p className="text-start ps-5"><strong>Email:</strong>&nbsp;&nbsp;&nbsp;<span className="text-muted">dez@gmail.com</span></p>
                                <p className="text-start ps-5"><strong>Fax:</strong>&nbsp;&nbsp;&nbsp;<span className="text-muted">+1-212-9876543</span></p>
                            </div>

                            {/* Message */}
                            <div className="col-md-6">

                                <form method="post" onSubmit={this.onSubmit}>

                                    <div className="form-group col-md-12 mb-2">
                                        <input
                                            name="name"
                                            placeholder="Your name"
                                            className="form-control"
                                            value={this.state.name}
                                            onChange={this.onChange}
                                            style={{ fontSize: '20px' }}
                                        />
                                    </div>
                                    <div className="form-group col-md-12 mb-2">
                                        <input
                                            name="username"
                                            placeholder="Your email"
                                            className="form-control"
                                            value={this.state.username}
                                            onChange={this.onChange}
                                            style={{ fontSize: '20px' }}
                                        />
                                    </div>
                                    <div className="form-group col-md-12 mb-2">
                                        <textarea
                                            name="tweet"
                                            placeholder="Your comment"
                                            className="form-control"
                                            value={this.state.tweet}
                                            onChange={this.onChange}
                                            rows={3}
                                            cols={25}
                                            style={{ fontSize: '20px' }}
                                        />
                                    </div>

                                    <div className="form-group col-md-12">
                                        <hr />
                                        <input
                                            type="submit"
                                            value="Send message"
                                            className="contact"
                                        />
                                    </div>

                                </form>
                            </div>

                            <div className="col-md-8 col-md-offset-2">
                                <iframe style={{ border: "1px solid black;" }} src="https://static.view.g.imapbuilder.net/?m=80904&s=e9185acbbc6f7270c3321ed8b1ce2bf6" width="100%" height="350px" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>

                            </div>

                        </div>
                    </div>

                </section>
            </React.Fragment >
        );
    }
}
