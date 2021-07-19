import React from 'react'
import { IPost } from '../types'

export const Post: React.FC<{ post: IPost }> = ({ post }) => {
	return (
		<div className="card">
			<div className="card-body">
				<h5 className="card-title">{post.title}</h5>
			</div>
		</div>
	)
}
