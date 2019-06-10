import React, {Component, Fragment} from 'react'
// import LinkList from './link/LinkList'
// import CreateLink from './link/CreateLink'
import Header from './Header'
// import {Switch, Route, Redirect} from 'react-router-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import Login from './login'
// import Error from './error'
// import Search from './search'
import Banner from "./Header/Banner";
import Footer from "./Footer";
// import {AUTH_TOKEN} from "../constants";
import Competition from "./competition";
// import CompetitionOverview from "./competition/Overview";
// import Organisation from "./application/Organisation"

//const authToken = localStorage.getItem(AUTH_TOKEN);


class App extends Component {

    state = {error: ""}

    handleError(error) {
        this.setState({error: 'error'})
    }

    render() {
        return (
            <Fragment>
                <Router>
                <Header/>
                <div className="govuk-width-container">
                    <Banner/>
                    <main className="govuk-main-wrapper" id="main-content" role="main">
                        <Switch>
                            <Route exact path="/" component={Competition}/>
                        </Switch>
                    </main>
                </div>
                <Footer/>
                </Router>
            </Fragment>
        )
    }
}

export default App
