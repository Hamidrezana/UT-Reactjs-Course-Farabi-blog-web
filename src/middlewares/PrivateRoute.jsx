import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const isAuthenticated = false


function PrivateRoute({component: Component, ...props}) {
    return (
        <Route
            render={(props) => (
                isAuthenticated ?
                <Component {...props}/>
                : <Redirect
                    to={{
                        pathname: '/register',
                        state: { from: props.location }
                    }}
                />
            )}
            {...props}
        />
    )
}

export default PrivateRoute
