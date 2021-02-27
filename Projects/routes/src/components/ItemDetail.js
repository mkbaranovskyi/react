import React from 'react'
import '../App.css'

function ItemDetail({ match }) {
	return (
		<div>
			<h1>Item</h1>
			<h2>{match.params.id}</h2>
		</div>
	)
}

export default ItemDetail
