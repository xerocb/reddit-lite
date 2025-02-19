import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

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
        <>
            <Link to='/'>
                <>
                    <p>reddit<span id='lite'>lite</span></p>
                </>
            </Link>
            <input
                type='text'
                placeholder="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} 
            />
            <button type='submit' onClick={handleSubmit}>Search</button>
        </>
    );
}

export default Header;