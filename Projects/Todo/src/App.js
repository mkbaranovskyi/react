import React from 'react'
import Todolist from './Todo/TodoList'
// Context lets us pass functions through the components
import Context from './context'
import AddTask from './Todo/AddTask'

function App() {
	// `tasks` - the initial state
	// `setTasks` - function to call when we set the new state
	// `useState` hook is used to change the state, it accepts the initial state and returns an array with 2 params
	const [tasks, setTasks] = React.useState([
		{ id: 1, completed: false, title: 'Buy bread' },
		{ id: 2, completed: true, title: 'Buy butter' },
		{ id: 3, completed: false, title: 'Buy milk' }
	])

	function toggleTask(id) {
		// This function should accept the similar array of tasks as we passed setting the initial state. And this should be a NEW array, the old object will be considered the same state and won't trigger re-render!
		setTasks(
			tasks.map((task) => {
				if (task.id === id) {
					task.completed = !task.completed
				}
				return task
			})
		)
	}

	function removeTask(id) {
		setTasks(tasks.filter((task) => task.id !== id))
		console.log(tasks)
	}

	function addTask(title) {
		setTasks([
			...tasks,
			{
				title,
				id: Date.now(),
				completed: false
			}
		])
	}

	return (
		// To use Context, we should wrap our main element with the Context provider
		<Context.Provider value={{ removeTask }}>
			<div className="wrapper">
				<h1>React tutorial</h1>
				<AddTask onCreate={addTask} />
				{tasks.length ? (
					<Todolist tasks={tasks} myOnToggle={toggleTask} />
				) : (
					<p>No tasks</p>
				)}
			</div>
		</Context.Provider>
	)
}

export default App
