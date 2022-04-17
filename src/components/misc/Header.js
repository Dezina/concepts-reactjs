import React, {useEffect, useState} from 'react';
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';
import './Header.css';
import styles from './Home.module.css'; // Import css modules stylesheet as styles

const Header = () => {

    const [users, setUsers] = useState([])
    let history = new useHistory()

    useEffect(() => {
        getuserList();
    }, [])

    const getuserList = () => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then((res) => {
            setUsers(res.data)
        });
    };

    const userdetails = (id) => {
        history.push(`/UserDashboard/${id}`)
    }

    console.log("users", users)

    return (
        <React.Fragment>
            <header 
            // className="bg-image"
            >
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                        {/* <h3>User list</h3> */}
                        <div className={`${styles.geeks}`}>

                        <div className="panel panel-default" style={{ position: 'relative', borderRadius: '30px', width: '450px', zIndex: '2' }}>
                            <div className="panel-heading" style={{ padding: '15px', borderRadius: '50px' }}><h4>Select user account</h4></div>
                            <div className={`panel-body ${styles.height}`}>
                                {users.map(user => {
                                    return (
                                        <Link 
                                        to={{
                                            pathname: `/User/${user.id}`
                                        }}
                                        >
                                            <div className="card ps-5">
                                                <p>{user.name}</p>
                                                <hr />
                                            </div>
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                        </div>
                        <div className="col-md-6">
                            <div className="bg-container">
                                <h3>We Design and Develop</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consequatur perspiciatis quis pariatur, officiis nam fugiat? Harum suscipit a numquam qui quos delectus, excepturi quidem placeat dolor culpa amet voluptas!</p>
                                <p className="text-center"> <Link to="/ContactUs" className="button">Contact Us</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </React.Fragment>
    )
}

export default Header;