import React from 'react'
import ReactDOM from 'react-dom'

function App() {
	return (
		<div>
			<NameForm />
		</div>
	)
}

class NameForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = { value: '' }

		this.handleChange = this.handleChange.bind(this)
		this.handleSumbit = this.handleSumbit.bind(this)
	}

	// Without this, you won't be able to change the input value
	handleChange(e) {
		this.setState({ value: e.target.value })
	}

	handleSumbit(e) {
		console.log(this.state.value)
		e.target.elements.text.value = ''
		e.preventDefault()
	}

	render() {
		return (
			<form onSubmit={this.handleSumbit}>
				<label>
					Name:
					<input name="text" onChange={this.handleChange} />
				</label>
				<button type="submit">Submit</button>
			</form>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'))
