import React, { useState } from 'react'
import Context from './context'
import AddTodo from './features/todos/AddTodo'
import TodoList from './features/todos/TodoList'
import { ITodo } from './type.d'

function App() {
	const initialState: ITodo[] = [
		{ id: 1, completed: false, title: 'But bread' },
		{ id: 2, completed: true, title: 'Buy milk' },
		{ id: 3, completed: false, title: 'Buy flowers' }
	]

	const [todos, setTodos] = useState<ITodo[]>(initialState)

	const toggleTodo: Function = (index: number): void => {
		setTodos(
			todos.map((todo) =>
				todo.id === index ? { ...todo, completed: !todo.completed } : todo
			)
		)
	}

	const removeTodo = (index: number): void => {
		setTodos(todos.filter((todo) => index !== todo.id))
	}

	const createTodo = (title: string) => {
		setTodos([...todos, { id: Date.now(), completed: false, title } as ITodo])
	}

	return (
		<Context.Provider value={{ removeTodo }}>
			<div className="App">
				<AddTodo onCreate={createTodo} />
				{todos.length ? (
					<TodoList todos={todos} onToggle={toggleTodo} />
				) : (
					<p>You don't have tasks</p>
				)}
			</div>
		</Context.Provider>
	)
}

export default App
