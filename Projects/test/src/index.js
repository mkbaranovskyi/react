import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

function FormInput() {
	function changeForm(event) {
		console.log(event.target)
		event.preventDefault()
	}

	return (
		<form name="formData" onSubmit={changeForm}>
			<input name="inputWindow" placeholder="Введите название" />
			<button name="buttonSend">Добавить элемент</button>
		</form>
	)
}

function App() {
	return (
		<div>
			<FormInput />
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))
