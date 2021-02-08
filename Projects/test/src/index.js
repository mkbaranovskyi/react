import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

function Welcome(props) {
	return <h1>Hello, {props.name}</h1>
}
ReactDOM.render(<Welcome name="max" />, document.getElementById('root'))

function App() {
	return (
		<div>
			<Welcome />
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))
