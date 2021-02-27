import React from 'react'
import PropTypes from 'prop-types'
import { ITask } from '../interfaces'
import { nanoid } from 'nanoid'
import { TodoItem } from './TodoItem'

type TodoListProps = {
	tasks: ITask[]
}

const TodoList: React.FC<TodoListProps> = ({ tasks }) => {
	if (!tasks.length) {
		return <p className="center">No tasks</p>
	}

	return (
		<ul>
			{tasks.map((task: ITask) => (
				<TodoItem task={task} key={nanoid()} />
			))}
		</ul>
	)
}

TodoList.propTypes = {
	tasks: PropTypes.array.isRequired
}

export { TodoList }
