import React, { createContext, useState, useEffect, useContext }  from 'react';
import * as auth from '../services/auth';
import api from '../services/api';

//tudo relacionado a autenticação fica dentro desse contexto, algo em comum a todos os filhos

const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const storageUser = localStorage.getItem('@AuthRN:user');
        const storageToken = localStorage.getItem('@AuthRN:token');

        if(storageUser && storageToken){
            //mandar sempre o authorization
            api.defaults.headers['Authorization'] = `Bearer ${storageToken}`;
            setUser(JSON.parse(storageUser));
        }
    }, [])

    //método resposével por login
    const signIn = async () => {
        setLoading(true);
        const response = await auth.signIn();

        setUser(response.user);
        //console.log(response);

        api.defaults.headers['Authorization'] = `Bearer ${response.token}`;


        localStorage.setItem('@AuthRN:user', JSON.stringify(response.user));
        localStorage.setItem('@AuthRN:token', response.token);
        setLoading(false);
    };

    //Método responsável pelo signout
    const signOut = async () => {
        localStorage.clear();
        setUser(null);
    }

    //return provider
    return (
        <AuthContext.Provider value={{signed: !!user, user, signIn, signOut, loading}}>
            {children}
        </AuthContext.Provider> 
    );
};

//export default AuthContext;

//Criando nosso proprio hook
export function useAuth(){
    const context = useContext(AuthContext);
    return context;
}