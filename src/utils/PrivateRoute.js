import React from 'react'
import { Route, Redirect } from "react-router-dom";
import jwt_decode from "jwt-decode"

export default function PrivateRoute({ component: Component, ...rest }) {
    var token = localStorage.getItem('token')
    if (token) {
        try {
            var decoded = jwt_decode(token);
            var user = decoded.user.email;
        } catch (error) {
            localStorage.clear('token')
            window.location.pathname = '/'
        }
    }
    return (
        <div>
            <Route {...rest} render={props => (
                user ? <Component {...props} token={token} /> : <Redirect to={{ pathname: "/login" }} />
            )} />
        </div>
    )
}