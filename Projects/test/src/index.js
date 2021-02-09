import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

function Example() {
	const [count, setCount] = useState(0)

	// Similar to componentDidMount and componentDidUpdate
	useEffect(() => {
		// Update the document title using the browser API
		document.title = `You clicked ${Date.now()} times`
		return () => {
			console.log(Date.now())
		}
	})

	return (
		<div>
			<p>You clicked {Date.now()} times</p>
			<button onClick={() => setCount(count + 1)}>Click me</button>
		</div>
	)
}

function App() {
	return (
		<div>
			<Example />
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))
