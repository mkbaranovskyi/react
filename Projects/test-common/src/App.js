import React, { useState } from 'react'

const NameForm = () => {
	const [username, setUsername] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log(username)
		e.target.elements.username.value = ''
	}

	const handleChange = (e) => {
		setUsername(e.target.value)
	}

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Name:
				<input name="username" onChange={handleChange} />
			</label>
		</form>
	)
}

function App() {
	return (
		<div className="App">
			<NameForm />
		</div>
	)
}

export default App
