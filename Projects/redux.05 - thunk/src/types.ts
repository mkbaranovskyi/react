export interface ITodo {
	id: string
	completed: boolean
	title: string
	created: number
}

export type Action = {
	type: 'string'
	payload?: any
}
