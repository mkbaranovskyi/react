import { nanoid } from 'nanoid'
import { stringify } from 'querystring'
import React from 'react'
import { StatusFilters } from '../../types'
import { availableColors, capitalize } from '../filters/colors'

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
	// This construction ensures TS that keys of "StatusFilters" will always be strings
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

const ColorFilters: React.FC<{ value: string[]; onChange: Function }> = ({
	value: colors,
	onChange
}) => {
	const renderedColors = availableColors.map((color) => {
		const checked: boolean = colors.includes(color)
		const handleChange = () => {
			const changeType: string = checked ? 'removed' : 'added'
			onChange(color, changeType)
		}

		return (
			<label key={color}>
				<input type="checkbox" checked={checked} onChange={handleChange} />
				<span className="color-block" style={{ backgroundColor: color }}></span>
				{capitalize(color)}
			</label>
		)
	})

	return (
		<div className="filters colorFilters">
			<h5>Filter by Color</h5>
			<form className="colorSelection">{renderedColors}</form>
		</div>
	)
}

const Footer: React.FC = () => {
	const colors: string[] = []
	const status: string = StatusFilters.all
	const onStatusChange = (status: string) => console.log(status)
	const onColorChange = (color: string, changeType: string) => {
		console.log('Color change', { color, changeType })
	}

	return (
		<footer className="footer">
			<RemainingTodos count={3} />
			<StatusFilter value={status} onChange={onStatusChange} />
			<ColorFilters value={colors} onChange={onColorChange} />
		</footer>
	)
}

export default Footer
