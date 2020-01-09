import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Strings from '../utils/Strings'

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    username: {
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'flex-end'
    }
}));
function Header(props) {
    const classes = useStyles();
    const {location: {pathname}} = props
    const isHomePage = pathname === '/'
    const isUserBlogsPage = pathname === '/user/blogs'
    const isAuthPage = pathname === '/login' || pathname === '/register'
    if (isAuthPage) return null
    else return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    {Strings.header.brand}
                </Typography>
                <Link className={`nav-link ${isHomePage ? 'active' : ''}`} to='/'>{Strings.header.homeLink}</Link>
                <Link className={`nav-link ${isUserBlogsPage ? 'active' : ''}`} to='/user/blogs'>{Strings.header.myBlogsLink}</Link>
                <div className={classes.username}>
                    <span>hamidreza nazemi</span>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default withRouter(Header)
