import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import moment from "moment";
import Comment from "../Comment/Comment";
import { getComments } from "../../features/posts/postsSlice";
import Header from "../Header/Header";

function PostPage() {
    const { id } = useParams();
    const post = useSelector((state) => state.posts.posts.find(post => post.id === id));

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getComments(post.permalink));
    },[dispatch, post]);

    const comments = useSelector((state) => state.posts.comments);

    return (
        <>
            <Header />
            <p>Title: {post.title}</p>
            <img src={post.url} alt='' />
            <p>Body: {post.selftext}</p>
            <p>Author: {post.author}</p>
            <p>Time of Post: {moment.unix(post.created_utc).fromNow()}</p>
            <p>Num Comments: {post.num_comments}</p>
            {comments.map(comment => <Comment key={comment.id} comment={comment} />)}
        </>
    );
}

export default PostPage;