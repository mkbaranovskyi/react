import React, { useState } from 'react'
import { Navbar } from './components/Navbar'
import { TodoForm } from './components/TodoForm'

const App: React.FC = () => {
	const [tasks, setTasks] = useState([])

	const addHandler = (title: string): void => {
		console.log(title)
	}

	return (
		<>
			<Navbar />
			<div className="container">
				<TodoForm onAdd={addHandler} />
			</div>
		</>
	)
}

export default App
