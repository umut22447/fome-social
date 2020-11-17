import React from 'react'
import '../index.css'

export default function PostItem(props) {
    return (
        <div className="col-md-10 blogShort">
            <h4>{props.title}</h4>
            <article><p>{props.post}</p></article>
        </div>
    )
}
