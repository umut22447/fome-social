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
    }
    const postListStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
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
                    <div>Başlık</div>
                    <input placeholder="Başlık Yaz." ref={titleRef} />
                    <div>Postun Ta Kendisi</div>
                    <input placeholder="Neler Hissettiğini Yaz." ref={postRef} />
                </form>
                <div >
                    <button onClick={addPostClicked}>Yeni Post Ekle</button>
                    <button onClick={signOut} >Çıkış Yap.</button>
                </div>
            </div>
            <hr />
            <div style={postListStyle}>
                {postList.length > 0 ? <div>
                    {postList.reverse().map((post, index) => {
                        return <PostItem post={post.post} title={post.title} key={index} />
                    })}
                </div> : null}
            </div>

        </div>
    )
}
