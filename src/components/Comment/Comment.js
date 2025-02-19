import moment from "moment";
import React from "react";
import ReactMarkdown from 'react-markdown';

function Comment({ key, comment }) {
    return (
        <>
            <p>{comment.author}</p>
            <p>{moment.unix(comment.created_utc).fromNow()}</p>
            <ReactMarkdown children={comment.body} />
        </>
    );
}

export default Comment;