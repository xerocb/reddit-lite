import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

function Post({ key, post }) {
    return (
        <Link to={`/post/${post.id}`}>
            <p>Title: {post.title}</p>
            <img src={post.url} alt='' />
            <p>Author: {post.author}</p>
            <p>Time of Post: {moment.unix(post.created_utc).fromNow()}</p>
            <p>Num Comments: {post.num_comments}</p>
        </Link>
    );
}

export default Post;