import React, { useContext } from 'react'
import Context from '../../context'
import { IContext } from '../../types'

const SearchBar: React.FC = () => {
	const { filteredText, setFilteredText, inStock, setInStock } = useContext(
		Context
	) as IContext

	const handleTextChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		setFilteredText(e.target.value)
	}

	const handleCheckboxChange: React.ChangeEventHandler<HTMLInputElement> = (
		e
	) => {
		setInStock((prevState: boolean) => !prevState)
	}

	return (
		<form>
			<input
				value={filteredText}
				onChange={handleTextChange}
				placeholder="Search..."
			/>
			<p>
				<input
					type="checkbox"
					checked={inStock}
					onChange={handleCheckboxChange}
				/>
				<label htmlFor="inStock"> Only show products in stock</label>
			</p>
		</form>
	)
}

export default SearchBar
