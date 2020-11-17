import React, { useEffect, useState } from 'react'
import '../index.css'
import { database } from '../firebase'

export default function PostItem(props) {
    const [username, setUsername] = useState(null);

    const getUsernameById = (userId) => {
        database.ref('users/' + userId).on( 'value', snapshot => {
            const uName = snapshot.val();
            setUsername(uName.username);
        })
    }


    useEffect((userId) => {
        getUsernameById(props.userId);
    });

    return (
        <li className="col-md-10 list-group-item bg-light m-3 border border-gray rounded post-list-item">
            <strong>{username}</strong>
            <h4>{props.title}</h4>
            <article><p>{props.post}</p></article>
        </li>
    )
}
