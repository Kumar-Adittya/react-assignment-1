import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import JobListing from './components/JobListing'
import JobDetail from './components/JobDetail'
import CreateJob from './components/CreateJob'
import Error from './components/Error'

function Routing() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/show-job" component={JobListing} />
                <Route exact path="/show-job/:id" component={JobDetail} />
                <Route exact path="/job-post" component={CreateJob} />
                <Route component={Error} />
            </Switch>
        </Router>
    )
}

export default Routing