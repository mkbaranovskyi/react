import React from 'react'
import { FetchedPostList } from './features/FetchedPostList'
import PostForm from './features/PostForm'
import PostList from './features/PostList'
import { IPost } from './types'

const posts: IPost[] = [
	{ title: 'one' } as IPost,
	{ title: 'two' } as IPost,
	{ title: 'three' } as IPost
]

const App: React.FC = () => {
	return (
		<div className="container pt-3">
			<div className="row">
				<div className="col">
					<PostForm />
				</div>
			</div>
			<div className="row">
				<div className="col">
					<PostList />
				</div>
				<div className="col">
					<FetchedPostList />
				</div>
			</div>
		</div>
	)
}

export default App
