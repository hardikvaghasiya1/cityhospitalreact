import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { DoneLogin } from '../utilis';

function PrivateRoute({component:Component, ...rest}) {
    return (
        <Route{...rest} render={props=>(
            DoneLogin()?
            <Component {...props} />
            :
            <Redirect to={"/login"} />

        )}
        />
    );
}

export default PrivateRoute;