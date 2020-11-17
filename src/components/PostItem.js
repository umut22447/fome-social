import React from 'react'
import '../index.css'

export default function PostItem(props) {
    return (
        <li className="col-md-10 list-group-item bg-light m-3 border border-gray rounded post-list-item">
            <h4>{props.title}</h4>
            <article><p>{props.post}</p></article>
        </li>
    )
}
