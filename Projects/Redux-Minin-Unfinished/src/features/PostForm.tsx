import { nanoid } from 'nanoid'
import React, { ChangeEventHandler, FormEventHandler, useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { createPost } from '../redux/actions'
import { IPost } from '../types'

const PostForm: React.FC = () => {
	// Here we use a universal state and change handler - works for any kinds of inputs
	const [state, setState] = useState({
		title: ''
	})
	const dispatch = useDispatch()

	const changeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
		setState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
	}

	const submitHandler: FormEventHandler = (e) => {
		e.preventDefault()

		const post: IPost = {
			title: state.title,
			id: nanoid(),
			timestamp: Date.now()
		}

		// debugger
		// This method appears in the coomponent after it's connected to Redux
		// createPost(post)
		dispatch(createPost(post))
		setState((prev) => ({ ...prev, title: '' }))
	}

	return (
		<form onSubmit={submitHandler}>
			<div className="mb-3">
				<label htmlFor="title" className="form-label">
					Post Title
				</label>
				<input
					id="title"
					className="form-control"
					name="title"
					value={state.title}
					onChange={changeHandler}
				/>
			</div>
			<button className="btn btn-success" type="submit">
				Create
			</button>
		</form>
	)
}

const mapDispatchToProps = {
	createPost
}

export default connect(null, mapDispatchToProps)(PostForm)
