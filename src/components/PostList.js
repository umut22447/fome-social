import React from 'react'
import { useAuth } from '../contexts/AuthContext'

export default function PostList() {
    const { signOut } = useAuth();
    return (
        <div>
            GİRİŞ YAPILDI.
            <button onClick={signOut} >Çıkış Yap.</button>
        </div>
    )
}
