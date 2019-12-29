import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './Home'
import RegisterPage from './Register'
import LoginPage from './Login'

function MainApp() {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route exact path='/register' component={RegisterPage} />
                <Route exact path='/login' component={LoginPage} />
            </Switch>
        </Router>
    )
}

export default MainApp
