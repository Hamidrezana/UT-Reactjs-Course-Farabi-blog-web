import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import HomePage from './Home'
import RegisterPage from './Register'
import LoginPage from './Login'
import Header from '../components/Header'
import UserBlogsPage from './user/UserBlogs'
import PrivateRoute from '../middlewares/PrivateRoute'
import IsAuthenticated from '../middlewares/IsAuthenticated'
import BlogPage from './Blog'

function MainApp() {
    return (
        <Router>
            <Header />
            <Switch>
                <PrivateRoute exact path='/' component={HomePage}/>
                <PrivateRoute exact path='/user/blogs' component={UserBlogsPage}/>
                <PrivateRoute exact path='/blog/:id' component={BlogPage}/>
                <IsAuthenticated exact path='/register' component={RegisterPage} />
                <IsAuthenticated exact path='/login' component={LoginPage} />
            </Switch>
        </Router>
    )
}

export default MainApp
