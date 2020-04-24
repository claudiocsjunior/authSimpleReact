import React from 'react';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import { useAuth } from '../contexts/auth';

const Routes = () => {
    const { signed, loading } = useAuth();

    if(loading){
        return(
            <div style={{display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                loading...
            </div>
        );
    }


    return signed ? <AppRoutes/> : <AuthRoutes/>;
};

export default Routes;