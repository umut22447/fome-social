import React, { useRef } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Link } from 'react-router-dom'

export default function Login() {

    const { login } = useAuth();

    const rootStyle = {
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
    }

    const usernameRef = useRef();
    const passRef = useRef();

    const girisYap = () => {
        login(usernameRef.current.value, passRef.current.value);
    }

    return (
        <div style={rootStyle}>
            <h1>GİRİŞ YAP</h1>
            EMAIL
            <input ref={usernameRef} />
            Şifre
            <input ref={passRef} />
            <button style={{ marginTop: 10 }} onClick={girisYap}>Giriş Yap</button>
            <Link to="/register">
                Zaten bir hesabın yok mu? Hemen Kaydol !
            </Link>
        </div>
    )
}
