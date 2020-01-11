import React, {useState} from 'react'
import { Link, withRouter } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Hidden, IconButton, Drawer, List, ListItem, Box } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import Strings from '../utils/Strings'
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return {
        userInfo: state.User.userInfo
    }
}

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    username: {
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'flex-end'
    },
    mUsername: {
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    list: {
        width: 250,
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
    }
}));
function Header(props) {
    const [drawerState, setDrawerState] = useState(false)
    const classes = useStyles();
    const {location: {pathname}} = props
    const isHomePage = pathname === '/'
    const isUserBlogsPage = pathname === '/user/blogs'
    const isAuthPage = pathname === '/login' || pathname === '/register'
    const togglerDrawer = (state) => setDrawerState(state)
    if (isAuthPage) return null
    else return (
        <AppBar position="static">
            <Toolbar>
                <Hidden smUp>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={() => togglerDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                </Hidden>
                <Typography variant="h6" className={classes.title}>
                    {Strings.header.brand}
                </Typography>
                <Drawer open={drawerState} onClose={() => togglerDrawer(false)}>
                    <div className={classes.list}>
                        <List>
                            <Box marginBottom={2}>
                                <ListItem button>
                                    <Link className={`nav-link m-link ${isHomePage ? 'active' : ''}`} to='/'>{Strings.header.homeLink}</Link>
                                </ListItem>
                            </Box>
                            <Box marginBottom={2}>
                                <ListItem button>
                                <Link className={`nav-link m-link ${isUserBlogsPage ? 'active' : ''}`} to='/user/blogs'>{Strings.header.myBlogsLink}</Link>
                                </ListItem>
                            </Box>
                        </List>
                        <div className={classes.mUsername}>
                            <span>{props.userInfo.firstName + ' ' + props.userInfo.lastName}</span>
                        </div>
                    </div>
                </Drawer>
                <Hidden xsDown>
                    <Link className={`nav-link ${isHomePage ? 'active' : ''}`} to='/'>{Strings.header.homeLink}</Link>
                    <Link className={`nav-link ${isUserBlogsPage ? 'active' : ''}`} to='/user/blogs'>{Strings.header.myBlogsLink}</Link>
                    <div className={classes.username}>
                        <span>{props.userInfo.firstName + ' ' + props.userInfo.lastName}</span>
                    </div>
                </Hidden>
            </Toolbar>
        </AppBar>
    )
}

export default withRouter(connect(mapStateToProps)(Header))
