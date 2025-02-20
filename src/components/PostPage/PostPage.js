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
import styles from './PostPage.module.css';

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
            <div className={styles.meta}>
                <p>r/{post.subreddit} - {moment.unix(post.created_utc).fromNow()}</p>
                <p>u/{post.author}</p>
            </div>
            <div className={styles.main}>
                <h2 className={styles.title}>{post.title}</h2>
                <ReactMarkdown children={post.selftext} />
                <img src={post.url} alt='' />
            </div>
            <div className={styles.comments}>
                <p>{post.num_comments} comments</p>
                {comments.map(comment => <Comment key={comment.id} comment={comment} />)}
            </div>
        </>
    );
}

export default PostPage;