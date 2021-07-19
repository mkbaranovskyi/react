import { IPost } from '../types'
import { CREATE_POST } from './types'

export const createPost = (post: IPost) => {
	return {
		type: CREATE_POST,
		payload: post
	}
}
