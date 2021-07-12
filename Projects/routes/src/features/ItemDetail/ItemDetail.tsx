import React from 'react'
import '../../index.css'

const ItemDetail: React.FC<{ match: any }> = ({ match }) => {
	return (
		<div>
			<h1>Item</h1>
			<h2>{match.params.id}</h2>
		</div>
	)
}

export default ItemDetail
