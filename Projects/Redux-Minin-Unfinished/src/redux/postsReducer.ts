import { CREATE_POST } from './types'

const initialState = {
	posts: [],
	fetchedPosts: []
}

export const postsReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case CREATE_POST: {
			return { ...state, posts: [...state.posts, action.payload] }
		}

		default:
			return state
	}
}
