import todoReducer from './todoSlice'
test('Toggles a todo based on ID', () => {
	const initialState = [{ id: 0, text: 'Test text', completed: false }]

	const action = { type: 'todos/todoToggled', payload: 0 }
	const result = todoReducer(initialState, action)
	expect(result[0].completed).toBe(true)
})
