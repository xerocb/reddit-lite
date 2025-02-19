import moment from "moment";
import React from "react";

function Comment({ key, comment }) {
    return (
        <>
            <p>{comment.author}</p>
            <p>{moment.unix(comment.created_utc).fromNow()}</p>
            <p>{comment.body}</p>
        </>
    );
}

export default Comment;