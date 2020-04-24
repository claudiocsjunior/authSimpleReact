import React from 'react';
import {useAuth} from '../../contexts/auth';

const Dashboard = () => {
    const { signOut, user } = useAuth();

    const handleSignout = () => {
        signOut();
    }

    return (
        <div style={{display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <div>
                <p>{user?.name}</p>
            </div>
            <button onClick={handleSignout} > Sign out </button>
        </div>
    );
}

export default Dashboard;