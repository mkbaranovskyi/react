import React from 'react'
import { IProduct } from '../../types'

const ProductRow: React.FC<{ product: IProduct }> = ({ product }) => {
	const name = product.stocked ? (
		product.name
	) : (
		<span style={{ color: 'red' }}>{product.name}</span>
	)
	return (
		<tr>
			<td>{name}</td>
			<td>{product.price}</td>
		</tr>
	)
}

export default ProductRow
