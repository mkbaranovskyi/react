import React, { useState, useEffect } from 'react'
import { useRouteMatch, Link } from 'react-router-dom'
import '../App.css'

function Shop() {
	const fetchItems = async () => {
		const response = await fetch('https://fortnite-api.com/v1/banners')
		const items = (await response.json()).data
		console.log(items)
		setItems(items)
	}

	const [items, setItems] = useState([])

	useEffect(() => {
		fetchItems()
	}, [])

	const about = useRouteMatch('/about')
	console.log(about)

	return (
		<div>
			<h1>Shop Page</h1>
			{items.map((item) => (
				<h4 key={item.id}>
					<Link to={`/shop/${item.id}`}>{item.devName}</Link>
				</h4>
			))}
		</div>
	)
}

export default Shop
