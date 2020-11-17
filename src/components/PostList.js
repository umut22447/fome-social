import React, { useRef } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { usePost } from '../contexts/PostContext'
import PostItem from './PostItem'

export default function PostList() {
    const { user, signOut } = useAuth();
    const { latestPostId, addNewPost, postList } = usePost();
    const titleRef = useRef();
    const postRef = useRef();
    const userUUID = user.uid;

    const addPostClicked = () => {
        addNewPost(latestPostId, userUUID, titleRef.current.value, postRef.current.value, new Date().toLocaleString());
        titleRef.current.value = null;
        postRef.current.value = null;
    }
    const postListStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        width: "100%"
    }

    const postAddStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        width: "100%"
    }

    return (
        <div>
            <div style={postAddStyle}>
                <form>
                    <div><strong>Başlık</strong></div>
                    <input placeholder="Başlık Yaz." ref={titleRef} className="form-control" />
                    <div><strong>Postun Ta Kendisi</strong></div>
                    <input placeholder="Neler Hissettiğini Yaz." ref={postRef} className="form-control" />
                </form>
                <div className="m-3">
                    <button onClick={addPostClicked} className="btn btn-outline-success">Yeni Post Ekle</button>
                    <button onClick={signOut} className="btn btn-outline-danger">Çıkış Yap.</button>
                </div>
            </div>
            <hr />
            <ul style={postListStyle}>
                {postList.length > 0 ?
                    postList.reverse().map((post, index) => {
                        return <PostItem post={post.post} title={post.title} key={index} />
                    })
                    : null}
            </ul>

        </div>
    )
}
