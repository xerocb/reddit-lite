import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import moment from "moment";

function PostPage() {
    const { id } = useParams();
    const post = useSelector((state) => state.posts.posts.find(post => post.id === id));

    return (
        <>
            <p>Title: {post.title}</p>
            <img src={post.url} alt='' />
            <p>Author: {post.author}</p>
            <p>Time of Post: {moment.unix(post.created_utc).fromNow()}</p>
            <p>Num Comments: {post.num_comments}</p>
        </>
    );
}

export default PostPage;