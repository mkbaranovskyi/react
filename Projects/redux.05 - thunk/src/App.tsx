import React from 'react'
import { Counter } from './features/Counter/Counter'
import TodoContainer from './features/Todo/TodoContainer'

const App: React.FC = () => {
	return (
		<div className="App">
			<Counter />
			<TodoContainer />
		</div>
	)
}

export default App
