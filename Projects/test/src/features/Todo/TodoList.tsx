import React from 'react'
import { useSelector } from 'react-redux'
import { ITodo } from '../../types'
import TodoItem from './TodoItem'

const TodoList: React.FC = () => {
	const todos = useSelector((state: any): ITodo[] => state.todos)

	if (!todos.length) {
		return <h5>No todos yet</h5>
	}

	return (
		<ul className="todoItem">
			{todos.map((todo, index) => (
				<TodoItem todo={todo} key={todo.id} index={index + 1} />
			))}
		</ul>
	)
}

export default TodoList
