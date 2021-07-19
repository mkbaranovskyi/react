import { CREATE_POST } from './types'

type Action = {
	type: string
	payload?: any
}

const initialState = {
	posts: [],
	fetchedPosts: []
}

export const postsReducer = (state = initialState, action: Action) => {
	switch (action.type) {
		case CREATE_POST: {
			return { ...state, posts: [...state.posts, action.payload] }
		}

		default:
			return state
	}
}
