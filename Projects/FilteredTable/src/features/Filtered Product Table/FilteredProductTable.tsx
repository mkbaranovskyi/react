import React, { useState } from 'react'
import ProductTable from '../Product Table/ProductTable'
import SearchBar from '../Search Bar/SearchBar.'
import { IProduct } from '../../types'
import Context from '../../context'

const FilteredProductTable: React.FC<{ products: IProduct[] }> = ({
	products
}) => {
	const [filteredText, setFilteredText] = useState('')
	const [inStock, setInStock] = useState(false)

	return (
		<Context.Provider
			value={{ filteredText, setFilteredText, inStock, setInStock }}
		>
			<SearchBar />
			<ProductTable products={products} />
		</Context.Provider>
	)
}

export default FilteredProductTable
