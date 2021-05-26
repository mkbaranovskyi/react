import { nanoid } from 'nanoid'
import React from 'react'
import { StatusFilters } from '../../types'

const RemainingTodos: React.FC<{ count: number }> = ({ count }) => {
	const suffix: string = count > 1 ? 's' : ''

	return (
		<div className="todo-count">
			<h5>Remaining Todos</h5>
			<strong>{count}</strong> item{suffix} left
		</div>
	)
}

const StatusFilter: React.FC<{ value: string; onChange: Function }> = ({
	value,
	onChange
}) => {
	const getName: Function =
		<T extends object, U extends keyof T>(key: U) =>
		(StatusFilters: T) =>
			StatusFilters[key]

	const renderedFilters = Object.keys(StatusFilters).map((key) => {
		const filter: string = getName(key)(StatusFilters)
		const className = value === filter ? 'selected' : ''

		return (
			<li key={nanoid()}>
				<button onClick={() => onChange(key)} className={className}>
					{filter}
				</button>
			</li>
		)
	})

	return (
		<div className="filters statusFilters">
			<h5>Filter by status</h5>
			{<ul>{renderedFilters}</ul>}
		</div>
	)
}

const Footer: React.FC = () => {
	const onStatusChange = (status: string) => console.log(status)

	return (
		<footer className="footer">
			<RemainingTodos count={3} />
			<StatusFilter value="All" onChange={onStatusChange} />
		</footer>
	)
}

export default Footer
