export interface ITodo {
	id: number
	completed: boolean
	title: string
}

export type ContextType = {
	removeTodo: Function
}
