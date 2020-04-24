import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Dashboard from '../pages/Dashboard';

const AppRoutes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Dashboard}/>
        </Switch>
    </BrowserRouter>
);

export default AppRoutes;