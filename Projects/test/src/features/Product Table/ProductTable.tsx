import React, { useContext } from 'react'
import ProductCategoryRow from '../Product Category Row/ProductCategoryRow'
import ProductRow from '../Product Row/ProductRow'
import Context from '../../context'
import { IProduct, IContext } from '../../types'

const ProductTable: React.FC<{ products: IProduct[] }> = ({ products }) => {
	const { filteredText, inStock } = useContext(Context) as IContext
	const regex = new RegExp(filteredText, 'i')

	const rows: React.ReactNode[] = []
	const categories = new Set<string>()

	products.forEach((product) => {
		categories.add(product.category)
	})

	categories.forEach((category) => {
		rows.push(<ProductCategoryRow category={category} key={category} />)

		// 1. Remember the current length
		const length = rows.length

		products.forEach((product) => {
			if (product.category !== category) {
				return
			}
			if (!regex.test(product.name)) {
				return
			}
			if (!inStock || (inStock && product.stocked)) {
				rows.push(<ProductRow product={product} key={product.name} />)
			}
		})

		// 2. If no products were added to this category - remove the category
		if (rows.length === length) {
			rows.pop()
		}
	})

	return (
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Price</th>
				</tr>
			</thead>
			<tbody>{rows}</tbody>
		</table>
	)
}

export default ProductTable
