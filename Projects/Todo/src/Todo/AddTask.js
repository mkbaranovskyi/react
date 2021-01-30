import React, { useState } from 'react'
import PropTypes from 'prop-types'

// Out custom hook
function useInputValue(defaultValue = '') {
	const [value, setValue] = useState(defaultValue)
	return {
		bind: {
			value,
			onChange: (e) => setValue(e.target.value)
		},
		clear: () => setValue(''),
		value: () => value
	}
}

function AddTask({ onCreate }) {
	const input = useInputValue('')

	function submitForm(e) {
		e.preventDefault()
		if (input.value().trim()) {
			onCreate(input.value())
			// You should change the state, not just try to update the input value!
			input.clear()
		}
	}

	return (
		<form style={{ marginBottom: '1rem' }} onSubmit={submitForm}>
			<input type="text" {...input.bind} />
			<button type="submit">Add task</button>
		</form>
	)
}

AddTask.propTypes = {
	onCreate: PropTypes.func.isRequired
}

export default AddTask
