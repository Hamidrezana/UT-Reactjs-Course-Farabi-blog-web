import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return {
        isAuthenticated: state.User.isLogin
    }
}

function IsAuthenticated({component: Component, ...props}) {
    const { isAuthenticated } = props
    return (
        <Route
            render={(props) => (
                !isAuthenticated ?
                <Component {...props}/>
                : <Redirect
                    to={{
                        pathname: '/',
                        state: { from: props.location }
                    }}
                />
            )}
            {...props}
        />
    )
}

export default connect(mapStateToProps)(IsAuthenticated)
