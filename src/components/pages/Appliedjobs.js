import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Pages.css';


function Appliedjobs() {

    const [jobs, setJobs] = useState();
    const [search, setSearch] = useState('');
    const [results, setResults] = useState('');

    useEffect(() => {

        displayjobs();

    }, [])

    const displayjobs = (e) => {
        let user;
        user = JSON.parse(localStorage.getItem('user')).data;

        var body = {
            email: user.email
        }

        axios.post(`http://localhost:5000/jobsapplied/findjobs`, body)
            .then(
                (response) => {
                    const alljobs = response.data;
                    setJobs(alljobs);
                    setResults(alljobs);
                    console.log(alljobs);
                }
            )
            .catch(error => console.log(`Error: ${error}`));
    };


    const Search = (evt) => {
        evt.preventDefault();
        console.log(jobs);
        let searchfield = search.toLowerCase();
        var searchresults = jobs.filter(job => job.company.toLowerCase() == searchfield || job.designation.toLowerCase() == searchfield || job.location.toLowerCase() == searchfield)
        console.log(search);
        console.log(searchresults);

        setResults(
            searchresults
        )
    }

    return (
        <React.Fragment>
            <section className="admin">
                <div className="container">

                    <div className="row">
                        <div className="col-md-4 jumbotron text-center">

                            <form onSubmit={Search}>

                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control" id="floatingInput"
                                        value={search}
                                        onChange={e => setSearch(e.target.value)}
                                    />
                                    <label for="floatingInput">Search using designation, company, location</label>
                                </div>
                                <button type="submit" class="btn btn-primary float-start">Search</button>
                            </form>
                            <br /><br />
                            <div class="d-grid gap-2 col-12">
                                <Link to="/Appliedjobs"
                                    style={{
                                        fontFamily: "inherit",

                                    }}
                                    className="btn btn-danger float-start mt-3"> Applied jobs</Link>
                                <button class="btn btn-danger" type="button">Messages</button>
                                <button class="btn btn-danger" type="button">Notifications</button>
                                <Link to="/Jobs"
                                    style={{
                                        fontFamily: "inherit",

                                    }}
                                    className="btn btn-danger float-start">Jobs</Link>
                            </div>


                        </div>
                        <div className="col-md-8 jumbotron text-center">

                            <h3>Jobs Applied</h3>

                            {

                                results && results.map((row, index) => (

                                    <details key={index}>
                                        <summary><p className="text-center fw-bold">{row.designation}
                                            <i className="fw-light ps-5">Location: </i><span className="ps-2 fw-bold">{row.location}</span>
                                        </p>
                                            <p className="text-center">Company: {row.company}</p>
                                        </summary>
                                        <div>
                                            <p>Description: {row.description}</p>

                                        </div>
                                    </details>
                                ))
                            }

                        </div>
                    </div>

                </div>
            </section>
        </React.Fragment>
    )
}

export default Appliedjobs
