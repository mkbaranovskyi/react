import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import {
	asyncIncrement,
	changeTheme,
	decrement,
	increment
} from './redux/actions'
import { rootReducer } from './redux/rootReducer'
import './styles.css'

const $counter = document.getElementById('counter')
const $addBtn = document.getElementById('add')
const $subBtn = document.getElementById('sub')
const $asyncBtn = document.getElementById('async')
const $themeBtn = document.getElementById('theme')

// Example middleware
const logger = (store) => (next) => (action) => {
	console.log('state: ', store.getState())
	console.log('action: ', action)
	return next(action)
}

const store = configureStore({
	reducer: rootReducer,
	middleware: [thunk, logger]
})

$addBtn.addEventListener('click', () => {
	store.dispatch(increment())
})
$subBtn.addEventListener('click', () => {
	store.dispatch(decrement())
})
$asyncBtn.addEventListener('click', () => {
	store.dispatch(asyncIncrement())
})

$themeBtn.addEventListener('click', () => {
	const newTheme = document.body.classList.contains('dark') ? 'light' : 'dark'
	store.dispatch(changeTheme(newTheme))
})

// According to the Observer pattern, we subscribe to our changes
store.subscribe(() => {
	$counter.textContent = store.getState().counter
	document.body.className = store.getState().theme.value

	const isDisabled = store.getState().theme.disabled
	const buttons = Array.from(document.getElementsByTagName('button'))
	buttons.forEach((button) => (button.disabled = isDisabled))
})

// Render the initial state. This type doesn't exist and doesn't matter, it's just here as an example
store.dispatch({ type: 'INIT_APPLICATION' })
