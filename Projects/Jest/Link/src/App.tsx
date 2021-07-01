import React from 'react'
import './App.css'
import Link from './features/Link/Link'

function App() {
	return (
		<div className="App">
			<Link page="#">{"\"Facebook\" \\'is \\ 'awesome'"}</Link>
		</div>
	)
}

export default App
