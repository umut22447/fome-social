import React, { useRef } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Link } from 'react-router-dom'

export default function Register() {

    const { register } = useAuth();

    const usernameRef = useRef();
    const passRef = useRef();

    const rootStyle = {
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
    }

    const kayitOl = () => {
        const username = usernameRef.current.value;
        const password = passRef.current.value;
        register(username, password);
    }

    return (
        <div style={rootStyle}>
            <h1>KAYIT OL</h1>
            EMAIL
            <input ref={usernameRef} />
            Şifre
            <input ref={passRef} />
            <button style={{ marginTop: 10 }} onClick={kayitOl} className="btn btn-outline-primary">Kayıt Ol</button>
            <Link to="/">
                Zaten bir hesabın var mı? Hemen giriş yap !
            </Link>
        </div>
    )
}
