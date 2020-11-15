import React from 'react'
import {useAuth} from '../contexts/AuthContext'

export default function PostList() {
    const {count, arttir} = useAuth();
    return (
        <div>
            GİRİŞ YAPILDI.
        </div>
    )
}
