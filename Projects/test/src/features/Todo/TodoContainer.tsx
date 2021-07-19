import React from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const TodoContainer: React.FC = () => {
	return (
		<>
			<TodoForm />
			<TodoList />
		</>
	)
}

export default TodoContainer
