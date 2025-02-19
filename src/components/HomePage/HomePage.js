import React from "react";
import { useSelector } from 'react-redux';

import Header from '../Header/Header';
import Post from '../Post/Post';

function HomePage() {
    const posts = useSelector((state) => state.posts.posts);

    const postList = posts ? posts.map((post) => { 
        return <Post key={post.id} post={post} />;
    }) : null;

    return (
        <>
            <Header />
            {postList}
        </>
    );
}

export default HomePage;