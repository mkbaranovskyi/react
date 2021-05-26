import { combineReducers } from 'redux'
import filtersReducer from './features/filters/filterSlice'
import todosReducer from './features/todos/todoSlice'

const rootReducer = combineReducers({
	todos: todosReducer,
	filters: filtersReducer
})

export default rootReducer
