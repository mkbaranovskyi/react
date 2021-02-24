import React, { useState, useEffect } from 'react'
import { TodoForm } from '../components/TodoForm'
import { TodoList } from '../components/TodoList'
import { ITask } from '../interfaces'

export const TodoPage: React.FC = () => {
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

	const addHandler = (title: string): void => {
		const newTask: ITask = {
			id: Date.now(),
			title,
			completed: false
		}
		// This line is not perfect: if we rely on the previous state value, we should pass callback instead of plain value
		// setTasks([newTask, ...tasks])
		setTasks((prevState) => [newTask, ...prevState])
	}

	function toggleTask(id: number): void {
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

	function removeTask(id: number): void {
		if (window.confirm('Do you really want to remove this task?')) {
			setTasks((prevState) => prevState.filter((task) => task.id !== id))
		}
	}

	return (
		<>
			<TodoForm onAdd={addHandler} />
			<TodoList tasks={tasks} onToggle={toggleTask} onRemove={removeTask} />
		</>
	)
}
