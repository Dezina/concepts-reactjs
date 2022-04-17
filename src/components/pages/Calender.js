import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import './Pages.css';
import "react-big-calendar/lib/css/react-big-calendar.css";

import { Calendar, momentLocalizer } from 'react-big-calendar'
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import React1 from "./React1";

const localizer = momentLocalizer(moment);

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Calender = () => {

    const [holidays, setHolidays] = useState([])
    const [backup, setBackup] = useState([])
    const [date, setDate] = useState(new Date())
    const [search, setSearch] = useState("")
    const [user, setUser] = useState({
        search: "",
        about: "",
        level: "masters",
        technology: "java",
        plans: false
      });
    const [countries, setCountries] = useState([])
    const [countryDetails, setCountryDetails] = useState([])
    //console.log("countries", countries)
    //console.log("holidays", holidays)
    console.log("countryDetails", countryDetails)

    useEffect(() => {
        getHolidays();
        getCovidData();
    }, [])

    const getCovidData = () => {
        axios.get(`https://covid19.mathdro.id/api/confirmed`)
        .then((res) => {
            var covidData = res.data
            console.log("covidData", covidData)
            const covidArray = []
            for(var i=0; i<10; i++) {
                covidArray.push(covidData[i])
            }
            setCountries(covidArray)
        })
        .catch((error)=> {
            console.log("error")
        })
    }
    const getHolidays = () => {
        axios.get(`https://www.gov.uk/bank-holidays.json`)
        .then((res) => {
            //console.log("res", res.data)
            var responsedata = res.data
            let info = []
            Object.entries(responsedata).map(([key, value]) => {
                //console.log("value.events", value.events)
                value.events.map((dt) => {
                    //console.log("value.events.date", new Date(dt.date))
                    info.push({
                        title: `${dt.title}`,
                        start: new Date(dt.date),
                        end: new Date(dt.date),
                    })
                })
            })
            //console.log("info", info)
            setBackup(info)
            setHolidays(info)
            //setHolidays(responsedata)
        })
        .catch(error => {
            console.log("error", error)
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("handleSubmit")
        console.log("date, search", date, search)
        console.log("user", user)
        if(user.search !== "") {
            let filterCalender = backup.filter((data) => data.title == user.search)
            console.log("filterCalender", filterCalender)
            setHolidays(filterCalender)
        }
        else if(user.search === "") {
            setHolidays(backup)
        }
        setSearch("")
    }
    function handleChange(evt) {
        const value = evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
        setUser({
          ...user,
          [evt.target.name]: value
        });
      }

      const sendProps = (ct) => {
          const countryName = ct;
          console.log("countryName", countryName)
          const findCountry = []
          countries.map((ct) => {
              if(ct.countryRegion === countryName) {
                findCountry.push(ct)
              }
          })
          setCountryDetails(findCountry)
          //console.log("findCountry", countryDetails)
      }

        return (
        <React.Fragment>
            <section className="admin">
           
            <div className="container">

        <div className="row">
        <div className="col-md-12 text-center">
            <h3 className="text-white">Holidays</h3>
            <div className="mx-auto">
            <Grid container spacing={2}>
                        {
                            countries.map((covid) => (
                                <Grid item xs={1}>
                                <Button onClick={()=>sendProps(covid.countryRegion)}>{covid.countryRegion}</Button>
                                </Grid>
                            
                            ))
                        }
            </Grid>
            <form 
            onSubmit={handleSubmit}
            >
                <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Item>
                    <label>
                    <input type="text"
                    placeholder="Search calender title"
                    name= "search"
                    value={user.search}
                    onChange={handleChange}
                    //onChange={(e) => setSearch(e.target.value)}
                    />
                    </label>
                    </Item>
                </Grid>
                <Grid item xs={3}>
                    <Item>
                    <select
                    //multiple={true}
                    name="technology"
                    onChange={handleChange}
                    value={user.technology}>
                    <option value="java">Java</option>
                    <option value="dotnet">Dot Net</option>
                    <option value="python">Python</option>
                    <option value="cpp">C++</option>
                </select>
                    </Item>
                </Grid>
                <Grid item xs={3}>
                    <Item>
                    <label>
                        Bachelors
                        <input
                        type="radio"
                        name="level"
                        value="bachelors"
                        checked={true}
                        //checked={user.level === "bachelors"}
                        onChange={handleChange}
                        />
                    </label>
                    <label>
                        Masters
                        <input
                        type="radio"
                        name="level"
                        value="masters"
                        //checked={user.level === "masters"}
                        onChange={handleChange}
                        />
                    </label>
                    </Item>
                </Grid>
                <Grid item xs={3}>
                    <Item>
                    <label>Any plans?
                    <input
                        type="checkbox"
                        name="plans"
                        checked={user.plans}
                        onChange={handleChange}
                    />
                    </label>
                    </Item>
                </Grid>
                <Grid item xs={12}>
                    <Item>
                    <input type="submit" value="Submit"/>
                    </Item>
                </Grid>
                </Grid>
            
            </form>
            <Calendar
            events={holidays}
            localizer={localizer}
            step={18}
            defaultDate={new Date()}
            style={{ height: 500 }}
            />
            <p className="text-white px-5 py-3 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sit assumenda doloremque numquam vitae deserunt. Non minima eius asperiores architecto quo, vitae eum soluta reiciendis corporis doloribus adipisci est sunt?</p>
                       
            </div>
            </div>
            {/* <React1 
            details={countryDetails}
            /> */}
        </div>
        </div>
        </section>

</React.Fragment>


)
}

export default Calender