import React, { useState } from 'react'

const Header: React.FC = () => {
	const [text, setText] = useState<string>('')

	const handleChange = (e: React.FormEvent): void => {
		const target = e.target as HTMLInputElement
		setText(target.value)
	}

	return (
		<header className="header">
			<input
				className="new-todo"
				placeholder="What needs to be done?"
				value={text}
				onChange={handleChange}
			/>
		</header>
	)
}

export default Header
