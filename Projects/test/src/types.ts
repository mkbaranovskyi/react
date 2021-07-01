export interface IProduct {
	category: string
	price: string
	stocked: boolean
	name: string
}

export interface IContext {
	filteredText: string
	setFilteredText: Function
	inStock: boolean
	setInStock: Function
}
