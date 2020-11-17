import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import { usePost } from '../contexts/PostContext'

export default function PostList() {
    const { user, signOut } = useAuth();
    const { latestPostId, addNewPost } = usePost();
    const userUUID = user.uid;
    const addPostClicked = () => {
        addNewPost(latestPostId, userUUID, "TITLE", "POSTUN TA KENDISI", "TARIH");
    }
    return (
        <div>
            GİRİŞ YAPILDI.
            <button onClick={addPostClicked}>Yeni Post Ekle</button>
            <button onClick={signOut} >Çıkış Yap.</button>
        </div>
    )
}
