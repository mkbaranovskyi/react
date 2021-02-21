import React from 'react'

export const TodoForm: React.FC = () => {
	return (
		<div className="input-field mt2">
			<label className="active">
				Enter your task
				<input placeholder="Buy milk" />
			</label>
		</div>
	)
}
