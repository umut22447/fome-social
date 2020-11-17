import React, {
    createContext, useState, useContext, useEffect
} from 'react';
import { database } from '../firebase'

const PostContext = createContext({});

export const PostProvider = ({ children }) => {
    const [latestPostId, setLatestPostId] = useState(0);
    const [postList, setPostList] = useState([]);

    const getLatestPostId = () => {
        return database.ref('post-uuid').on('value', snapshot => {
            const result = snapshot.val();
            setLatestPostId(result);
        });
    }

    const addNewPost = (postId, userId, title, post, date) => {
        database.ref('posts/' + postId).set({
            userId: userId,
            title: title,
            post: post,
            date: date
        });
    
        database.ref('post-uuid').set(latestPostId + 1);
    }

    const getAllPosts = () => {
        database.ref('posts').on('value', snapshot => {
            setPostList(Object.values(snapshot.val()));
        })
    }

    useEffect(() => {
        getLatestPostId();
        getAllPosts();
    }, []);

    return (
        <PostContext.Provider value={{ latestPostId, addNewPost, postList }}>
            {children}
        </PostContext.Provider>
    );
};

export const usePost = () => useContext(PostContext);

export default PostContext;