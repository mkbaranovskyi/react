import React from 'react'
import ClickComponent from './features/ClickComponent'
import HoverComponent from './features/HoverComponent'

function App() {
	return (
		<div className="App">
			{/* `name` is to test if the component is getting its props normally without losing them */}
			<ClickComponent name="Max" />
			<HoverComponent />
		</div>
	)
}

export default App
