import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from './Header.module.css';
import { getPosts } from "../../features/posts/postsSlice";
import { Link, useNavigate } from "react-router-dom";

function Header() {
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getPosts(searchTerm));
        navigate('/');
    };

    return (
        <div className={styles.header}>
            <Link className={styles.link} to='/'>
                    <h1 className={styles.home}>reddit<span className={styles.lite}>lite</span></h1>
            </Link>
            <div className={styles.gap}></div>
            <div className={styles.search}>
                <input
                    type='text'
                    placeholder="search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} 
                />
                <button type='submit' onClick={handleSubmit}>Search</button>
            </div>
        </div>
    );
}

export default Header;