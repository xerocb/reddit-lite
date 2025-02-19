import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import styles from './Post.module.css';

function Post({ key, post }) {
    return (
        <Link className={styles.link} to={`/post/${post.id}`}>
            <div className={styles.container}>
                <div className={styles.main}>
                    <p className={styles.title}>{post.title}</p>
                    <img src={post.url} alt='' className={styles.image} />
                </div>
                <div className={styles.meta}>
                    <p>u/{post.author}</p>
                    <p>{moment.unix(post.created_utc).fromNow()}</p>
                    <p>{post.num_comments} comments</p>
                </div>
            </div>
        </Link>
    );
}

export default Post;