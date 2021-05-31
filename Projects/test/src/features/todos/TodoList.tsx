import React from 'react'
import { ITodo } from '../../type'
import TodoItem from './TodoItem'

const styles = {
	ul: {
		listStyle: 'none',
		margin: 0,
		padding: 0
	}
}

const TodoList: React.FC<{
	todos: ITodo[]
	onToggle: Function
}> = ({ todos, onToggle }) => {
	return (
		<ul style={styles.ul}>
			{todos.map((todo, index) => (
				<TodoItem
					todo={todo}
					key={todo.id}
					index={index + 1}
					onToggle={onToggle}
				/>
			))}
		</ul>
	)
}

export default TodoList
