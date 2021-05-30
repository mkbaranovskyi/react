import React from 'react'
import ITodo from '../../interfaces'
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
	onChange: Function
}> = ({ todos, onChange }) => {
	return (
		<ul style={styles.ul}>
			{todos.map((todo, index) => (
				<TodoItem
					todo={todo}
					key={todo.id}
					index={index + 1}
					onChange={onChange}
				/>
			))}
		</ul>
	)
}

export default TodoList
