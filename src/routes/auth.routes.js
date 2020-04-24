import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import SignIn from '../pages/SignIn';

const AuthRoutes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={SignIn}/>
        </Switch>
    </BrowserRouter>
);

export default AuthRoutes;