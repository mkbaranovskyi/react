import React, { useState, useEffect } from 'react'
import { TodoForm } from '../components/TodoForm'
import { TodoList } from '../components/TodoList'
import Context from '../context'
import { ITask } from '../interfaces'

const TodoPage: React.FC = () => {
	const [tasks, setTasks] = useState<ITask[]>([])

	// Read saved tasks from `localStorage`
	useEffect(() => {
		// `localStorage.getItem()` can return `null`, so we should handle this as well
		const savedTasks = JSON.parse(localStorage.getItem('tasks') || '[]') as ITask[]
		setTasks(savedTasks)
	}, [])

	// Write tasks to `localStorage`
	useEffect(() => {
		localStorage.setItem('tasks', JSON.stringify(tasks))
	}, [tasks])

	const addTask = (title: string): void => {
		const newTask: ITask = {
			id: Date.now(),
			title,
			completed: false
		}

		// If we rely on the previous state value, we should pass callback instead of plain value
		setTasks((prevState) => [newTask, ...prevState])
	}

	const toggleTask = (id: number): void => {
		// We need to return new array and new objects inside it - otherwise state might not change!
		setTasks(
			(prevState) =>
				prevState.map((task) => {
					if (task.id === id) {
						return { ...task, completed: !task.completed }
					}
					return task
				}) as ITask[]
		)
	}

	const removeTask = (id: number): void => {
		if (window.confirm('Do you really want to remove this task?')) {
			setTasks((prevState) => prevState.filter((task) => task.id !== id))
		}
	}

	return (
		<>
			<TodoForm onAdd={addTask} />
			<Context.Provider value={{ toggleTask, removeTask }}>
				<TodoList tasks={tasks} />
			</Context.Provider>
		</>
	)
}

export { TodoPage }
