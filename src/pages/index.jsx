import React, {useEffect} from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import HomePage from './Home'
import RegisterPage from './Register'
import LoginPage from './Login'
import Header from '../components/Header'
import UserBlogsPage from './user/UserBlogs'
import PrivateRoute from '../middlewares/PrivateRoute'
import IsAuthenticated from '../middlewares/IsAuthenticated'
import BlogPage from './Blog'
import { connect } from 'react-redux'
import { getBlogs, getUserBlogs } from '../apis'
import { changeAllBlogs, changeUserBlogs, changeAllBlogsLoading, changeUserBlogsLoading } from '../store/actions'
import AddPost from './user/AddPost'


const mapStateToProps = state => {
    return {
        isAuthenticated: state.User.isLogin,
        reload: state.Blog.reloadBlogs
    }
}

const mapDispatchToProps = { changeAllBlogs, changeUserBlogs, changeAllBlogsLoading, changeUserBlogsLoading }


function MainApp(props) {
    useEffect(() => {
        if(props.isAuthenticated) {
            props.changeAllBlogsLoading(true)
            getBlogs()
                .then(response => {
                    if(response.data.success) {
                        props.changeAllBlogs(response.data.message)
                    }
                })
                .catch(err => {
                    console.log(err)
                })
                .finally(() => setTimeout(() => props.changeAllBlogsLoading(false), 500))
            props.changeUserBlogsLoading(true)
            getUserBlogs()
                .then(response => {
                    if(response.data.success) {
                        props.changeUserBlogs(response.data.message)
                    }
                })
                .catch(err => {
                    console.log(err)
                })
                .finally(() => setTimeout(() => props.changeUserBlogsLoading(false), 500))
        }
    }, [props.isAuthenticated, props.reload])
    return (
        <Router>
            <Header />
            <Switch>
                <PrivateRoute exact path='/' component={HomePage}/>
                <PrivateRoute exact path='/user/blogs' component={UserBlogsPage}/>
                <PrivateRoute exact path='/user/add' component={AddPost}/>
                <PrivateRoute exact path='/blog/:id' component={BlogPage}/>
                <IsAuthenticated exact path='/register' component={RegisterPage} />
                <IsAuthenticated exact path='/login' component={LoginPage} />
            </Switch>
        </Router>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(MainApp)
