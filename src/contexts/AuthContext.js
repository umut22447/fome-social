import React, {
    createContext, useState, useContext, useEffect
} from 'react';
import { auth } from '../firebase'

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (email, password) => {
        auth.signInWithEmailAndPassword(email, password);
    }

    const register = (email, password) => {
        auth.createUserWithEmailAndPassword(email, password).catch( err => {console.error(err)});
    }

    const signOut = () => {
        auth.signOut();
    }

    useEffect(() => {
        const unsub = auth.onAuthStateChanged( user => {
            setUser(user);
        })
        return unsub;
    }, []);

    return (
        <AuthContext.Provider value={{ user, login, register, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

export default AuthContext;