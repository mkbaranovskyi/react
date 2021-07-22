import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'
import { RootState } from '../../app/store'

const TodoList: React.FC = () => {
	const todos = useSelector((state: RootState) => state.todos)

	if (!todos.length) {
		return <h5>No todos yet</h5>
	}

	return (
		<ul className="todoList">
			{todos.map((todo, index) => (
				<TodoItem todo={todo} key={todo.id} index={index + 1} />
			))}
		</ul>
	)
}

export default TodoList
