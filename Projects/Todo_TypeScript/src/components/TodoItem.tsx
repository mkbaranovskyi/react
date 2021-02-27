import React, { useContext } from 'react'
import Context from '../context'
import { ITask } from '../interfaces'

const TodoItem: React.FC<{ task: ITask }> = ({ task }) => {
	// Setting type `any` is important here to prevent error
	const { toggleTask, removeTask } = useContext(Context) as any

	const removeHandler = (event: React.MouseEvent, id: number): void => {
		// This fixes a bug when we click the remove button and then cancel it - the click bubbles to the checkbox and switches it
		event.preventDefault()
		removeTask(id)
	}

	const classes: string[] = ['task']
	if (task.completed) {
		classes.push('completed')
	}

	return (
		<li className={classes.join(' ')}>
			<label>
				<input type="checkbox" checked={task.completed} onChange={toggleTask.bind(null, task.id)} />
				<span>{task.title}</span>
				<i className="material-icons red-text" onClick={(event) => removeHandler(event, task.id)}>
					delete
				</i>
			</label>
		</li>
	)
}

export { TodoItem }
