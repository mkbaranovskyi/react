import React from 'react'
import TodoList from './features/todos/TodoList'

function App() {
	const todos = [
		{ id: 1, completed: false, title: 'But bread' },
		{ id: 2, completed: true, title: 'Buy milk' },
		{ id: 3, completed: false, title: 'Buy flowers' }
	]

	const toggleTodo: Function = (index: number): void => {
		console.log(index)
	}

	return (
		<div className="wrapper">
			<TodoList todos={todos} onChange={toggleTodo} />
		</div>
	)
}

export default App
