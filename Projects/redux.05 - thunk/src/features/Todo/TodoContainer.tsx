import React from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const TodoContainer: React.FC = () => {
	return (
		<div className="TodoContainer">
			<TodoForm />
			<TodoList />
		</div>
	)
}

export default TodoContainer
