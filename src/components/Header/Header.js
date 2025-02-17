import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { getPosts } from "../../features/posts/postsSlice";

function Header() {
    const [localSearch, setLocalSearch] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts(localSearch));
    },[dispatch, localSearch]);

    return <p>Header</p>;
}

export default Header;