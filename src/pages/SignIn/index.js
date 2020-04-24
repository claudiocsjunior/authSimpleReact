import React from 'react'; //useContext - usado para ler informações de um contexto

import {useAuth} from '../../contexts/auth';

const SignIn = () => {
    const {signed, user, signIn } = useAuth();

    console.log(signed);
    console.log(user);

    const handleSignIn = () => {
        signIn();
    }

    return (
        <div style={{display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <button onClick={handleSignIn} > SignIn </button>
        </div>
    );
}

export default SignIn;