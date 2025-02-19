import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import moment from "moment";
import Comment from "../Comment/Comment";
import { getComments } from "../../features/posts/postsSlice";
import Header from "../Header/Header";
import ReactMarkdown from 'react-markdown';
import Loading from "../Loading/Loading";
import Error from "../Error/Error";

function PostPage() {
    const { id } = useParams();
    const post = useSelector((state) => state.posts.posts.find(post => post.id === id));
    const isLoading = useSelector((state) => state.posts.isLoading);
    const hasError = useSelector((state) => state.posts.hasError);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getComments(post.permalink));
    },[dispatch, post]);

    const comments = useSelector((state) => state.posts.comments);

    if (isLoading) {
        return (
            <>
                <Header />
                <Loading />
            </>
        );
    }

    if (hasError) {
        return (
            <>
                <Header />
                <Error />
            </>
        );
    }

    return (
        <>
            <Header />
            <p>Title: {post.title}</p>
            <img src={post.url} alt='' />
            <ReactMarkdown children={post.selftext} />
            <p>Author: {post.author}</p>
            <p>Time of Post: {moment.unix(post.created_utc).fromNow()}</p>
            <p>Num Comments: {post.num_comments}</p>
            {comments.map(comment => <Comment key={comment.id} comment={comment} />)}
        </>
    );
}

export default PostPage;