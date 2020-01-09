import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const isAuthenticated = false

function IsAuthenticated({component: Component, ...props}) {
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

export default IsAuthenticated
