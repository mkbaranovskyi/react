import React from 'react'
// This is for our app to work in the SPA mode, method 2
import { useHistory } from 'react-router-dom'

export const InfoPage: React.FC = () => {
	const history = useHistory()
	return (
		<>
			<h1>Info page</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, a ratione repellendus blanditiis perferendis rem
				similique nostrum officiis deleniti doloribus!
			</p>
			<button className="btn" onClick={() => history.push('/')}>
				Back to tasks
			</button>
		</>
	)
}
