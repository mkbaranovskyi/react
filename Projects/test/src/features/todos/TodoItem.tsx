import React from 'react'
import ITodo from '../../interfaces'

const TodoItem: React.FC<{
	todo: ITodo
	index: number
	onChange: Function
}> = ({ todo, index, onChange: toggleTodo }) => {
	// Это ебучая функция, а не ChangeEventHandler!!! Этот пидарский хендлер вызывается по онЧейнджу и вызывает обычную ебаную функцию ВНУТРИ СЕБЯ!

	return (
		<li className="todoItem">
			<span>
				<input type="checkbox" onChange={(e) => toggleTodo(index)} />
				<strong>{index}</strong>
				&nbsp;
				{todo.title}
			</span>
			<button className="removeButton">&times;</button>
		</li>
	)
}

export default TodoItem
