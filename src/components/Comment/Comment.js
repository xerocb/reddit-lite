import moment from "moment";
import React from "react";
import ReactMarkdown from 'react-markdown';
import styles from './Comment.module.css';

function Comment({ key, comment }) {
    return (
        <div className={styles.container}>
            <p className={styles.meta}>u/{comment.author} - {moment.unix(comment.created_utc).fromNow()}</p>
            <ReactMarkdown children={comment.body} className={styles.main} />
        </div>
    );
}

export default Comment;