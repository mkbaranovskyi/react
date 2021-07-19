import React from 'react'
import { nanoid } from 'nanoid'
import { connect } from 'react-redux'

import { IPost } from '../types'
import { Post } from './Post'

// 2) Now we can use a `syncPosts` Props in our component
const PostList: React.FC<{ syncPosts?: IPost[] }> = ({ syncPosts }) => {
	if (!syncPosts || !syncPosts.length) {
		return <p className="text-center">No posts yet</p>
	} else {
		return (
			<>
				{syncPosts.map((post) => (
					<Post post={post} key={nanoid()} />
				))}
			</>
		)
	}
}

// 1) This function turns State into Props
const mapStateToProps = (state: any) => {
	console.log(state)
	return {
		syncPosts: state.posts.posts
	}
}

export default connect(mapStateToProps, null)(PostList)
// export default PostList
