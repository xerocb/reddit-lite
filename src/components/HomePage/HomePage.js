import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

import Header from '../Header/Header';
import Post from '../Post/Post';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import { getPosts } from "../../features/posts/postsSlice";

function HomePage() {
    const posts = useSelector((state) => state.posts.posts);
    const isLoading = useSelector((state) => state.posts.isLoading);
    const hasError = useSelector((state) => state.posts.hasError);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts(''))
    },[]);

    const postList = posts ? posts.map((post) => { 
        return <Post key={post.id} post={post} />;
    }) : null;

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
            {postList}
        </>
    );
}

export default HomePage;