const ROOT_URL = 'https://www.reddit.com';

export const getPostsFromSearchTerm = async (searchTerm) => {
    const endpoint = searchTerm ? 
        `${ROOT_URL}/search.json?q=${searchTerm}` : 
        `${ROOT_URL}/r/popular.json`;

    const response = await fetch(endpoint);
    const json = await response.json();
    return json.data.children;
};