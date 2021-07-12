import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../../index.css'

interface Item {
	id: string
	devName: string
	name: string
	description: string
	category: string
	fullUsageRights: boolean
	images: Object
}

const Shop: React.FC = () => {
	const [items, setItems] = useState<Item[]>([])

	const fetchItems = async () => {
		const response = await fetch('https://fortnite-api.com/v1/banners')
		const items: Item[] = (await response.json()).data
		console.log(items)
		setItems(items)
	}

	useEffect(() => {
		fetchItems()
	}, [])

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
