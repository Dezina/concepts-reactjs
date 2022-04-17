import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './components/pages/Home'
import AboutUs from './components/pages/AboutUs'
import ContactUs from './components/pages/ContactUs'
import Login from './components/pages/Login'
import Jobs from './components/pages/Jobs'
import Signup from './components/pages/Signup'
import Appliedjobs from './components/pages/Appliedjobs'
import Calender from './components/pages/Calender'
import React1 from './components/pages/React1'
import Shopping from './components/pages/Shopping'
import Products from './components/pages/Products'
import Cart from './components/pages/Cart'
import Posts from './components/pages/Posts'
import Comments from './components/pages/Comments'
import Todos from './components/pages/Todos'
import User from './components/pages/User'
import './App.css';

function App() {
  return (
    <div className="body-wrap">
      <Router>
        <Layout>
          <Switch>
            
            <Route path={'/User/:id'} component={User}></Route>
            <Route path={'/AboutUs'} component={AboutUs}></Route>
            <Route path={'/ContactUs'} component={ContactUs}></Route>
            <Route path={'/Login'} component={Login}></Route>
            <Route path={'/Signup'} component={Signup}></Route>
            <Route path={'/Jobs'} component={Jobs}></Route>
            <Route path={'/Appliedjobs'} component={Appliedjobs}></Route>
            <Route path={'/Calender'} component={Calender}></Route>
            <Route path={'/React'} component={React1}></Route>
            <Route path={'/Shopping'} component={Shopping}></Route>
            <Route path={'/Products'} component={Products}></Route>
            <Route path={'/Cart'} component={Cart}></Route>
            <Route path={'/Posts'} component={Posts}></Route>
            <Route path={'/Comments'} component={Comments}></Route>
            <Route path={'/Todos'} component={Todos}></Route>
            <Route path={'/'} component={Home}></Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
