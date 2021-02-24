import React from 'react'
import { ITask } from '../interfaces'
import { nanoid } from 'nanoid'

type TodoListProps = {
	tasks: ITask[]
	// syntax 1
	onToggle(id: number): void
	// syntax 2
	onRemove: (id: number) => void
}

export const TodoList: React.FC<TodoListProps> = ({
	tasks,
	onToggle,
	onRemove
}) => {
	const removeHandler = (event: React.MouseEvent, id: number): void => {
		// This fixes a bug when we click the remove button and then cancel it - the click bubbles to the checkbox and switches it
		event.preventDefault()
		onRemove(id)
	}

	if (!tasks.length) {
		return <p className="center">No tasks</p>
	}

	return (
		<ul>
			{tasks.map((task) => {
				const classes: string[] = ['task']
				if (task.completed) {
					classes.push('completed')
				}

				return (
					<li className={classes.join(' ')} key={nanoid()}>
						<label>
							<input
								type="checkbox"
								checked={task.completed}
								onChange={onToggle.bind(null, task.id)}
							/>
							<span>{task.title}</span>
							<i
								className="material-icons red-text"
								onClick={(event) => removeHandler(event, task.id)}
							>
								delete
							</i>
						</label>
					</li>
				)
			})}
		</ul>
	)
}
