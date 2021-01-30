import React from 'react'
import PropTypes from 'prop-types'
import Todoitem from './TodoItem'

const styles = {
	ul: {
		listStyle: 'none'
	}
}

function Todolist({ tasks, myOnToggle }) {
	return (
		<ul style={styles.ul}>
			{tasks.map((task, i) => (
				<Todoitem task={task} key={task.id} index={i} myOnChange={myOnToggle} />
			))}
		</ul>
	)
}

Todolist.propTypes = {
	tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
	myOnToggle: PropTypes.func.isRequired
}

export default Todolist
