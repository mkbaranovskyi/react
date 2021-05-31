import React, { useState } from 'react'

const AddTodo: React.FC<{ onCreate: Function }> = ({
	onCreate: createTodo
}) => {
	const [value, setValue] = useState('')

	const handleChange = (e: React.ChangeEvent) => {
		const target = e.target as HTMLInputElement
		setValue(target.value)
	}

	const handleSubmit = (e: React.FormEvent): void => {
		e.preventDefault()
		const trimmedValue: string = value.trim()
		if (trimmedValue) {
			createTodo(trimmedValue)
			setValue('')
		}
	}

	return (
		<form className="addTodo" onSubmit={handleSubmit}>
			<input value={value} onChange={handleChange} />
			<button>Add todo</button>
		</form>
	)
}

export default AddTodo
