import React from 'react'
import { IPost } from '../types'

export const FetchedPostList: React.FC<{ posts?: IPost[] }> = ({ posts }) => {
	if (!posts || !posts.length) {
		return <button className="btn btn-primary">Load posts</button>
	} else {
		return <div>Fetched posts</div>
	}
}
