import React, { useState } from 'react'
import ReactDOM from 'react-dom'

class CustomTextInput extends React.Component {
	// 1)
	textInput = React.createRef()

	focusTextInput = () => {
		// 3)
		this.textInput.current.focus()
	}

	componentDidMount() {
		this.focusTextInput()
	}

	render() {
		return (
			// 2)
			<div>
				<input ref={this.textInput} />
				<button type="button" onClick={this.focusTextInput}>
					"Focus the text input!"
				</button>
			</div>
		)
	}
}

function App() {
	return <CustomTextInput />
}

ReactDOM.render(<App />, document.getElementById('root'))
