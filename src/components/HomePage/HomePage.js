import React from "react";
import { useSelector } from 'react-redux';

import Header from '../Header/Header';
import Post from '../Post/Post';

function HomePage() {
    const posts = useSelector((state) => state.posts.posts);

    console.log(posts);

    const postList = posts ? posts.map((post) => { 
        return <Post key={post.data.id} title={post.data.title} />;
    }) : null;

    return (
        <>
            <Header />
            {postList}
        </>
    );
}

export default HomePage;