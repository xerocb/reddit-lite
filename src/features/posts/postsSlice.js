import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getPostsFromSearchTerm } from '../../utils/redditApi';

export const getPosts = createAsyncThunk('posts/getPosts', async (searchTerm) => {
    const posts = await getPostsFromSearchTerm(searchTerm);
    return posts;
});

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        selectedPost: {},
        searchTerm: '',
        hasError: false,
        isLoading: false
    },
    reducers: {
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
        setSelectedPost: (state, action) => {
            state.selectedPost = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
          .addCase(getPosts.pending, (state, action) => {
            state.hasError = false;
            state.isLoading = true;
          })
          .addCase(getPosts.fulfilled, (state, action) => {
            state.hasError = false;
            state.isLoading = false;
            state.posts = action.payload;
          })
          .addCase(getPosts.rejected, (state, action) => {
            state.hasError = true;
            state.isLoading = false;
          });
    }
});

export const { setSearchTerm, setSelectedPost } = postsSlice.actions;
export default postsSlice.reducer;