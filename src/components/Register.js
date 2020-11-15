import React, { useRef } from 'react'
import { useAuth } from '../contexts/AuthContext'

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
            Kullanıcı Adı
            <input ref={usernameRef} />
            Şifre
            <input ref={passRef} />
            <button style={{ marginTop: 10 }} onClick={kayitOl}>Kayıt OL</button>
        </div>
    )
}
