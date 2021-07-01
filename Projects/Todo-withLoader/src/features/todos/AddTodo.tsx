import React, { useState } from 'react'

/**
 * This custom (optional) hook holds the info for our input
 * @param { string } defaultValue
 * @returns { value, onChange, clear } - exactly the parameters we pass to our input
 */
function useInputValue(defaultValue = '') {
	const [value, setValue] = useState(defaultValue)
	return {
		// This `bind` object is passed to the component as attributes - we don't just put everything in the returned object since the component doesn't need any extra clutter
		bind: {
			value,
			onChange: (e: React.ChangeEvent) => {
				const target = e.target as HTMLInputElement
				setValue(target.value)
			}
		},
		value: () => value,
		clear: () => setValue('')
	}
}

const AddTodo: React.FC<{ onCreate: Function }> = ({
	onCreate: createTodo
}) => {
	const input = useInputValue('') // an object with 2 fields

	const handleSubmit = (e: React.FormEvent): void => {
		e.preventDefault()
		const trimmedValue: string = input.value().trim()
		if (trimmedValue) {
			createTodo(trimmedValue)
			input.clear()
		}
	}

	// An example of destructuring of the attributes - we 'spread' our object with properties
	return (
		<form className="addTodo" onSubmit={handleSubmit}>
			<input {...input.bind} />
			<button>Add todo</button>
		</form>
	)
}

export default AddTodo
