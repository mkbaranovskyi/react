import { createStore } from './createStore'
import { DECREMENT, INCREMENT } from './redux/types'
import { rootReducer } from './redux/rootReducer'
import './styles.css'

const $counter = document.getElementById('counter')
const $addBtn = document.getElementById('add')
const $subBtn = document.getElementById('sub')
const $asyncBtn = document.getElementById('async')
const $themeBtn = document.getElementById('theme')

const store = createStore(rootReducer, 0)

$addBtn.addEventListener('click', () => {
	store.dispatch({ type: INCREMENT })
})

$subBtn.addEventListener('click', () => {
	store.dispatch({ type: DECREMENT })
})

// According to the Observer pattern, we subscribe to our changes
store.subscribe(() => {
	const state = store.getState()
	$counter.textContent = state
})

// Render the initial state
store.dispatch({ type: 'INIT_APPLICATION' })
// This type doesn't exist and doesn't matter - default '0' will be rendered

$asyncBtn.addEventListener('click', () => {
	setTimeout(() => store.dispatch({ type: INCREMENT }), 1000)
})

$themeBtn.addEventListener('click', () => {
	document.body.classList.toggle('dark')
})
