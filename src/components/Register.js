import React, { useRef } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Link } from 'react-router-dom'

export default function Register() {

    const { register } = useAuth();

    const emailRef = useRef();
    const passRef = useRef();
    const usernameRef = useRef();
    const descRef = useRef();

    const rootStyle = {
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
    }

    const kayitOl = () => {
        const email = emailRef.current.value;
        const password = passRef.current.value;
        const username = usernameRef.current.value;
        const desc = descRef.current.value;
        register(email, password, username, desc);
    }

    return (
        <div style={rootStyle}>
            <h1>KAYIT OL</h1>
            EMAIL
            <input ref={emailRef} />
            Şifre
            <input ref={passRef} />
            USERNAME
            <input ref={usernameRef} />
            DESCRIPTION
            <input ref={descRef} />
            <button style={{ marginTop: 10 }} onClick={kayitOl} className="btn btn-outline-primary">Kayıt Ol</button>
            <Link to="/">
                Zaten bir hesabın var mı? Hemen giriş yap !
            </Link>
        </div>
    )
}
