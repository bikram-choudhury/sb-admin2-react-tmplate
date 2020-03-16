import React, { createContext, useEffect, useReducer } from 'react';
import { AuthReducer } from '../reducers/auth.reducer';

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
    const localAuth = sessionStorage.getItem('auth');
    const authState = localAuth ? JSON.parse(localAuth) : { accessToken: '', refreshToken: '', tokenType: '' };
    const [auth, dispatch] = useReducer(AuthReducer, authState);
    
    useEffect(() => {
        sessionStorage.setItem('auth', JSON.stringify(auth));
    }, [auth]);

    return (
        <AuthContext.Provider value={{ ...auth, authDispatch: dispatch }}>
            {props.children}
        </AuthContext.Provider>
    )
}