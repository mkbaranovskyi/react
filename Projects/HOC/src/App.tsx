import React from 'react'
import ClickComponent from './features/ClickComponent'
import HoverComponent from './features/HoverComponent'

const App: React.FC = () => {
	const clickProps = {
		name: 'Max'
	}

	return (
		<div className="App">
			{/* `name` is to test if the component is getting its props normally without losing them */}
			<ClickComponent {...clickProps} />
			<HoverComponent />
		</div>
	)
}

export default App
