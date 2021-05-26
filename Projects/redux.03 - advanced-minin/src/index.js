import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
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
function logger(store) {
	return function (next) {
		return function (action) {
			console.log('state: ', store.getState())
			console.log('action: ', action)
			return next(action)
		}
	}
}

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk, logger))
)

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

	const buttons = Array.from(document.getElementsByTagName('button'))
	buttons.forEach((button) => {
		button.disabled = store.getState().theme.disabled
	})
})

// Render the initial state
store.dispatch({ type: 'INIT_APPLICATION' })
// This type doesn't exist and doesn't matter - default '0' will be rendered
