import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Context from '../context'

// Example of in-script styles; outer styles live in regular CSS
const styles = {
	li: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '.5rem 1rem',
		border: '1px solid #ccc',
		borderRadius: '4px',
		marginBottom: '.5rem'
	},
	input: {
		marginRight: '1rem'
	}
}

function TodoItem({ task, index, myOnChange }) {
	// Using the context, we can avoid touching the `TodoList` layer
	const { removeTask } = useContext(Context)

	const classes = []
	if (task.completed) {
		classes.push('done')
	}

	return (
		<li style={styles.li}>
			<span className={classes.join(' ')}>
				<input
					type="checkbox"
					checked={task.completed}
					style={styles.input}
					onChange={() => myOnChange(task.id)}
				/>
				<strong>{++index}) </strong>
				{task.title}
			</span>

			{/* Example of CSS class connection*/}
			<button className="rm" onClick={removeTask.bind(null, task.id)}>
				&times;
			</button>
		</li>
	)
}

TodoItem.propTypes = {
	task: PropTypes.object.isRequired,
	index: PropTypes.number,
	myOnChange: PropTypes.func.isRequired
}

export default TodoItem
