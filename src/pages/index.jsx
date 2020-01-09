import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './Home'
import RegisterPage from './Register'
import LoginPage from './Login'
import Header from '../components/Header'
import UserBlogsPage from './user/UserBlogs'

function MainApp() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route exact path='/user/blogs' component={UserBlogsPage}/>
                <Route exact path='/register' component={RegisterPage} />
                <Route exact path='/login' component={LoginPage} />
            </Switch>
        </Router>
    )
}

export default MainApp
