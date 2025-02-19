import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCommentsFromPermalink, getPostsFromSearchTerm } from '../../utils/redditApi';

export const getPosts = createAsyncThunk('posts/getPosts', async (searchTerm) => {
    const posts = await getPostsFromSearchTerm(searchTerm);
    return posts.map((post) => post.data);
});

export const getComments = createAsyncThunk('posts/getComments', async (permalink) => {
	const comments = await getCommentsFromPermalink(permalink);
	return comments.map((comment) => comment.data);
})

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
		comments: [],
        hasError: false,
        isLoading: false
    },
    extraReducers: (builder) => {
        builder
          .addCase(getPosts.fulfilled, (state, action) => {
            state.posts = action.payload;
          })
          .addCase(getComments.fulfilled, (state, action) => {
			state.comments = action.payload;
		  })
		  .addMatcher(
			(action) => action.type.endsWith('/pending'),
			(state) => {
				state.hasError = false;
				state.isLoading = true;
			}
		  )
		  .addMatcher(
			(action) => action.type.endsWith('/fulfilled'),
			(state) => {
				state.hasError = false;
				state.isLoading = false;
			}
		  )
		  .addMatcher(
			(action) => action.type.endsWith('/rejected'),
			(state) => {
				state.hasError = true;
				state.isLoading = false;
			}
		  )
    }
});

export default postsSlice.reducer;