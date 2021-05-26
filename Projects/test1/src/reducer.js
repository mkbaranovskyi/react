import { combineReducers } from 'redux'
import todosReducer from './features/todos/todoSlice'
import filtersReducer from './features/filters/filterSlice'

export default combineReducers({
	todos: todosReducer,
	filters: filtersReducer
})
