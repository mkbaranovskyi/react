import React, { useEffect, useState } from 'react'
import Context from './context'
import { Loader } from './features/loader'
// import AddTodo from './features/todos/AddTodo'
import TodoList from './features/todos/TodoList'
import { ITodo } from './type.d'

// Lazy loading
const AddTodo = React.lazy(() =>
	new Promise((resolve: any) => setTimeout(resolve, 2000)).then(
		() => import('./features/todos/AddTodo')
	)
)

function App() {
	const [todos, setTodos] = useState<ITodo[]>([])
	const [loading, setLoading] = useState<Boolean>(true)

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
			.then((response) => response.json())
			.then((todos) =>
				setTimeout(() => {
					setTodos(todos)
					setLoading(false)
				}, 1000)
			)
	}, [])

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
				<React.Suspense fallback={<Loader />}>
					<AddTodo onCreate={createTodo} />
				</React.Suspense>
				{loading && <Loader />}
				{todos.length ? (
					<TodoList todos={todos} onToggle={toggleTodo} />
				) : loading ? null : (
					<p>You don't have tasks</p>
				)}
			</div>
		</Context.Provider>
	)
}

export default App
