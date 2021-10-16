import React from 'react'
import { Route, Redirect } from "react-router-dom";
import jwt_decode from "jwt-decode"

export default function AdminRoute({ component: Component, ...rest }) {
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
                user === process.env.REACT_APP_ADMIN ? <Component {...props} token={token} /> : <Redirect to={{ pathname: "/dashboard" }} />
            )} />
        </div>
    )
}