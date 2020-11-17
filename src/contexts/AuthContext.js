import React, {
    createContext, useState, useContext, useEffect
} from 'react';
import { auth, writeUserData, readUserData, deleteUserData } from '../firebase'

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (email, password) => {
        auth.signInWithEmailAndPassword(email, password);
    }

    const getRegister = (email, password, username, description) => {
        auth.createUserWithEmailAndPassword(email, password).catch(err => { console.error(err) }).then(result => {
            writeUserData(result.user.uid, username, email, description);
        });
    }

    const signOut = () => {
        auth.signOut();
    }

    useEffect(() => {
        const unsub = auth.onAuthStateChanged(user => {
            setUser(user);
        })
        return unsub;
    }, []);

    return (
        <AuthContext.Provider value={{ user, login, getRegister, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

export default AuthContext;