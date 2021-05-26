import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { store } from './app/store'
import { Provider } from 'react-redux'

// Log the initial State
console.log('Initial State: ', store.getState())

// Subscribe to get console logs
const unsubscribe = store.subscribe(() => {
	console.log(store.getState())
})

// Dispatch some test actions
store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about actions' })
store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about reducers' })
store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about stores' })

store.dispatch({ type: 'todos/todoToggled', payload: 1 })
store.dispatch({ type: 'todos/todoToggled', payload: 0 })

store.dispatch({ type: 'filters/statusFilterChanged', payload: 'Active' })
store.dispatch({
	type: 'filters/colorFilterChanged',
	payload: { color: 'red', changeType: 'added' }
})

// Unsob to stop receiving logs
unsubscribe()

// Try to dispatch another action - no more logs!
store.dispatch({ type: 'todos/todoAdded', payload: 'Try creating a store' })

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
)
