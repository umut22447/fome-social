import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

export default function Register() {

    const { getRegister } = useAuth();
    const { register, handleSubmit } = useForm();

    const rootStyle = {
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
    }

    const kayitOl = data => {
        const email = data.email;
        const password = data.password;
        const username = data.username;
        const desc = data.description;
        if (email !== undefined && password !== undefined && username !== undefined && desc !== undefined ){
            getRegister(email, password, username, desc);
            console.log(email, password, username, desc)
        }
    }

    return (
        <div style={rootStyle}>
            <form style={rootStyle} onSubmit={handleSubmit(kayitOl)}>
                <h1>KAYIT OL</h1>
                EMAIL
                <input name="email" ref={register} required={true} />
                Şifre
                <input name="password" ref={register} type="password" required={true}/>
                USERNAME
                <input name="username" ref={register} required={true}/>
                DESCRIPTION
                <input name="description" ref={register} required={true}/>
                <button style={{ marginTop: 10 }} onClick={kayitOl} className="btn btn-outline-primary" type="submit">Kayıt Ol</button>
                <Link to="/">
                    Zaten bir hesabın var mı? Hemen giriş yap !
                </Link>
            </form>
        </div>
    )
}
